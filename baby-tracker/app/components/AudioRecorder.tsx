// components/AudioRecorder.tsx
import React, { useState, useRef } from 'react';

export default function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        convertToWav(audioBlob);
        audioChunksRef.current = []; // Clear the chunks
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const convertToWav = async (webmBlob: Blob) => {
    // Convert the webmBlob to an array buffer
    const arrayBuffer = await webmBlob.arrayBuffer();
    const audioContext = new AudioContext();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    // Create an empty buffer with the same length as the audio data
    const offlineContext = new OfflineAudioContext(
      audioBuffer.numberOfChannels,
      audioBuffer.length,
      audioBuffer.sampleRate
    );

    // Create a buffer source and set its buffer
    const bufferSource = offlineContext.createBufferSource();
    bufferSource.buffer = audioBuffer;
    bufferSource.connect(offlineContext.destination);
    bufferSource.start();

    // Render the audio data to an array buffer
    const renderedBuffer = await offlineContext.startRendering();

    // Convert the rendered buffer to a .wav file
    const wavBlob = audioBufferToWav(renderedBuffer);
    setAudioBlob(wavBlob);
  };

  const audioBufferToWav = (buffer: AudioBuffer) => {
    const numOfChannels = buffer.numberOfChannels;
    const length = buffer.length * numOfChannels * 2 + 44;
    const bufferArray = new ArrayBuffer(length);
    const view = new DataView(bufferArray);

    // Write WAV file headers
    writeString(view, 0, 'RIFF');
    view.setUint32(4, length - 8, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true); // PCM format chunk length
    view.setUint16(20, 1, true); // Audio format (1 = PCM)
    view.setUint16(22, numOfChannels, true);
    view.setUint32(24, buffer.sampleRate, true);
    view.setUint32(28, buffer.sampleRate * 4, true);
    view.setUint16(32, numOfChannels * 2, true);
    view.setUint16(34, 16, true); // Bits per sample
    writeString(view, 36, 'data');
    view.setUint32(40, length - 44, true);

    // Write PCM data
    let offset = 44;
    for (let i = 0; i < buffer.length; i++) {
      for (let channel = 0; channel < numOfChannels; channel++) {
        const sample = buffer.getChannelData(channel)[i];
        const intSample = Math.max(-1, Math.min(1, sample));
        view.setInt16(offset, intSample < 0 ? intSample * 0x8000 : intSample * 0x7FFF, true);
        offset += 2;
      }
    }

    return new Blob([view], { type: 'audio/wav' });
  };

  const writeString = (view: DataView, offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  const handleUpload = async () => {
    if (audioBlob) {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.wav');

      try {
        const response = await fetch('/api/upload-audio', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Audio uploaded successfully');
        } else {
          console.error('Failed to upload audio');
        }
      } catch (error) {
        console.error('Error uploading audio:', error);
      }
    }
  };

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {audioBlob && (
        <audio controls src={URL.createObjectURL(audioBlob)}></audio>
      )}
      {audioBlob && (
        <button onClick={handleUpload}>Upload Audio</button>
      )}
    </div>
  );
}

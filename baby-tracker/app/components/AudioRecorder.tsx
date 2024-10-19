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
        setAudioBlob(audioBlob);
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

  const handleUpload = async () => {
    if (audioBlob) {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');

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

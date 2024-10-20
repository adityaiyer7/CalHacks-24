import React, { useState, useRef, useEffect } from 'react';
import AudioCaptureButton from './AudioCaptureButton';
import { AIVoiceChatBotProps } from '../types';

export default function AudioRecorder({ handleAIBotRecording }: AIVoiceChatBotProps) {
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [audioURL, setAudioURL] = useState<string | null>(null);
    const [isAudioFileDownloaded, setIsAudioFileDownloaded] = useState(false);
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
            handleAIBotRecording && handleAIBotRecording();
            mediaRecorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error('Error accessing microphone:', error);
        }
    };

    const stopRecording = () => {
        handleAIBotRecording && handleAIBotRecording();
        mediaRecorderRef.current?.stop();
        mediaRecorderRef.current?.stream.getTracks().forEach(track => track.stop());
        setIsRecording(false);
    };

    const convertToWav = async (webmBlob: Blob) => {
        const arrayBuffer = await webmBlob.arrayBuffer();
        const audioContext = new AudioContext();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        const offlineContext = new OfflineAudioContext(
            audioBuffer.numberOfChannels,
            audioBuffer.length,
            audioBuffer.sampleRate
        );

        const bufferSource = offlineContext.createBufferSource();
        bufferSource.buffer = audioBuffer;
        bufferSource.connect(offlineContext.destination);
        bufferSource.start();

        const renderedBuffer = await offlineContext.startRendering();
        const wavBlob = audioBufferToWav(renderedBuffer);
        setAudioBlob(wavBlob);

        const url = URL.createObjectURL(wavBlob);
        setAudioURL(url);
    };

    const audioBufferToWav = (buffer: AudioBuffer) => {
        const numOfChannels = buffer.numberOfChannels;
        const length = buffer.length * numOfChannels * 2 + 44;
        const bufferArray = new ArrayBuffer(length);
        const view = new DataView(bufferArray);

        writeString(view, 0, 'RIFF');
        view.setUint32(4, length - 8, true);
        writeString(view, 8, 'WAVE');
        writeString(view, 12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, numOfChannels, true);
        view.setUint32(24, buffer.sampleRate, true);
        view.setUint32(28, buffer.sampleRate * 4, true);
        view.setUint16(32, numOfChannels * 2, true);
        view.setUint16(34, 16, true);
        writeString(view, 36, 'data');
        view.setUint32(40, length - 44, true);

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

   
    const downloadAudio = () => {
        if (audioURL) {
            const link = document.createElement('a');
            link.href = audioURL;
            link.download = 'recording.wav'; // Name of the file to be downloaded
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setIsAudioFileDownloaded(true);
        }
    };

    useEffect(() => {
        if (audioURL) {
            downloadAudio();
        } 
    }, [audioURL]);

    useEffect(() => {
        const fetchEndPoint = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/run_main', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (isAudioFileDownloaded) {
            fetchEndPoint();
        }
    }, [isAudioFileDownloaded]);

    return (
        <div className="flex flex-col items-center">
            <AudioCaptureButton 
                onClick={isRecording ? stopRecording : startRecording} 
                isRecording={isRecording} 
            />
        </div>
    );
}
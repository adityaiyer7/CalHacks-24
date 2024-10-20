import { useEffect, useState, useRef } from 'react';
import 'regenerator-runtime/runtime';

interface SpeechToTextOptions {
  interimResults?: boolean;
  lang?: string;
  continuous?: boolean;
}

interface UseSpeechToTextReturn {
  isListening: boolean;
  transcript: string;
  startListening: () => void;
  stopListening: () => void;
}

const useSpeechToText = (options: SpeechToTextOptions = {}): UseSpeechToTextReturn => {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {console.log(transcript)}, [transcript]);

  useEffect(() => {
    // Check if the browser supports webkitSpeechRecognition
    if (!('webkitSpeechRecognition' in window)) {
      console.error("Speech recognition is not supported in this browser");
      return;
    }

    // Initialize the SpeechRecognition object
    recognitionRef.current = new (window as any).webkitSpeechRecognition();
    const recognition = recognitionRef.current;
    if (!recognition) return; // Ensure recognition is not null before proceeding

    recognition.interimResults = options.interimResults ?? true;
    recognition.lang = options.lang ?? 'en-US';
    recognition.continuous = options.continuous ?? false;

    // Handle the results from speech recognition
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const transcript = result[0].transcript;
        if (result.isFinal) {
          setTranscript((prevTranscript) => prevTranscript + transcript);
        } else {
          interimTranscript += transcript;
        }
      }
    };

    // Handle errors during recognition
    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error", event.error);
    };

    // Handle the end of the recognition process
    recognition.onend = () => {
      console.log("Recognition ended.");
      setIsListening(false);
    };

    // Clean up on component unmount
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.onend = null;
        recognitionRef.current.onresult = null;
        recognitionRef.current.onerror = null; // Clear error handler
        recognitionRef.current.stop();
      }
    };
  }, [options.interimResults, options.lang, options.continuous]);

  // Function to start listening
  const startListening = () => {
    const recognition = recognitionRef.current; // Check null here
    if (recognition && !isListening) {
      recognition.start();
      console.log("Listening...");
      setIsListening(true);
    }
  };

  // Function to stop listening
  const stopListening = () => {
    const recognition = recognitionRef.current; // Check null here
    if (recognition && isListening) {
      recognition.stop();
      console.log("Stopped listening.");
    }
  };

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
  };
};

export default useSpeechToText;

export type AIVoiceChatBotProps = {
    handleAIBotClick?: () => void;
    handleAIBotRecording?: () => void;
}

export type MessageProps = {
    message: string;
    isBot: boolean;
}

export type AudioCaptureButtonProps = {
    onClick: () => void;
    isRecording: boolean;
}
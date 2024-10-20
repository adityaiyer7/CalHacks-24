export type AIVoiceChatBotProps = {
    handleAIBotClick?: () => void;
    handleAIBotRecording?: () => void;
    handleSelectedTab? : (navName: string) => void;
    parentSelectedTab?: string;
}

export type MessageProps = {
    message: string;
    isBot: boolean;
}

export type AudioCaptureButtonProps = {
    onClick: () => void;
    isRecording: boolean;
}

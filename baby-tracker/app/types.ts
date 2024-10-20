export type AIVoiceChatBotProps = {
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

export type AIBotProps = {
    isOpen: boolean;
    handleAIBotClick: () => void;
}

export type BabyBottleProps = {
    progress: number;
}

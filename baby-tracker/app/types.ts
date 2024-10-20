export type AIVoiceChatBotProps = {
    handleAIBotClick?: () => void;
    handleAIBotRecording?: () => void;
}

export type MessageProps = {
    message: string;
    isBot: boolean;
}
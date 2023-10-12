type BotProps = {
    chatflowid: string;
    apiHost?: string;
    chatflowConfig?: Record<string, unknown>;
    theme: any;
    disabled?: boolean;
    usageTier?: string;
    mailButtonColor?: string;
};
export declare const initFull: (props: BotProps & {
    id?: string;
}) => Promise<void>;
export declare const init: (props: BotProps) => Promise<void>;
type Chatbot = {
    initFull: typeof initFull;
    init: typeof init;
};
export declare const parseChatbot: () => {
    initFull: (props: BotProps & {
        id?: string;
    }) => Promise<void>;
    init: (props: BotProps) => Promise<void>;
};
export declare const injectChatbotInWindow: (bot: Chatbot) => void;
export {};
//# sourceMappingURL=window.d.ts.map
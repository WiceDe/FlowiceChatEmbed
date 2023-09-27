declare const chatbot: {
    initFull: (props: {
        chatflowid: string;
        apiHost?: string | undefined;
        chatflowConfig?: Record<string, unknown> | undefined;
        theme: any;
        disabled?: boolean | undefined;
        usageTier?: string | undefined;
    } & {
        id?: string | undefined;
    }) => Promise<void>;
    init: (props: {
        chatflowid: string;
        apiHost?: string | undefined;
        chatflowConfig?: Record<string, unknown> | undefined;
        theme: any;
        disabled?: boolean | undefined;
        usageTier?: string | undefined;
    }) => Promise<void>;
};
export default chatbot;
//# sourceMappingURL=web.d.ts.map
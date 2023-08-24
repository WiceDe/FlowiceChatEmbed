declare const chatbot: {
    initFull: (props: {
        chatflowid: string;
        apiHost?: string | undefined;
        chatflowConfig?: Record<string, unknown> | undefined;
    } & {
        id?: string | undefined;
    }) => Promise<void>;
    init: (props: {
        chatflowid: string;
        apiHost?: string | undefined;
        chatflowConfig?: Record<string, unknown> | undefined;
    }) => Promise<void>;
};
export default chatbot;
//# sourceMappingURL=web.d.ts.map
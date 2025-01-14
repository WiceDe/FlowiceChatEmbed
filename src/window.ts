/* eslint-disable solid/reactivity */
type BotProps = {
    chatflowid: string,
    apiHost?: string,
    chatflowConfig?: Record<string, unknown>,
    theme: any,
    disabled?: boolean,
    usageTier?: string,
    mailButtonColor?: string,
}

async function getConfig(apiHost: string, apiKey: string) {
  try {
    const response = await fetch(apiHost+'/api/v1/config/'+apiKey);
    const data = await response.json();
    if('config' in data) return data.config;
  } catch (error) {
    console.error('Error:', error);
  }
  return {};
}


export const initFull = async (props: BotProps & { id?: string }) => {
    const fullElement = props.id
      ? document.getElementById(props.id)
      : document.querySelector('flowise-fullchatbot')

    const config = await getConfig(props.apiHost || '', props.chatflowid || '');

    if(config && config.theme) props.theme = config.theme;
    if(config && config.usage && config.usage.disabled) props.disabled = true;
    if(config && config.usage && config.usage.usage_tier) props.usageTier = config.usage.usage_tier;

    if (!fullElement) throw new Error('<flowise-fullchatbot> element not found.')
    Object.assign(fullElement, props)
}

export const init = async (props: BotProps) => {
    const element = document.createElement('flowise-chatbot')

    const config = await getConfig(props.apiHost || '', props.chatflowid || '');
    if(config && config.theme) props.theme = config.theme;
    if(config && config.usage && config.usage.disabled) props.disabled = true;
    if(config && config.usage && config.usage.usage_tier) props.usageTier = config.usage.usage_tier;

    Object.assign(element, props)
    document.body.appendChild(element)
}

type Chatbot = {
    initFull: typeof initFull
    init: typeof init
}

declare const window:
    | {
          Chatbot: Chatbot | undefined
      }
    | undefined

export const parseChatbot = () => ({
    initFull,
    init
})

export const injectChatbotInWindow = (bot: Chatbot) => {
    if (typeof window === 'undefined') return
    window.Chatbot = { ...bot }
}

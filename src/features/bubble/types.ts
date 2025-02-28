export type BubbleParams = {
    theme?: BubbleTheme
    disabled?: boolean
}

export type BubbleTheme = {
    chatWindow?: ChatWindowTheme
    button?: ButtonTheme
    header?: HeaderTheme
}

export type TextInputTheme = {
    backgroundColor?: string
    textColor?: string
    placeholder?: string
    sendButtonColor?: string
}

export type UserMessageTheme = {
    backgroundColor?: string
    textColor?: string
    showAvatar?: boolean
    avatarSrc?: string
}

export type BotMessageTheme = {
    backgroundColor?: string
    textColor?: string
    showAvatar?: boolean
    avatarSrc?: string
    linkColor?: string
}

export type ChatWindowTheme = {
    welcomeMessage?: string
    backgroundColor?: string
    height?: number
    width?: number
    fontSize?: number
    userMessage?: UserMessageTheme
    botMessage?: BotMessageTheme
    textInput?: TextInputTheme
    poweredByTextColor?: string
}

export type ButtonTheme = {
    size?: 'medium' | 'large'
    backgroundColor?: string
    iconColor?: string
    customIconSrc?: string
    bottom?: number
    right?: number
}

export type HeaderTheme = {
  headerTextColor?: string
  headerBackgroundColor?: string
  headerImageUrl?: string
  headerText?: string
  headerContactLink?: string
  mailButtonColor?: string
}

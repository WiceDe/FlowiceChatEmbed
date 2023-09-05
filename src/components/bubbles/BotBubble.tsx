import { Show, onMount } from 'solid-js'
import { Avatar } from '../avatars/Avatar'
import { Marked, Renderer } from '@ts-stack/markdown'

type Props = {
  message: string
  showAvatar?: boolean
  avatarSrc?: string
  backgroundColor?: string
  textColor?: string
  linkColor?: string
}

const defaultBackgroundColor = '#f7f8ff'
const defaultTextColor = '#303235'
var linkColor = '#096bda';

class LinkRenderer extends Renderer {
  override link(href: string, title: string, text: string) {
    var link = Renderer.prototype.link.call(this, href, title, text);
    return link.replace("<a",`<a style="${linkColor}" class="styled-link" `);
  }
}

Marked.setOptions({ isNoP: true, renderer: new LinkRenderer })

export const BotBubble = (props: Props) => {
  let botMessageEl: HTMLDivElement | undefined

  onMount(() => {
    if (botMessageEl) {
      botMessageEl.innerHTML = Marked.parse(props.message)
    }
    if(props.linkColor) linkColor = props.linkColor;
  })

  return (
    <div
      class="flex justify-start mb-2 items-start host-container"
      style={{ 'margin-right': '50px' }}
    >
      <Show when={props.showAvatar}>
        <Avatar initialAvatarSrc={props.avatarSrc} />
      </Show>
      <span
        ref={botMessageEl}
        class="px-4 py-2 ml-2 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style={{ "background-color": props.backgroundColor ?? defaultBackgroundColor, color: props.textColor ?? defaultTextColor, 'border-radius': '6px' }}
      />
    </div>
  )
}

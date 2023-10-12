import { onCleanup, onMount } from 'solid-js'

type Props = {
  botContainer: HTMLDivElement | undefined
  headerTextColor?: string
  HeaderBackgroundColor?: string
  usageTier?: string
}

const defaultTextColor = '#303235'

export const Header = (props: Props) => {
  let liteHeader: HTMLAnchorElement | undefined
  let observer: MutationObserver | undefined

  const appendHeaderIfNecessary = (mutations: MutationRecord[]) => {
    mutations.forEach((mutation) => {
      mutation.removedNodes.forEach((removedNode) => {
        if (
          'id' in removedNode &&
          liteHeader &&
          removedNode.id == 'lite-Header'
        ) {
          console.log("Sorry, you can't remove the brand 😅")
          props.botContainer?.append(liteHeader)
        }
      })
    })
  }

  onMount(() => {
    if (!document || !props.botContainer) return
    observer = new MutationObserver(appendHeaderIfNecessary)
    observer.observe(props.botContainer, {
      subtree: false,
      childList: true,
    })
  })

  onCleanup(() => {
    if (observer) observer.disconnect()
  })

  if(props.usageTier && props.usageTier === "3") {
    return (
      <span style={{
        "font-size": '13px',
        position: 'absolute',
        bottom: 0,
        padding: '10px',
        margin: 'auto',
        width: '100%',
        "text-align": 'center',
        color: props.headerTextColor ?? defaultTextColor,
        "background-color": props.HeaderBackgroundColor ?? '#ffffff'
      }}>
      </span>
    )
  }

  return (
    <span style={{
      "font-size": '13px',
      position: 'absolute',
      bottom: 0,
      padding: '10px',
      margin: 'auto',
      width: '100%',
      "text-align": 'center',
      color: props.headerTextColor ?? defaultTextColor,
      "background-color": props.HeaderBackgroundColor ?? '#ffffff'
    }}>Header Text goes here...
    </span>
  )
}

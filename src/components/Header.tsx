import { onCleanup, onMount } from 'solid-js'

type Props = {
  botContainer: HTMLDivElement | undefined
  headerTextColor?: string
  headerBackgroundColor?: string
  headerText?: string
  headerImageUrl?: string
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

  // if(props.usageTier && props.usageTier === "3")

  const headerText = (props.headerText)? props.headerText : 'Header Text goes here...';
  return (
    <span style={{
      "font-size": '13px',
      position: 'relative',
      top: 0,
      padding: '10px',
      margin: 'auto',
      width: '100%',
      "text-align": 'left',
      color: props.headerTextColor ?? defaultTextColor,
      "background-color": props.headerBackgroundColor ?? '#70AD47'
    }}>{props.headerImageUrl} {headerText}
    </span>
  )
}

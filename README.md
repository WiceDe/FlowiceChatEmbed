<!-- markdownlint-disable MD030 -->

# Wice Chat Embed

Javascript library to display the wice chatbot on your website


Install:

```bash
yarn install
```

Dev:

```bash
yarn dev
```

Build:

```bash
yarn build
```

## Embed in your HTML

### PopUp

```html
<script type="module">
  import Chatbot from "https://cdn.jsdelivr.net/gh/WiceDe/WiceChatEmbed@1.0.2/dist/web.js";
  Chatbot.init({
    chatflowid: "YOUR API KEY",
    apiHost: "https://wmg.wice.de",
  });
</script>
```

### FullPage

```html
<script type="module">
  import Chatbot from "./web.js";
  Chatbot.initFull({
    chatflowid: "YOUR API KEY",
    apiHost: "https://wmg.wice.de",
  });
</script>
<flowise-fullchatbot></flowise-fullchatbot>
```

To enable full screen, add `margin: 0` to <code>body</code> style, and confirm you don't set height and width

```html
<body style="margin: 0">
  <script type="module">
    import Chatbot from "https://cdn.jsdelivr.net/gh/WiceDe/WiceChatEmbed@1.0.2/dist/web.js";
    Chatbot.initFull({
      chatflowid: "YOUR API KEY",
      apiHost: "https://wmg.wice.de",
      theme: {
        chatWindow: {
          // height: 700, don't set height
          // width: 400, don't set width
        }
      }
  });
  </script>
</body>
```
Custom Configuration is automatically fetched from backend.

### Example of chat

In test.html you find an example of how to add the chat to a website.

With `python fileServer.py` you can view the example page on your local machine.

## License

Source code in this repository is made available under the [MIT License]https://github.com/FlowiseAI/Flowise/blob/main/LICENSE.md).

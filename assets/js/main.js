function setCommentsTheme(match){
    const message = {
        type: 'set-theme',
        theme: match ? "github-dark" : "github-light"
      };

      console.log(message.theme);

      var utterances = document.querySelector('iframe');
      utterances.contentWindow.postMessage(message, 'https://utteranc.es');
}

let preferDark = window.matchMedia("(prefers-color-scheme: dark)");
preferDark.addEventListener("change", (e) => {
    setCommentsTheme(e.matches)
})

// wait for utterances to load and send it's first message.
addEventListener('message', event => {
    if (event.origin !== 'https://utteranc.es') {
      return;
    }
    setCommentsTheme(preferDark.matches)
  });
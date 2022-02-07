function setCommentsTheme(match){
    console.log(match)
    const message = {
        type: 'set-theme',
        theme: match ? "github-dark" : "github-light"
      };

      var utterances = document.querySelector('iframe');
      utterances.contentWindow.postMessage(message, 'https://utteranc.es');
}

let preferDark = window.matchMedia("(prefers-color-scheme: dark)");

window.onload = () => {
    setCommentsTheme(preferDark.matches);
}

preferDark.addEventListener("change", (e) => {
    setCommentsTheme(e.matches)
})
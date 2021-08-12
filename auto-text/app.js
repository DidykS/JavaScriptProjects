const text = document.querySelector("#text")
const outputText = "Hello, we love you!!!"
let out = ""

let idx = 0

function writeText() {
  let interval = setTimeout(() => {
    out += outputText[idx]
    text.innerText = out + "|"
    idx++

    if (idx == outputText.length) {
      clearTimeout(interval)
      text.innerText = out
      return true
    }
    writeText()
  }, 300)
}

writeText()
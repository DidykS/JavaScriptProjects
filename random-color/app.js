let btn = document.getElementById("btn")
let text = document.getElementById("text")
let copy = document.querySelector("#copy")

btn.addEventListener("click", getRandom)
copy.addEventListener("click", copyText)

/* getRandom function
  In this function, I take random colors from the method, 
  change body style at this color, and add color hex code to the page.
*/
function getRandom() {
  let randomColor = Math.floor(Math.random() * 16777216).toString(16)
  document.body.style.background = "#" + randomColor
  text.innerHTML = "#" + randomColor
  copy.innerText = "Copy"
}

/* copyText function 
  This function sends the text to the clipboard on click on the block.
*/
function copyText() {
  navigator.clipboard.writeText(text.innerText)
  copy.innerText = "Copied"
}
let btn = document.getElementById("btn")
let text = document.getElementById("text")

btn.addEventListener("click", getRandom)

/* getRandom function
  In this function, I take random colors from the method, 
  change body style at this color, and add color hex code to the page.
*/
function getRandom() {
  let randomColor = Math.floor(Math.random() * 16777216).toString(16)
  document.body.style.background = "#" + randomColor
  text.innerHTML = "#" + randomColor
}
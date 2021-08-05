let switcher = document.querySelector(".switcher");
let ball = document.querySelector(".ball")
let container = document.querySelector(".container")
let light = document.querySelector(".light")

switcher.addEventListener("click", function() {
  ball.classList.toggle("check")
  container.classList.toggle("dark")
  light.classList.toggle("on")
})

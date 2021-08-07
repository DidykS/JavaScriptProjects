let switcher = document.querySelector(".switcher");
let ball = document.querySelector(".ball")
let container = document.querySelector(".container")
let light = document.querySelector(".light")

// In this click function, I change from default styles to dark styles
switcher.addEventListener("click", function() {
  ball.classList.toggle("check")
  container.classList.toggle("dark")
  light.classList.toggle("on")
})

const burger = document.querySelector("#burger")
const headerInner = document.querySelector(".header__inner")
const nav = document.querySelector("#nav")

burger.addEventListener("click", function() {
  nav.classList.toggle("show__menu")
  headerInner.classList.toggle("bd")
})
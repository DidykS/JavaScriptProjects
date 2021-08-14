const filterBox = document.querySelectorAll(".box")
const filterNav = document.querySelector(".filter__nav")

filterNav.addEventListener("click", filterContent)

/* filterContent function
  the function filters filter__content's content
*/
function filterContent(event) {
  if (event.target.tagName !== "LI") {
    return false
  }
  
  let target = event.target.dataset.filter
  let showAll = target == "all"
  
  filterBox.forEach(item => {
    if (!item.classList.contains(target) && !showAll) {
      item.classList.add("hide")
    }
    else {
      item.classList.remove("hide")
    }
  })
}

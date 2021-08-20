const accordion = document.querySelectorAll(".accordion__item")

accordion.forEach(item => {
  item.addEventListener("click", function() {
    const content = this.querySelector(".accordion__content")
    
    if (item.classList.contains("active")) {
      item.classList.remove("active")
      content.style.maxHeight = "0"
    }
    else {
      accordion.forEach(child => {
        child.classList.remove("active")
        child.querySelector(".accordion__content").style.maxHeight = "0"
      })

      item.classList.add("active")
      content.style.maxHeight = content.scrollHeight + "px"
    }
  })
})
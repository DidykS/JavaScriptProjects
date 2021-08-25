let counterTarget = document.querySelectorAll(".counter__target")

counterTarget.forEach(item => {
  function liveCount() {
    const target = +item.getAttribute("data-target")
    const text = +item.innerText
    const increment = target / 200

    if (text < target) {
      item.innerText = `${Math.ceil(text + increment)}`
      setTimeout(liveCount, 1)
    }
    else {
      item.innerText = target
    }
  }
  liveCount()
})
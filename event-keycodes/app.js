const keyInner = document.querySelector("#key__inner")

window.addEventListener("keydown", function(event) {
  
  keyInner.innerHTML = `
    <div class="key">
      ${event.key == " " ? "Space" : event.key}
      <span>event.key</span>
    </div>

    <div class="key">
      ${event.keyCode}
      <span>event.keyCode</span>
    </div>
    
    <div class="key">
      ${event.code}
      <span>event.code</span>
    </div>
  `
})
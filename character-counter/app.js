let input = document.getElementById("input");
let text = document.getElementById("span")

input.onkeyup = function() {
  text.innerHTML = "Letter count: " + input.value.length;
}
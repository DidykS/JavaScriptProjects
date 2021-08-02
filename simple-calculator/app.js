let input = document.querySelector('input')

// Input numbers to the area
function insert(ch) {
  input.value += ch
}

// Clear input
function clearInput() {
  input.value = ""
}

// Delete last num
function deleteArrow() {
  let target = input.value
  input.value = target.substring(0, target.length - 1)
}

// Result
function result() {
  let target = input.value

  if (target) {
    input.value = eval(target)
  }
  else {
    alert("Please, fill in the blank")
  }
}
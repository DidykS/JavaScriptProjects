let input = document.querySelector('input')

// Input numbers to the area:
// In this function, as a parameter, I accept the character which is entered in an input field.
function insert(ch) {
  input.value += ch
}

// Clear input:
// In this function, I clear the field for entering numbers.
function clearInput() {
  input.value = ""
}

// Delete last num:
// This function removes the last character in the number entry field.
function deleteArrow() {
  let target = input.value
  input.value = target.substring(0, target.length - 1)
}

// Result
// In this function, I use the built-in function eval (). The eval function executes the code presented as a string.
function result() {
  let target = input.value

  if (target) {
    input.value = eval(target)
  }
  else {
    alert("Please, fill in the blank")
  }
}
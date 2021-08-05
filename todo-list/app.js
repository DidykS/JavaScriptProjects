let work = document.querySelector(".list")
let add = document.querySelector("#add");

let list = document.querySelector("#todos")
let remove = document.querySelector("#remove")

// Function of click:
// In this click function, I create a new block with a note.
// After that, I check if the user has entered the text in the input field.
// If not, the createNotife() function is called.
// Else, the note is added to the page.
add.addEventListener("click", function() {
  let addlist = `<div class="todos">
  <div class="work">${input.value}</div>
  <button class="remove btn btn--red" id="remove" type="button">remove</button>
  </div>`;

  if (input.value.length == 0) {
    createNotife()
  }
  else {
    list.innerHTML += addlist;
    input.value = "";
  }
})
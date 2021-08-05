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

work.addEventListener("click", checked)
work.addEventListener("click", removeWork)

// This function creates a notification block If the user has not entered text in the input field and removes it after 3 sseconds.
function createNotife() {
  const notif = document.createElement('div')
  notif.innerHTML += "<span>Please, fill in the input field</span>"
  notif.classList.add('notification')

  document.querySelector("body").appendChild(notif)

  setTimeout(() => {
      notif.remove()
  }, 3000)
}

// This function checks if work is was did. If the true, a class text-decoration: line-through is added.
function checked(event) {
  target = event.target;
  if(target.className === "work") {
    target.style.textDecoration = "line-through"
  }
}

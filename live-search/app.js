const input = document.querySelector("#search") // input 
const result = document.querySelector("#users") // ul

const userList = []

/*
  Method fetch()
  The Fetch API provides an interface for fetching resources (including across the network).
*/
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  toHtml(data)
}
getUsers()

/*
  in this function, I output the user's list to page.
*/
function toHtml(data) {
  data.map(item => {
    let li = document.createElement("li")
    li.classList.add("user")
    userList.push(li)

    li.innerHTML = `
      <div class="users__info">
        <h4> ${item.name} </h4>
        <p> ${item.username} </p>
      </div>  
    `

    result.appendChild(li)
  })
}

/*
  Here, I use key events and check the user list, which input to input field.
*/
input.addEventListener("keyup", function(event) {
  let target = event.target.value.toLowerCase()

  userList.forEach(item => {
    if (item.innerText.toLowerCase().includes(target)) {
      item.classList.remove("hide")
    }
    else {
      item.classList.add("hide")
    }
  })
})


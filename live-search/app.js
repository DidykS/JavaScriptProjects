const input = document.querySelector("#search") // input 
const result = document.querySelector("#users") // ul

const userList = []

// Method fetch()
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  toHtml(data)
}
getUsers()

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


const persons = [
  {
    id: 1,
    name: "Sara Jones",
    isMale: false,
    job: "Front-End",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi itaque quidem officiis iste consequuntur ea."
  },
  {
    id: 2,
    name: "Set Jinag",
    isMale: true,
    job: "UI-Designer",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi itaque quidem officiis iste consequuntur ea. Lorem ipsum dolor sit amet consectetur, adipisicing elit"
  },
  {
    id: 3,
    name: "Lilia Wick",
    isMale: false,
    job: "Web developer",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi itaque quidem officiis iste consequuntur ea. Animi itaque quidem officiis iste consequuntur ea."
  },
  {
    id: 4,
    name: "Leo Turtle",
    isMale: true,
    job: "front-end",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi itaque quidem officiis iste consequuntur ea. Animi itaque quidem officiis iste consequuntur ea."
  },
  {
    id: 5,
    name: "Dom Toretto",
    isMale: true,
    job: "Ricer",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi itaque quidem officiis iste consequuntur ea. Animi itaque quidem officiis iste consequuntur ea."
  },{
    id: 6,
    name: "Santa Monica",
    isMale: false,
    job: ".net developer",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi itaque quidem officiis iste consequuntur ea. Animi itaque quidem officiis iste consequuntur ea."
  }
  ,{
    id: 7,
    name: "Elisa Toruno",
    isMale: false,
    job: "Web developer",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi itaque quidem officiis iste consequuntur ea. Animi itaque quidem officiis iste consequuntur ea."
  }
]

const author = document.querySelector("#author")
const job = document.querySelector("#job")
const info = document.querySelector("#info")
const img = document.querySelector("#review__img")

const prev = document.querySelector("#prev")
const next = document.querySelector("#next")

// I get the current person from an array
let currentPerson = 0

// The next click event shows the next person from the array
next.addEventListener("click", function() {
  currentPerson++
  if (currentPerson > persons.length - 1) {
    currentPerson = 0
  }
  showPerson(currentPerson)
})

// The prev click event shows the previous  person from the array.
prev.addEventListener("click", function() {
  currentPerson--
  if (currentPerson < 0) {
    currentPerson = persons.length - 1
  }
  showPerson(currentPerson)
})

// The showPerson function shows the current person
function showPerson(person) {
  const item = persons[person]

  author.innerText = item.name
  job.innerText = item.job
  info.innerText = item.text
  if (item.isMale) {
    img.src = "./img/man.jpg"
  }
  else {
    img.src = "./img/woman.jpg"
  }
}
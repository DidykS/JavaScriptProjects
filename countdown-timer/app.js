const dayText = document.querySelector("#days")
const hoursText = document.querySelector("#hours")
const minutesText = document.querySelector("#minutes")
const secondsText = document.querySelector("#seconds")

// I take the target date.
const targetDate = new Date("Aug 09 2021 14:05:00")

// This function calculates how many days are left until the target date.
function countTime() {
  // I get the current date
  let currentDate = new Date()

  // I calculate how many milliseconds are left until the target date
  let gap = targetDate - currentDate
  
  // Here I calculate days, hours, minutes, and seconds to the current date
  let days = Math.floor(gap / 1000 / 60 / 60 / 24)
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24
  let minutes = Math.floor(gap / 1000 / 60) % 60
  let seconds = Math.floor(gap / 1000) % 60

  if (gap < 0) {
    dayText.innerText = "0"
    hoursText.innerText = "0"
    minutesText.innerText = "0"
    secondsText.innerText = "0"
  }
  else {
    // I add data to the page
    dayText.innerText = days
    hoursText.innerText = hours
    minutesText.innerText = minutes
    secondsText.innerText = seconds
  }
}

// I reload the counter every second
setInterval(countTime, 1000)
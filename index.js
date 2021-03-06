let date = new Date()

const elementDate = document.getElementById('printDate')
const elementDay = document.getElementById('printDay')
const elementTime = document.getElementById('printTime')

const listOfDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function printDate() {
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()

  elementDate.innerHTML = `${day}/${month}/${year}`
}

function printDay() {
  date = new Date()
  let numberDay = date.getDay()
  let day = listOfDays[numberDay]
  elementDay.innerHTML = day
}

function printTime() {
  date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  if (seconds < 10) {
    seconds = `0${seconds}`
  }

  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  if (hours > 12) {
    hours = hours - 12
    elementTime.innerHTML = `${hours}:${minutes}:${seconds} PM`
  } else if (hours < 12) {
    elementTime.innerHTML = `${hours}:${minutes}:${seconds} AM`
  } else if (hours === 12) {
    elementTime.innerHTML = `${hours}:${minutes}:${seconds} PM`
  }
}

setInterval(function () {
  printTime()
  printDate()
  printDay()
}, 1000)

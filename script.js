const daysEL = document.getElementById("days")
const hoursEL = document.getElementById("hours")
const minutesEL = document.getElementById("minutes")
const secondsEL = document.getElementById("seconds")


const newYears = "1 Jan 2023";

function countdown() {

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const hours = Math.floor(totalSeconds / 3600 / 24);
    const days = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minutesEL.innerHTML = formatTime(minutes);
    secondsEL.innerHTML = formatTime(seconds);

}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;

}
countdown();

setInterval(countdown, 1000);


function acao(params) {
    let modal = document.querySelector('.modal')

    modal.style.display = 'block'
}

function fechar(params) {
    let modal = document.querySelector('.modal')

    modal.style.display = 'none';
}

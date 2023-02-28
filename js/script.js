const second = 1000; /* 1 s == 1000 ms */
const minute = second * 60; /* 1 minuto tem 60 segundos */
const hour = minute * 60; /* 1 hora tem 60 minutos */
const day = hour * 24; /* 1 dia tem 24 horas */

const nextYear = new Date().getFullYear() + 1;
const newYear = new Date(`January 01 ${nextYear} 00:00:00`);

let interval = setInterval(CountDown, second);

window.document.getElementById('nextYear').innerText = nextYear;

function CountDown() {
    let currentTime = new Date();
    let difference = newYear - currentTime;

    let currentDay = Math.floor(difference / day);
    let currentHour = Math.floor((difference % day) / hour);
    let currentMinute = Math.floor((difference % hour) / minute);
    let currentSecond = Math.floor((difference % minute) / second);

    window.document.getElementById('count_day').innerText = currentDay < 10 ? '0' + currentDay : currentDay;
    window.document.getElementById('count_hour').innerText = currentHour < 10 ? '0' + currentHour : currentHour;
    window.document.getElementById('count_min').innerText = currentMinute < 10 ? '0' + currentMinute : currentMinute;
    window.document.getElementById('count_sec').innerText = currentSecond < 10 ? '0' + currentSecond : currentSecond;
}
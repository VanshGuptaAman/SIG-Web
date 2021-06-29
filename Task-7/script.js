const startingMinutes = 10;
let time = startingMinutes * 60;

const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

if(time > 0){
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds :seconds;
    
    if(time < 0){
        alert("Time Up !!!")
        time = 600;
        return 0;
    }

    minuteEl.innerHTML = `${minutes}`;
    secondEl.innerHTML = `${seconds}`;
    time--;
}
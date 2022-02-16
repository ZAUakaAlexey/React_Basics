function timer(){
// TIMER

const deadline = '2022-03-30';

function getTimeRemaining (endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000*60*60*24)),
          hours = Math.floor((t / (1000*60*60)) % 24),
          minutes = Math.floor((t / (1000*60)) % 60),
          seconds = Math.floor((t / 1000) % 60);
    
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function addZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setTimer(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timerInterval = setInterval(updateTimer, 1000);

    updateTimer(); // убираем "мигание" между значениями из вёрстки и скрипта

    function updateTimer() {
        const t = getTimeRemaining(endtime);

        if (t.total <= 0) {
            clearInterval(timerInterval);
        }

        days.innerHTML = addZero(t.days);
        hours.innerHTML = addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.seconds);

    }
}

setTimer('.timer', deadline);

}

module.exports = timer;
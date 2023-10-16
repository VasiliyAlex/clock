let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourBox = document.querySelector('.hours'),
    minuteBox = document.querySelector('.minutes');

function clock() {
    let time = new Date()
    let hours = time.getHours() * 30
    let minutes = time.getMinutes() * 6
    let seconds = time.getSeconds() * 6

    secondArrow.style = `transform: rotate(${seconds}deg)`
    minuteArrow.style = `transform: rotate(${minutes}deg)`
    hourArrow.style = `transform: rotate(${hours}deg)`

    hourBox.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minuteBox.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

    setTimeout(() => clock(), 1000);

}

clock()



let links = document.querySelectorAll('.tabsItem')
let tabs = document.querySelectorAll('.tabsContentItem')

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        removeActive()
        link.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((link, i) => {
        link.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}

// домашнее задание
let secondStopwatch = document.querySelector('.stopwatch__seconds'),
    minuteStopwatch = document.querySelector('.stopwatch__minutes'),
    hourStopwatch = document.querySelector('.stopwatch__hours'),
    btnStopwatch = document.querySelector('.stopwatch__btn')
    spanTabsLink = document.querySelector('.tabsLink__span');


btnStopwatch.addEventListener('click', () => {
    if (btnStopwatch.innerHTML == 'start') {
        start()
    } else if (btnStopwatch.innerHTML == 'stop') {
        stop()
    } else { 
        clear()
    }})

let second = 0
let minute = 0
let hour = 0


 function seconds() {if (btnStopwatch.innerHTML == 'stop') {
     if (second < 60) {
            secondStopwatch.innerHTML = second
            second++
        } else {
            second = 0;
            minute++
            minuteStopwatch.innerHTML = minute
            if (minute > 59) {
                hour++
                hourStopwatch.innerHTML = hour
            }
            if (hour = 24) {
                hour = 0
            }
        }
        setTimeout(() => seconds(), 1000);
 }
    }

function start() {
    btnStopwatch.innerHTML = 'stop'
    spanTabsLink.classList.add('active')
    seconds()  
}

function stop() {
    btnStopwatch.innerHTML = 'clear'
    spanTabsLink.classList.remove('active')
    spanTabsLink.classList.add('active_clear')
    clearTimeout(q)
}

function clear() {
    btnStopwatch.innerHTML = 'start'
    spanTabsLink.classList.remove('active_clear') 
    secondStopwatch.innerHTML = 0
    minuteStopwatch.innerHTML = 0
    hourStopwatch.innerHTML = 0
    second = 0
    minute = 0
    hour = 0
}
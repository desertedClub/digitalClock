setInterval(showTime, 1000)

function showTime() {
    let time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()

    let adjustedHour = hour%12
    if(adjustedHour === 0)
        adjustedHour = 12

    let h = checkTime(adjustedHour)
    let m = checkTime(min)
    let s = checkTime(sec)
    console.log('called checkTime()')

    let am_pm = checkAMPM(hour)
    console.log('called checkAMPM()')

    document.getElementById('am-pm').innerHTML = am_pm
    updateClockImages(h, m, s)
}
function checkTime(t) {
    return t<10? "0" + t : t.toString()
}
function checkAMPM(h) {
    if(h<=12) return "AM"
    else if(h>12) return "PM"
    else return "error"
}

function updateClockImages(hours, minutes, seconds) {
    document.getElementById("10").src = digits[hours[0]]
    document.getElementById("11").src = digits[hours[1]]

    document.getElementById("20").src = digits[minutes[0]]
    document.getElementById("21").src = digits[minutes[1]]

    document.getElementById("30").src = digits[seconds[0]]
    document.getElementById("31").src = digits[seconds[1]]
}

var colon = 'media/images/colon.png'
var digits = {
    "0": 'media/images/digit-0.png',
    "1": 'media/images/digit-1.png',
    "2": 'media/images/digit-2.png',
    "3": 'media/images/digit-3.png',
    "4": 'media/images/digit-4.png',
    "5": 'media/images/digit-5.png',
    "6": 'media/images/digit-6.png',
    "7": 'media/images/digit-7.png',
    "8": 'media/images/digit-8.png',
    "9": 'media/images/digit-9.png'
}

showTime()
console.log('called showTime()')
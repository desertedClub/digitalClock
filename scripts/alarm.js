const alarmInfo = document.getElementById('alarm-status-info')
const setAlarmBtn = document.getElementById('set-alarm-btn') // .option
const stopAlarmBtn = document.getElementById('stop-alarm-btn') // .option

const alarmMenu = document.getElementById('alarm-menu')
//const alarmTime, const alarmSound, const alarmVibration created in saveAlarm()
const closeBtn = document.getElementById('close-btn')
const saveBtn = document.getElementById('save-btn')

alarmMenu.style.display = "none"
stopAlarmBtn.style.display = "none"
let alarm = null
let audio = null

function setAlarm() {
    // open alarm menu when Set Alarm is clicked
    setAlarmBtn.addEventListener("click", function() {
        alarmMenu.style.display = "block"
        setAlarmBtn.style.display = "none"
    })

    closeBtn.addEventListener("click", function() {
        alarmMenu.style.display = "none"
        setAlarmBtn.style.display = "block"
    })

    saveBtn.addEventListener("click", saveAlarm)
}

function saveAlarm() {
    const inputTime = document.getElementById('alarm-time').value
    const sound = document.getElementById('alarm-sound').value
    const vibration = document.getElementById('alarm-vibration').checked

    if(inputTime && sound) {
        alarm = {time: inputTime, sound, vibration}
        alarmInfo.textContent = `Alarm set for: ${inputTime}`
        alarmMenu.style.display = "none"
        setAlarmBtn.style.display = "block"
    } else alert("Please, fill in all alarm details.")
}

function checkAlarm() {
    if(alarm) {
        const now = new Date();
        // padstart(2, '0') - length 2, starts with 0
        const nowTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`

        if(nowTime === alarm.time) {
            const audio = new Audio(alarm.sound)
            audio.loop = true
            audio.play()
            setAlarmBtn.style.display = "none"
            stopAlarmBtn.style.display = "block"

            if(alarm.vibration && navigator.vibrate)
                navigator.vibrate([200, 100, 200])

            alarm = null
            alarmInfo.textContent = "Alarm ringing!"
            stopAlarmBtn.addEventListener("click", function() {
                if(audio) audio.pause()
                if(navigator.vibrate) navigator.vibrate(0)
                
                setAlarmBtn.style.display = "block"
                stopAlarmBtn.style.display = "none"
                alarmInfo.textContent = "No alarm set"
            })
        }
    }
}

setInterval(checkAlarm, 1000)
setInterval(setAlarm, 1000)
setAlarm()
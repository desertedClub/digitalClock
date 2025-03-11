setInterval(showDate, 1000)
const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

function showDate() {
    let date = new Date()
    let day = date.getDate()
    let monthNumber = date.getMonth()
    let year = date.getFullYear()

    let monthName = months[monthNumber]

    let dateString = day + " " + monthName + " " + year

    document.getElementById('date-content').textContent = dateString
}

showDate()
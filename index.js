
const hourEx = document.getElementById('hour');
const minuteEx = document.getElementById('minutes');
const secondEx = document.getElementById('seconds');
const amPms = document.getElementById('amPm'); 

function updateClock(){
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ampm = 'AM';
    if(hour > 12){
        hour = hour - 12;
        ampm = 'PM';
    }
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    hourEx.innerText = hour;
    minuteEx.innerText = minute;
    secondEx.innerText = second;
    amPms.innerText = ampm;
}
setInterval(() => { 
    updateClock();
}, 1000)
updateClock()

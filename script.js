
function newTime() {

    var recentTime = new Date();
    var hours = recentTime.getHours();
    var minutes = recentTime.getMinutes();
    var seconds = recentTime.getSeconds();
    var amPm = document.getElementById("am-pm");

    if(hours >= 12){
        amPm.innerHTML = "PM";
    }else{
        amPm.innerHTML = "AM";
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(newTime, 1000);
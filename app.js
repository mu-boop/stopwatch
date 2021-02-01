var min = 00;
var sec = 00;
var millisec = 00;
var getMin = document.getElementById("min")
var getMin = document.getElementById("sec")
var getSeconds = document.getElementById("millisec")
var interval;

function time() {
    millisec++
    getSeconds.innerHTML = millisec
    if (millisec >= 100) {
        sec++
        getMin.innerHTML = sec
        millisec = 00;
    } else if (sec >= 60) {
        min++
        getMin.innerHTML = min
        sec = 00;
    }

}



function start() {
    interval = setInterval(time, 10)
    document.getElementById('strt').style.display='none';
    document.getElementById('btns').style.marginLeft='40px'
}


function pause() {
    clearInterval(interval);
    document.getElementById('strt').style.display='';
    document.getElementById('btns').style.marginLeft=''
}

function reset() {
    
    pause()
    min = '00';
    sec = '00';
    millisec = '00';
    getMin.innerHTML = min
    getMin.innerHTML = sec
    getSeconds.innerHTML = millisec

}
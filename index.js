
let pdays = document.getElementById("days");
let phours = document.getElementById("hours");
let pminutes = document.getElementById("minutes");
let pseconds = document.getElementById("seconds");
let h1 = document.getElementById("h1");


let countdownDate = new Date("Jul 11, 2025 12:26:00").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    pdays.innerHTML = days;
    phours.innerHTML = hours;
    pminutes.innerHTML = minutes;
    pseconds.innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x)
        pdays.innerHTML = "00";
        phours.innerHTML = "00";
        pminutes.innerHTML = "00";
        pseconds.innerHTML = "00";

        h1.innerHTML = "We are live now!!";
        
    }
}, 1000);
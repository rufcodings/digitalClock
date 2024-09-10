setTimeout(digitalClock, 1000);

function digitalClock(){

    // to refresh the page every next 1 seconds

    // let meta = document.createElement("meta");
    // meta.setAttribute(`http-equiv`, `refresh`);
    // meta.setAttribute("content", "1");

    // let head = document.querySelector('head');
    // head.append(meta);
    // console.log(meta);


    let time = new Date();

    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let mode = "AM";

if(hour >= 12){
    if(hour > 12){
        hour -= 12;
    }
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    mode = "PM";
}
else{
    if(hour == 0){
        hour = 12;
    }
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    mode = "AM";
}

const curTime = hour + ":" + minutes + ":" + seconds + " " + mode;


let clock = document.getElementById("clock");    
    clock.innerHTML = curTime;
    clock.style.fontSize = "80px";

const btn = document.createElement("button");
btn.innerText = "STANDARD";
btn.style.fontSize = "30px";
btn.style.border = "3px solid black";
btn.style.padding = "10px";
btn.style.borderRadius = "10px";

btn.addEventListener("click", () => {

if(btn.innerText === "STANDARD"){

    btn.innerText = "NORMAL";

    let time = new Date();

    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let mode = "AM";

if(hour >= 12){
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    mode = "PM";
}
else{
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    mode = "AM";
}

const curTime = hour + ":" + minutes + ":" + seconds;


let clock = document.getElementById("clock");    
    clock.innerHTML = curTime;
    clock.style.fontSize = "80px";

    console.log(btn);
}

else{

    btn.innerText = "STANDARD";

    let time = new Date();

    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let mode = "AM";

if(hour >= 12){
    if(hour > 12){
        hour -= 12;
    }
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    mode = "PM";
}
else{
    if(hour == 0){
        hour = 12;
    }
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    mode = "AM";
}

const curTime = hour + ":" + minutes + ":" + seconds + " " + mode;


let clock = document.getElementById("clock");    
    clock.innerHTML = curTime;
    clock.style.fontSize = "80px";

    console.log(btn);
}

})


let switching = document.getElementById("container");
    switching.append(btn);

}
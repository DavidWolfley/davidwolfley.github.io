var time1;
function getBackground(){
    return document.body.style.background;
}
function setBackground(color) {
   document.body.style.background = color;
}
function updateTime() {
    time1 = new Date();
}
function toSeconds(ms) {
    secs = Math.floor(ms / 1000);
    ms = (ms % 1000);
    return `${secs}.${ms}`
}


function game() {
    if(getBackground() == "red"){
    }
    else if(getBackground() == "green"){
        var time2 = new Date();
        var elapsedtime = toSeconds(Math.abs(time2-time1));
        setBackground("white");
        const count = document.createElement("p");
        count.innerText = `Press the button again to try again.`;
        document.body.appendChild(count);
        document.querySelector("button").textContent = "RESTART";
        document.querySelector("p").textContent = `You reacted in ${elapsedtime} seconds.`;
    }
    else if(getBackground() == "white") {
        location.reload();
    }
    else {
        setBackground("red");
        var delay = Math.floor(Math.random() * (10000));
        setTimeout(() => setBackground("green"), delay);
        setTimeout(() => updateTime(), delay);
    }
}

function startRecording(){
    let button = document.getElementById("yellowBtn");
    let button2 = document.getElementById("grayBtn");
    button2.style.opacity = 1;
    button.style.opacity = 0.3
    window.addEventListener("keydown",keyDownHandler);
    window.addEventListener("keyup",keyUpHandler);
}

function keyDownHandler(event){
    let str = `Key ${event.key} is pressed down`;
    let str2 = `Key is down`;
    this.document.getElementById("yellow").textContent = str;
    this.document.getElementById("gray").textContent = str2;
}

function keyUpHandler(event){
    let str =  `Key ${event.key} is release`;
    let str2 = `Key is up`;
    this.document.getElementById("yellow").textContent = str;
    this.document.getElementById("gray").textContent = str2;
}

function stopRecording(){
    document.getElementById("yellow").textContent = "";
    document.getElementById("gray").textContent = "";
    document.getElementById("yellowBtn").style.opacity = 1;
    document.getElementById("grayBtn").style.opacity = 0.3;
    window.removeEventListener("keydown",keyDownHandler);
    window.removeEventListener("keyup",keyUpHandler);
}
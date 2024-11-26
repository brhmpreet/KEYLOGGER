let button = document.getElementById("yellowBtn");
let button2 = document.getElementById("grayBtn");
button2.disabled  = true;
function startRecording(){
    button.disabled = true;
    button2.disabled = false;
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
    button.disabled = false;
    button2.disabled = true;
    window.removeEventListener("keydown",keyDownHandler);
    window.removeEventListener("keyup",keyUpHandler);
}
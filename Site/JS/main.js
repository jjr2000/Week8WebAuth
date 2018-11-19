var canvas, ctx;
var strokeColor = "#000000"

function init(){

    console.log("window", window.innerHeight, window.innerWidth);
    console.log("document", document.innerHeight, document.innerWidth);

    canvas= document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //canvas.style.width = window.innerWidth;
    //canvas.style.height = window.innerHeight;

    ctx = canvas.getContext('2d');


}

window.onload = init();

function GetX(e){
    return e.pageX - canvas.offsetLeft;
}

function GetY(e){
    return e.pageY - canvas.offsetTop;
}

var down = false;
canvas.addEventListener("mousedown", function(e) {
    ctx.strokeStyle = strokeColor;
    ctx.lineJoin ="round";
    ctx.beginPath();
    ctx.moveTo(GetX(e), GetY(e));
    down = true;
});
canvas.addEventListener("mouseup", function(e) {
    down = false;
});
canvas.addEventListener("mousemove", function(e) {
    console.log(GetX(e), GetY(e));
    if(down)
    {
        ctx.lineTo(GetX(e), GetY(e));
        ctx.stroke();
    }
});

// When true, moving the mouse draws on the canvas


const red = document.getElementById("red");

const default_brush_size = 2;

var currentColor = "rgb(255, 255, 255)";

var brushSize = document.getElementById("");

red.addEventListener("click", function() {
   currentColor = "rgb(255, 0, 0)";
});

blue.addEventListener("click", function() {
   currentColor = "rgb(0, 0, 255)";
});

green.addEventListener("click", function() {
   currentColor = "rgb(0, 255, 0)";
});

yellow.addEventListener("click", function() {
   currentColor = "rgb(255, 255, 0)";
});

maroon.addEventListener("click", function() {
   currentColor = "rgb(128, 0, 0)";
});


function random(number) {
  return Math.floor(Math.random()*(number+1));
}
const btn = document.getElementById("myButton");


let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myCanvas');
const context = myPics.getContext('2d');

// The x and y offset of the canvas from the edge of the page
const rect = myPics.getBoundingClientRect();

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', e => {
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  //context.strokeStyle = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  context.strokeStyle = currentColor;
  context.lineWidth = 4;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
/*
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

const btn = document.getElementById("myButton");
console.log('dogs');

function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();

    scaleX = canvas.width / rect.width,
    scaleY = canvas.height / rect.height;

    return {
        x: (evt.clientX - rect.left) * scaleX,
        y: (evt.clientY - rect.top) * scaleY
    }
}

canvas.addEventListener('mousedown', e => {

    let cursorX = event.clientY;
    let cursorY = event.clientX;

    var pos = getMousePos(canvas, event);

    console.log(event.clientX);
    if (event.type == "mousedown") {
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(pos.x, pos.y, 4, 4);
        console.log("dicks");
    }
});


function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}
*/

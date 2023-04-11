function preload(){
img1=loadImage("Dining.jpeg");
}

function setup(){
canvas=createCanvas(550,400);
canvas.center();
}

function draw(){
image(img1,0,0,550,400);
noFill();
rect(40,1,300,230);
fill("red");
text("TV",45,13);
}

function back(){
window.location="index.html";
}
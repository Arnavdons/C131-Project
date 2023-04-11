function preload(){
img1=loadImage("Balcony.jpeg");
}

function setup(){
canvas=createCanvas(550,400);
canvas.center();
}

function draw(){
image(img1,0,0,550,400);
noFill();
stroke("black");
rect(230,190,70,60);
fill("yellow");
noStroke();
text("Tree",235,203);
}

function back(){
window.location="index.html";
}
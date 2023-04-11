function preload(){
img1=loadImage("Sofa.jpeg");
}

function setup(){
canvas=createCanvas(550,400);
canvas.center();
}

function draw(){
image(img1,0,0,550,400);
noFill();
stroke("black")
rect(0,130,500,290);
fill("yellow");
noStroke();
text("Sofa",5,143);
}

function back(){
window.location="index.html";
}
let dx, dy, arrow;

function setup(){
    createCanvas(400, 400);
    background(255, 255, 255);
    arrow= new Arrow(width/2, height/2, 0);
    console.log(arrow);
}

function draw(){
    background(255, 255, 255);
    arrow.drawArrow();
    arrow.follow();
}
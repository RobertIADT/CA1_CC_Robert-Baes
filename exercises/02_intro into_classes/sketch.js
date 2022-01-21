let myBall;

function setup() {

    createCanvas(600,600);
    angleMode (DEGREES);
    myBall = new Ball(200,240,0,0,20,150);
    myBall.vx = 4*cos(25);
    myBall.vy = 4*sin(25);
    myBallTwo = new Ball(100,240,0,0,20,230);
    myBallTwo.vx = 4*cos(70);
    myBallTwo.vy = 4*sin(70);
  }

  

function draw() {

    background(150,150,300);
    
  
    if (myBall.x > 600){myBall.vx=-myBallTwo.vx}
    if (myBall.x < 0){myBall.vx=-myBallTwo.vx}
    if (myBall.y > 600){myBall.vy =-myBallTwo.vy}
    if (myBall.y < 0){myBall.vy =-myBallTwo.vy}
    if (myBallTwo.x > 600){myBallTwo.vx =-myBallTwo.vx}
    if (myBallTwo.x < 0){myBallTwo.vx =-myBallTwo.vx}
    if (myBallTwo.y > 600){myBallTwo.vy =-myBallTwo.vy}
    if (myBallTwo.y < 0){myBallTwo.vy =-myBallTwo.vy}
    noStroke;
    myBall.drawBall();
    myBall.moveBall();
    myBallTwo.drawBall();
    myBallTwo.moveBall();
  }
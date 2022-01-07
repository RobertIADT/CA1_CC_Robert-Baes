class Smoke {
    constructor() {
        this.posX = Math.round(Math.random() * 700); //pseudo random values for x and y pos of particles
        this.posY = Math.round(Math.random() * 700);
        this.radius = Math.round(Math.random() * 40 + 1); //pseudo random values for radius
        this.xSpeed = Math.round(Math.random() * 0 );
        this.ySpeed = Math.round(Math.random() * -2 - 1); //pseudo random values for y speed
        this.opacity = 255;
        this.col = 200;
    }

    changeColor() {
    this.col -=1;
    }

    render() {
        fill(200,this.col,200,this.opacity);
        ellipse(this.posX, this.posY, this.radius, this.radius)
    }
    move() {
        this.opacity -=1;
        this.posX += this.xSpeed;
        this.posY += this.ySpeed;
        if(this.posX>680){this.xSpeed=-4} // set param where paricles can be
        if(this.posX<20){this.xSpeed=4}  
        if(this.posY<0){this.ySpeed=0}

    }
    over(){
        return this.opacity <0;
    }
    
}

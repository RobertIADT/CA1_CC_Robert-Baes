class Molecule {
    constructor() {
        this.posX = Math.round(Math.random() * 500);
        this.posY = Math.round(Math.random() * 500);
        this.radius = Math.round(Math.random() * 10 + 5);
        this.xSpeed = Math.round(Math.random() * 5 - 5);
        this.ySpeed = Math.round(Math.random() * 5 - 5);
    }
    render() {
        ellipse(this.posX, this.posY, this.radius, this.radius)
    }
    move() {
        this.posX += this.xSpeed;
        this.posY += this.ySpeed;
        if(this.posX>500){this.posX=0}
        if(this.posX<0){this.posX=500}
        if(this.posY>500){this.posY=0}
        if(this.posY<0){this.posY=500}
    }
}
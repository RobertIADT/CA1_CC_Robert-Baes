class Ball {
	constructor(x, y, vx, vy, radius, c) {
	
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.radius = radius;
		this.c = c;

	
    }
   
    drawBall() {
		fill(this.c);
		ellipse(this.x, this.y, this.radius*2, this.radius*2);
		
	} 
	moveBall() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
}

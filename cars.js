class car {
    
    speed = 0;
    acceleration = 10;
    maxSpeed = 100;
     
    accelerate() {
        this.speed + this.acceleration >= this.maxSpeed ? 
            this.speed = this.maxSpeed:
            this.speed += this.acceleration;
    }
    
    brake() {
        this.speed - this.acceleration <= 0?
        this.speed = 0:
        this.speed -= this.acceleration
        

    }
}

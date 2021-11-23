
class Vehiculo{
    velocidad=0
    constructor(enrollment, driver, brand,maxspeed){
        this.enrollment = enrollment;
        this.driver = driver;
        this.brand = brand;
        this.maxspeed = maxspeed;
    }
    run(){
        this.velocidad+=10;
    }

    frenar(){
        this.velocidad =0;
    }
}


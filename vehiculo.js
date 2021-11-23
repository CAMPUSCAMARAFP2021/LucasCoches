class Vehiculo{
    velocidad=0
    constructor(matricula, conductor){
        this.matricula = matricula;
        this.conductor = conductor;
    }
    run(){
        this.velocidad+=10;
    }

    frenar(){
        this.velocidad =0;
    }
}
class car extends Vehiculo{

    constructor(brand, maxspeed){
        this.brand = brand;
        this.maxspeed = maxspeed;

    }
}
class Corredor extends Vehiculo{

    constructor(SneakerBrand, Name, maxspeed){

    }
}

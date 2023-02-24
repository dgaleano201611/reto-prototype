function Auto(){
    this.velocidad = 0;
}

Auto.prototype.acelerar = function(increment){
    this.velocidad = this.velocidad + increment
    
    return this.velocidad;
}

Auto.prototype.frenar = function(decrement){
    this.velocidad = this.velocidad - decrement

    return this.velocidad < 0 ? 0 : this.velocidad ;

    /* if (this.velocidad < 0){
        return this.velocidad = 0;
    }else {
        return this.velocidad
    } */
}

car1 = new Auto();

console.log(car1.velocidad); //0
console.log(car1.acelerar(1)); //1
console.log(car1.acelerar(10)); //11
console.log(car1.frenar(2)); //9
console.log(car1.frenar(10)); //0
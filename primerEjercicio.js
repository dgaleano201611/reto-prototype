//metodo constructor
function Person(nombre, peso, altura){
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
}
//creando los metodos
Person.prototype.saludar = function(){
    
    return `Hola me llamo ${this.nombre}`
}

Person.prototype.bmi = function(){
    bmi = this.peso / (this.altura)**2
    
    return bmi;
}

//creamos el objeto diego
diego = new Person('Diego', 75, 1.74);

//imprimimos el metodo saludo al objeto diego.
console.log(diego.saludar());
console.log(diego.bmi());
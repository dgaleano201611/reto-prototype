//palindrome es una palabra que se lee de la misma forma hacia a delante o hacia atras
//eliminar los espacios que puedan tener la cadena

String.prototype.palindromo = function(string){
    string = string.replaceAll(" ", "");
    esPalidromo = string.split("").reverse().join("")

    return string === esPalidromo ? true : false;
}
string = new String(); 

console.log(string.palindromo("anita lava la tina"))
console.log(string.palindromo("prueba"))

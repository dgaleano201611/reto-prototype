//palindrome es una palabra que se lee de la misma forma hacia a delante o hacia atras
//eliminar los espacios que puedan tener la cadena

String.prototype.palindrome = function(){
    let cleanString = this.replaceAll(" ", "");
    reverseString = cleanString.split("").reverse().join("")

    return cleanString === reverseString ? true : false;
}

console.log("anita lava la tina".palindrome());//true
console.log("prueba".palindrome());//false
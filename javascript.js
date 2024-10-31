//EJERCICIO IMC

const prompt = require('prompt-sync')();

const pezo = prompt('ingrese su peso: ')
const talla = prompt('ingrese su talla: ')
const imc = pezo/ (talla* talla)
console.log("su indice de masa corporal es: "+imc)
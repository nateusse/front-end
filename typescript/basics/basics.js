"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//se llama tuberia el |
var name = "Que mas pues";
name = 96;
var isAlive = true;
var skills = ["perreo", "hola", "mami", "con toda"];
var objeto = {
    isAlive: isAlive,
    skills: skills,
};
objeto.pasoDeAnita = true;
//console.log(iSujeto); es error porque hace referencia a calses, no contenido, no imprimo interaces?
console.table(objeto);
//FUNCIONES
/* Arrow function, puedo asignar llamado funciona  una variable, definir el return y devolver string*/
var functionArrow = function (a, b) {
    return ("".concat(a + b));
};
var functionArrowRes = functionArrow(3, 2);
console.log(typeof (functionArrowRes));

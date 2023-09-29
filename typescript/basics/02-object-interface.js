"use strict";
//objetos 
Object.defineProperty(exports, "__esModule", { value: true });
var skills = ["invensible", "superstrong", "compasion", "intelligence"];
var wonderWoman = {
    name: "Diana",
    //Error, refers to a tpe but is used as a value here. Oh shit! No igual
    skills: ["hola"],
    hp: ""
};
console.table(wonderWoman);

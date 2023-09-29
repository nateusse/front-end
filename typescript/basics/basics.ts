//se llama tuberia el |
let name: String | number = "Que mas pues";
name = 96

const isAlive: boolean = true;

const skills: string[] = ["perreo", "hola", "mami", "con toda"];

const objeto: iSujeto = {
     isAlive,
     skills,
    
}

objeto.pasoDeAnita = true
//console.log(objeto, skills);

//como hacer un objeto con obejto y arreglo de strings? INTERFACES!
//INTERFACES = tipean objetos literales, no se imprimen
interface iSujeto {
    isAlive: boolean;
    skills: string[];
    pasoDeAnita?: boolean ;
}

//console.log(iSujeto); es error porque hace referencia a calses, no contenido, no imprimo interaces?
console.table(objeto);

export{}

//FUNCIONES
/* Arrow function, puedo asignar llamado funciona  una variable, definir el return y devolver string*/
const functionArrow =  (a:number, b:number): string => { //trapa, espera un num de result pero con bagticks return 
         return(`${a + b}`)
};
const functionArrowRes:string = functionArrow(3,2);

//const functionArrowNum:number = functionArrow(3,2); ccrear otra funcion con tertorno numero
//sina rguemntos lo reconoce como void, que es diferente a undifined 


console.log(typeof(functionArrowRes))

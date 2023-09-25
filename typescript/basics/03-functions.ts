

//key word functions
function addNumber(a:number, b?:number, multiplicar:number = 2) { //: string {  //sin argumentos me pondra voi por defecto
//en js toda funcion retorna undefine, no void
    /*if (b != undefined){
        return a + b;
    } else {
        return a;
    }*/

}

const addNumbers = (a,b): string =>{  //pa retornas string
     return `${a + b}`
}

const result = addNumber(1);
const res = addNumbers(3,2);
console.log({result}) //imprime como objeto
console.log(typeof(res)) //string wow
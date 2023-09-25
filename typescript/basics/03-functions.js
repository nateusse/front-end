//key word functions
function addNumber(a, b) {
    //en js toda funcion retorna undefine, no void
    /*if (b != undefined){
        return a + b;
    } else {
        return a;
    }*/
}
var addNumbers = function (a, b) {
    return "".concat(a + b);
};
var result = addNumber(1);
var res = addNumbers(3, 2);
console.log({ result: result }); //imprime como objeto
console.log(typeof (res));

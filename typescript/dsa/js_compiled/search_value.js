"use strict";
/* Write  a method , which will seach an array for soemthing given value */
Object.defineProperty(exports, "__esModule", { value: true });
function seachValue(ar, value) {
    var size = ar.length;
    var res;
    for (var i = 0; i < size; i++) {
        if (value == ar[i]) {
            return true;
        }
    }
    return false;
}
function test() {
    var ar = [1, 2, 3];
    var search = seachValue(ar, 2);
    console.log("Result is ".concat(search, ", the number is in ").concat(ar, " "));
}
test();

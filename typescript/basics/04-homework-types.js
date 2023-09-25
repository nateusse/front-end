"use strict";
/*
    ===== Código de TypeScript =====
*/
Object.defineProperty(exports, "__esModule", { value: true });
var superHeroe = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress: function () {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
};
var address = superHeroe.showAddress();
console.log({ address: address });

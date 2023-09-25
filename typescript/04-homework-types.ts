/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string,
    age: number,
    address : Address,
    showAddress: (a:string,b:string) => string

}

interface Address {
    street: string,
    pais: string,
    ciudad: string
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    //un obejto dentrro de un objto requiere otra interfaz 
    address: {
        street: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress(a,b) {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    },

}


const address = superHeroe.showAddress("hola", "bonita");
console.log( {address} );




export {};
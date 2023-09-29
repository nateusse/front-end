/* Write  a method , which will seach an array for soemthing given value */


function seachValue ( ar : number[] , value : number) : boolean{
    let size = ar.length;
    let res;
    for (let i = 0; i < size; i ++){
        if (value == ar[i]){
            return true;
        }
    }
    return false;
}

function test(){
    const ar = [1,2,3];
    const search = seachValue(ar, 2)
    console.log(`Result is ${search}, the number is in ${ar} `);
}

test()

export {}

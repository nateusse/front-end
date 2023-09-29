//write a metod that will return the sum of all lements in an array given an array input 

const sumArray = (arr: number[] ) : number => {
    const size = arr.length;
    let total = 0;
    for (let i = 0; i < size; i++){
         total += arr[i];
    }
 return total
}       

function test(){
 const ar = [1,2,3];
 const sum = sumArray(ar)
 console.log(`Result is ${sum}`);
}


test()

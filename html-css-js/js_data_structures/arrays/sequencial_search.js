/* Write  a method , which will seach an array for soemthing given value */


function seachValue(arr, value){
    let size = arr.length;
    let res;
    for (let i = 0; i < size; i ++){
        if (value == arr[i]){
            return  true;
        }
    }
    return false;
}



function test(){
    const ar = [1,2,3];
    const search = seachValue(ar, 2)
    console.log(`Result is ${search}`);
}

test()


// Interface + generics + arrow fn + typed array

interface validateBuffer<T extends ArrayBufferView & ArrayLike<number>>{
    (arr: T): number | undefined; // just a signature - no body
}

const vBuffer: validateBuffer<Uint32Array> = (arr) => {
    if (arr.length === 0) return undefined;
    return (arr[3]); 
}

let bffArr = new Uint32Array([2, 98, 100000, 23]); 
let obj3 = vBuffer(bffArr); 
console.log(obj3);   


/**
* Write a generic interface SumFn<T> for a function that takes a typed array and returns the sum of its elements as a number. Constrain T so it works for any typed 
* array (Uint8Array, Int32Array, Float64Array, etc.) — think about what shared shape they all have. Implement it, then test with a Float64Array of your choice. 
 */

interface BufferSum<T extends ArrayBufferView & ArrayLike<number>>{
    (f_arr: T): number;  // f_arr: T[] means array of T's. and we want f_arr just to be T. 
}

const bufferSum : BufferSum<Float64Array> = (f_arr) => {
    let sm = 0;     
    for (const n of f_arr) {
        sm += n; 
    }
    return sm; 
}

let typedArr = new Float64Array([5.77, 10, 15, 0.20, 99]); 
let res = bufferSum(typedArr);
console.log(res); 

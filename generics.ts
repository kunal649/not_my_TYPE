/*
*Generics provides values to types, for example 
*/

type StringArray = Array<String>; 
type ObjectArray = Array<{id: 3, profile: "Google"}>; 
type NumberArray = Array<Number>; 

// << ------------------------------------------Page End------------------------------------------------>>

function firstNumber(arr: number[]):number | undefined {
    return arr[0]; 
}

function secondNumber(arr: string[]):string | undefined {
    return arr[0]; 
}

// no need to write unique functions for new types
function template<t>(arr: t[]): t | undefined {
    return arr[1]; 
}


// << ------------------------------------------Page End------------------------------------------------>>

interface Backpack<Type> {
    get: () => Type; 
    set: (obj: Type) => void; 
}

const backpack: Backpack<string> = {
    get : () => "hellow", 
    set : (obj) => {
        console.log("set to:", obj); 
    }
}

let obj1 = backpack.get(); 
console.log(obj1); 

let obj2 = backpack.set("hello"); 
console.log(backpack); 


// << ------------------------------------------Page End------------------------------------------------>>

type Pair<k, v> = [k, v]; 

function pairs<k, v>(key: k, value: v): Pair<k, v> {
    return [key, value]; 
}
let rs = pairs(991, "Porsche"); 
console.log(rs); 


// << ------------------------------------------Page End------------------------------------------------>>

/**
 * now with constraints, written in <constraint>
 */

let items = [2.77, 3, 2, 23, 32]; 

function getLength<T extends {length: number}>(items: T) {
    return items.length; 
}
(() => console.log(getLength(items)))(); 

function test<T>(items: number[] | string[]): number | undefined | string {
    if ( Array.isArray(items))
        return items.length;
    return "Invalid Array"; 
}


let rs1 = test(items); 
console.log(rs1); 


// << ------------------------------------------Page End------------------------------------------------>>


/**
 * Round 1: 
 * Write a generic function pluck<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> — it takes an object and an array of that object's own keys, and returns a new 
 * object containing only those keys.
 */

// const user = { id: 1, name: "kunal", email: "k@x.com", age: 22 };
// pluck(user, ["name", "email"]); // → { name: "kunal", email: "k@x.com" }

const user = { 
    id: 1, 
    name: "kunal", 
    email: "k@x.com", 
    age: 22, 
}

function pluck<U, A extends keyof U>(obj: U, arr: A[]): Pick<U, A>{
    const result = {} as Pick<U, A>; 
    for (const v of arr) {
        result[v] = obj[v]; 
    }   
    return result; 
}

console.log(pluck(user, ["name", "age", "email"])); 
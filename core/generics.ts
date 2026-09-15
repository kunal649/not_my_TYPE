/*
*Generics provides values to types, for example 
*/

type StringArray = Array<String>; 
type ObjectArray = Array<{id: 3, profile: "Google"}>; 
type NumberArray = Array<Number>; 

// << ------------------------------------------Page End------------------------------------------------>>

function wrapValue<T>(value: T): { value: T; timestamp: number } {
  const timestamp: number = 1699999999; 
  const obj = { value, timestamp }; 
  return obj;
}

(() => console.log(wrapValue(8)))();

function getFirstAndLast<T>(arr: T[]): [T, T] {
  return [arr[0], arr[arr.length - 1]]; 
}

console.log(`${getFirstAndLast([1, 44, 99.9, 12])}\n`); 

// << ------------------------------------------Page End------------------------------------------------>>

class Queue<T> {
queue : T[] = new Array<T>(); 

   enqueue(item: T): void {
    this.queue.push(item); 
   }

   dequeue(): T | undefined {
    return this.queue.shift(); 
   } 

   peekFront(): T | undefined {
    return this.queue[this.queue.length - 1]; 
   }
}

// << ------------------------------------------Page End------------------------------------------------>>
console.log("<-----Stack START----->")
class Stack<T> {
stack :T[] = new Array<T>();    

  push(item: T): void {
    this.stack.push(item); 
  }

  pop(): T | undefined {
    return this.stack.pop(); 
  }
  peek(): T | undefined {
    return this.stack.at(-1); 
  }
}

const s1 = new Stack<string>(); 
s1.push("it is what it is!"); 
s1.push("any doubts bud?"); 
s1.push(34); 
console.log("Stack: ", s1); 
console.log("<-----Stack END----->\n")
// << ------------------------------------------Page End------------------------------------------------>>


function getWithDefault<T, K extends keyof T>(obj: T, key: K, fallback: T[K]): T[K] {
    const val: T[K] = obj[key]; 
    if ( val === null || undefined ) return fallback;
    return val;  
}
let obj = {id: 7, payload: "image_73.jpg", type: "image", typetimestamp: Date}; 
let key = 'type' ; 
let a1n5s = getWithDefault(obj, key, obj.id );  
console.log(a1n5s); 


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

const rsp3 = pluck(user, ["name", "age", "email"]); 
console.log(rsp3); 

// pick while building up works. 

// << ------------------------------------------Page End------------------------------------------------>>

/**
 * Write withoutKeys<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>, the mirror image of pluck — returns everything except the given keys, instead of only those  * keys.
 */

function withoutKeys<U, A extends keyof U>(obj: U, arr: A[]): Omit<U, A> {
    const result = { ...obj } 
    for ( const v of arr ) {
        delete result[v]; 
    }
    return result; 
}

const resp4 = withoutKeys(user, ["age", "name"]); 
console.log(resp4); 

// omit while building up doesnt work, so we have to shallow copy and delete (such a waste of time writing Omit<U,A>)
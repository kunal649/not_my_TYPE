/*
*Generics provides values to types, for example 
*/

type StringArray = Array<String>; 
type ObjectArray = Array<{id: 3, profile: "Google"}>; 
type NumberArray = Array<Number>; 


interface Backpack<Type> {
    get: () => Type; 
    set: (obj: Type) => void; 
}

/*
*This statement tells ts "trust me a value with this shape exists"! No backpack object is created in memory thats why
*calling backpack.get(), .set() will throw runtime error. 
*
* declare const backpack: Backpack<string>;
*/

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


interface validateBuffer<T>(arr: T[]): T | undefined {
    if (arr.length !== null) {
        return arr<T>; 
    }
    return 0; 
}
function vBuffer<T>: validateBuffer<T>{
    if (arr.length !== null) {
        return arr<T>; 
    }
    return 0; 
}
validateBuffer([3, 7, 8, 10]); 
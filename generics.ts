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

declare const backpack : Backpack<string>; 

const test = backpack.get(); 
console.log(test); 

let ans = backpack.set("check"); 


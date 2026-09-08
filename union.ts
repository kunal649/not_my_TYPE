/* *
* With union we can declare that a type could be one of many types, example 
*/

type myBool = true | false; // myBool is classed as boolean -> thats a property of Structural Type System. 

type desktopStates = "switched off" | "sleep" | "switched on"; 

type lockStates = "locked" | "unlocked"; 


/* *
* union provides a way to handle different types too, example 
*/

type isOne = true | false; 
let obj:any; 
(isOne) ? obj = ["k", "u", "n", "a", "l", "v"] : obj = "kunal"; 

function getLength(obj: string | string[]) {
    return obj.length; 
}

console.log(getLength(obj)); 
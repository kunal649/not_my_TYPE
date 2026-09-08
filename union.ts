/* *
* With union we can declare that a type could be one of many types, example 
*/

type myBool = true | false; // myBool is classed as boolean -> thats a property of Structural Type System. 

type desktopStates = "switched off" | "sleep" | "switched on"; 

type lockStates = "locked" | "unlocked"; 


/* *
* union provides a way to handle different types too, example 
*/

function defaultLength() {
    let isOne:boolean = false; 
    let obj: string | string[]; 

    obj = (isOne) ? ["k", "u", "n", "a", "l", "v"] : "kunal"; 

    function getLength(obj: string | string[]): number {
        return obj.length; 
}
    console.log(getLength(obj)); 
}

defaultLength(); 

function typedLength() {
    let obj: string | string[];  

    function getLength(obj: string | string[]) : number {
        if (typeof obj === "string") {
            obj = "kunaal"; 
            return obj.length; 
        }
        obj = ["1", "3", "4", "er"]; 
        return obj.length; 
    }
    console.log(getLength(obj)); 
}
typedLength(); 
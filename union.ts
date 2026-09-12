/* *
* With union we can declare that a type could be one of many types, example 
*/

/*
types dont have runtime code like 'interfaces' Both have zero runtime existence, types are just lil more flexible version of interfaces. 
*/
type myBool = true | false; // myBool is classed as boolean -> thats a property of Structural Type System. 

type desktopStates = "switched off" | "sleep" | "switched on"; 

type lockStates = "locked" | "unlocked"; 

type time = {createdAt: Date};
type stamped = {stampted: boolean, id: number, user: string}; 
type timeStamped = time & stamped; 

type coordinates = [number, number ]; 

type adder = (a: number, b: number) => number; 


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

const addThem: adder = (a, b) => a + b;  
addThem(3.5, 8.99); 

const p : coordinates = [23, 4.5]; // why cant i explicitly annotate 'coordinates' to type 'p ? -> why it has to be 'const'? 


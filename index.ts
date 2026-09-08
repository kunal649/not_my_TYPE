// inference
let score = 67; 
console.log(score); 


// explicit annotation 
function add(a: number, b: number) { 
    return a + b; 
}
let ans = add(6,7); 
console.log(ans); 


let arr: number[] = []; 
arr.push(score, ans)
console.log(arr)
 

// Interface 
interface Num { 
    id: number,
    type: string,
    isEven: boolean
}

const num: Num = {
    id: 6,
    type: "Natural Number",
    isEven : true
}

function parseNumber() {
    console.log(num); 
}
parseNumber(); 


// Interface declaration with classes 

interface Land {
    id : number;
    name: string; 
    location: any;
    area: any;
    isProfitable: boolean; 
}

class territory {
    id : number;
    name: string; 
    location: any;
    area: any; 
    isProfitable: boolean; 

    constructor(id: number, name:string, location: any, area: any, isProfitable:boolean) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.area = area;
        this.isProfitable = isProfitable; 
    }
}

const land:Land = new territory(1, "DLF Promenade", "Phase 2,Gurugram-110056", "Gurugram NCR", true); 
console.log(land); 

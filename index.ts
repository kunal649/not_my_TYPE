
let score = 67; // inference
console.log(score); 

function add(a: number, b: number) { // explicit annotation 
    return a + b; 
}
let ans = add(6,7); 
console.log(ans); 


let arr: number[] = []; // explicit annotation 
arr.push(score, ans)
console.log(arr)
 
interface Num { // explicitly defining object's shape using "Interface"
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

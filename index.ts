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
/*
*Interface is compile-time only construct, it has zero runtime existence. It gets erased when TS compiled to JS
*/
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


// << ------------------------------------------Page End------------------------------------------------>>

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const product: Product = { 
    id: 82, 
    name: "Bazooka", 
    price: 999, 
    category: "defence", 
}

function toSummary(product: Product): Pick<Product, "id" | "name"> {
    const { id, name } = product; 
    return {id, name}; 
}
function stripCategory(product: Product): Omit<Product, "category"> {
  const { category, ...rest } = product; 
  return rest; 
}

// << ------------------------------------------Page End------------------------------------------------>>

const settings = { theme: "dark", fontSize: 14 };
type Settings = typeof settings;

function updateSetting<K extends keyof Settings>(
  settings: Settings,
  key: K,
  value: Settings[K]
): Settings {
    return { ...settings, [key]: value}; 
}

let ans1 = updateSetting(settings, "theme", "light"); 
console.log(ans1); 


// << ------------------------------------------Page End------------------------------------------------>>

interface Order {
  orderId: string;
  amount: number;
  status: string;
  customerEmail: string;
}

function getOrderPreview(order: Order): Pick<Order, "orderId" | "amount"> {
  const { orderId, amount } = order; 
  return { orderId, amount }; 
}

function hideCustomerInfo(order: Order): Omit<Order, "customerEmail"> {
  const { customerEmail, ...info } = order; 
  return info; 
}
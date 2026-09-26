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


// << ------------------------------------------Page End------------------------------------------------>>

interface ErrEvent {
  type: "error";
  message: string;
  stack: string;
}

interface InfoEvent {
  type: "info";
  message: string;
}

type SDKEvent = ErrEvent | InfoEvent;

class EventTracker<T extends SDKEvent> {
   events: T[] = []; 

  capture(event: T): void {
    this.events.push(event); 
  }
  getSummary(event: T): Pick<T, "type" | "message"> { 
        const { type, message } = event; 
        return {type, message}; 
  } 
}


// << ------------------------------------------Page End------------------------------------------------>>


const defaultConfig = {
      dsn: "https://example.com/ingest",
      environment: "production",
      sampleRate: 1.0,
      debug: false,
  };

type SDKConfig = typeof defaultConfig; 

/**
mergeConfig<K extends keyof SDKConfig>(base: SDKConfig, key: K, value: SDKConfig[K] | null | undefined): SDKConfig
Returns a new config object with one key updated. If value is null or undefined, fall back to whatever base already had for that key instead — this is exactly what ?? exists for. Must not mutate base
**/

function mergeConfig<K extends keyof SDKConfig>(base: SDKConfig, key: K, value: SDKConfig[K] | null | undefined) : SDKConfig {
  const configObj = {...base}; 
  configObj[key] = value ?? base[key];  // fallback to base[key] if value is nullish/undefined. 
  return configObj; 
}

/**
 * A union type ConfigSource = "env" | "file" | "default", plus a function describeSource(source: ConfigSource): string that returns a different message depending on which source it is. No generics needed here — pure union handling.
 */

type ConfigSource = "env" | "file" | "default"
function describeSource(source: ConfigSource) : string {
  if (source === "env") {
    return "Sourced from env."
  }

  else if (source === "file") {
    return "Sourced from file."
  }

  else if (source === "default") {
    return "Sourced by default."
  }
  else { return "Unvalid Source!"; }
}


/**
 * getPublicConfig(config: SDKConfig): Omit<SDKConfig, "dsn">
Returns a real, new object with every field except dsn actually removed — not type-asserted away, actually absent at runtime. (dsn is the kind of field you wouldn't want leaking into a public-facing debug panel.)
 */

function getPublicConfig(config: SDKConfig) : Omit<SDKConfig, "dsn"> {
  const { dsn, ...publicConfig} = config; 
  return publicConfig; 
}
console.log(getPublicConfig(defaultConfig)); 

function getDebugConfig(config: SDKConfig) : Pick<SDKConfig, "environment" | "sampleRate" | "debug"> {
  const { dsn, ...debugConfig} = config; 
  return debugConfig; 
}
console.log(getDebugConfig(defaultConfig)); 


// << ------------------------------------------Page End------------------------------------------------>>

/**
 * A generic class ConfigStore<T extends object> with:

an internal field holding the current config of type T, set from whatever's passed into the constructor
get<K extends keyof T>(key: K): T[K] — returns one field's value
update<K extends keyof T>(key: K, value: T[K]): void — updates one field on the internal state (this one's allowed to mutate internally, it's meant to behave like a live store, not a pure function)

 */

class ConfigStore<T extends object> {
  config: T; 
  
  get<K extends keyof T>(key: K) : T[K] {
    return this.config[key]; 
  } 
  
  update<K extends keyof T>(key: K, value: T[K]): void {
    this.config[key] = value;
  }
}

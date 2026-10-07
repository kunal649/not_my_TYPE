/**
 * Typescript 5.2
 * TC39's resource management - Suppressed Error
 * SuppressedError solves one critical edge case, if the code throws & cleanup throws too, they
 * dont get lost. 
 * 
 * usage : using + Symbol.dispose
 * (c++ destructor like property, that automatically calls on out-of-scope/unwind case)
 * - same cleanup automatically with guarantee. 
 */

// normal case 
function fn() : void {
    using file = open("test.txt")
    throw new Error("B: Failed! File aint accessible")
    // automatic call - [Symbol.dispose]()
    // dispose succeeds silently, runs during unwind, nothing suppressed or wrapped.
}

// suppressed case
function fxn() : void {
    using file = open("FileA.txt");
    throw new Error("B: failed badly, original error")
    // considering `open` failed then disposal throws too - -
    // "A: failed badly cant open file"
    // original error - suppressed
}

try { fxn(); }
catch (e: any) {
    e.name;   // "SuppressedError"
    e.error.message  // "A: failed badly cant open file" <- the new error from cleanup
    e.suppressed.message  // "B: failed badly, original error" <- original error now wrapped/hidden
 } 


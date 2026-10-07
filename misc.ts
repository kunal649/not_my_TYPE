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

interface SymbolConstructor {
    readonly dispose: unique symbol;
}

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




/** Defines a resource object with a [Symbol.dispose]() method that throws an error with message "cleanup failed".A function that declares a resource with using, then throws a different error with message "operation failed".*/
function pressAlphaKey(input: any): void {
    const keyPressed = () => {
        throw new Error("Failed! Ingestion");
    };

    using resource = {
        input,
        [Symbol.dispose]() {
            console.log("cleanup: disposing resource");
            throw new Error("cleanup failed");
        }
    };

    keyPressed();
}
try {
    pressAlphaKey("data");
} catch (e: any) {
    console.log("name:", e.name);                  // "SuppressedError"
    console.log("error:", e.error.message);        // "cleanup failed"
    console.log("suppressed:", e.suppressed.message); // "Failed! Ingestion"
}


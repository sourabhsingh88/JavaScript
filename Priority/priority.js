// priority is used to check priority of execution of code in js ( timeout , promise , async await , setInterval , setTimeout , fetch api etc )


// write a proper example of priority in js with code and output and explainationSure! Let's explore the concept of priority in JavaScript, particularly focusing on the event loop and how different types of tasks (synchronous code, microtasks, and macrotasks) are executed.

// ### Example Code

console.log("Start of script") ;

setTimeout(() => {
    console.log("setTimeout callback executed") ;
}   
, 0) ;

Promise.resolve().then(() => {
    console.log("Promise callback executed") ;
}) ;

console.log("End of script") ;
 
// ### Output   
// ```
// Start of script
// End of script
// Promise callback executed
// setTimeout callback executed
// ### Explanation
// 1. **Synchronous Code**: The first two `console.log` statements are synchronous and are executed immediately. Therefore, "Start of script" and "End of script" are printed first.   
// 2. **Microtasks**: The `Promise` callback is a microtask. Microtasks have a higher priority than macrotasks (like `setTimeout`). After the synchronous code is executed, the event loop checks for any pending microtasks and executes them before moving on to macrotasks. Hence, "Promise callback executed" is printed next.
// 3. **Macrotasks**: The `setTimeout` callback is a macrotask. It is scheduled to run after the current execution context and any pending microtasks are completed. Therefore, "setTimeout callback executed" is printed last.    
// ### Summary
// In this example, we can see how JavaScript handles the execution of different types of tasks. Synchronous code runs first, followed by microtasks (like Promises), and finally macrotasks (like setTimeout). This demonstrates the priority of execution in JavaScript's event loop.




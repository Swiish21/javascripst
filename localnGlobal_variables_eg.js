// global_var is the name of the global variable, it is accessible anywhere in the code
let global_var = "global";

//here is a function that uses the global variable but also shows how a local variable(local_var) is used.
//local_var is the name of the local variable, it is only accessible within the function
function myFunction() {
    let local_var = "local";
    console.log(local_var);
    console.log(global_var);
}
//here is a call to the function, it will print the local variable and the global variable
//the local variable is not accessible outside of the function so it log an error
myFunction();
console.log(local_var);
console.log(global_var);
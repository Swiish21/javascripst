let global_var = "global";


function myFunction() {
    let local_var = "local";
    console.log(local_var);
    console.log(global_var);
}

myFunction();
console.log(local_var);
console.log(global_var);
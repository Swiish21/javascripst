//a loop that will print odd numbers from 0 to 15 using continue function
//the if statement is to set a condition that will only print odd numbers without it, it will print all numbers in the specified range.
for(let i = 0; i <= 15; i++) {
    if(i % 2 !== 1) {
        continue;//continues to the next iteration of the loop
    }
    console.log("Odd numbers are: " + i);
}

// a loop that breaks after reaching 10 but has a range of 15
for(let i = 0; i <= 15; i++) {
    if(i > 10) {
        break;
    }
    console.log("values of i are: " + i);
}
//normal for loop that will give out values less that 3(0,1,2)
for (let b = 0; b < 3; b++) {
    console.log(b);
}

//loop with nested if statement that will skip number(using the continue statement) 1 in the output(0,2)
for(let a = 0; a < 3; a++) {
    if(a === 1) {
        continue;//if a is equal to 1, it will skip the number and not log it
    }
    console.log(a);
}

//this code is a nested loop where for each value of i, it will run through the loop of j, skipping the number 1 in j's loop, then it will log the value of i and j for each iteration of the inner loop.
for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        if(j === 1) {
            continue;
        }
        console.log(i, j);
    }
}
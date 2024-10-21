//loop1
// prints all numbers from 0 to 20
for(i = 0; i <= 20; i++) {
    console.log(i);
} 

//loop2
// prints all odd numbers from 3 to 29
for(let a = 3; a <= 29; a+= 2) {
    console.log(a);
}

//loop3
// prints all numbers from 12 to -14
for(let b = 12; b >= -14; b--) {
    console.log(b);
}

//loop4
// prints all numbers from 20 to 50 that are divisible by 3
for (c = 50; c >= 20; c--) {
    if(c % 3 === 0) {
        console.log(c);
    }
}


//loop5
// prints all elements in the array
let arr1 = [1, 5, 'LC101', 'blue', 42]

for (i in arr1) {
    console.log(arr1[i]);
}

//loop6
// prints all characters in the string in reverse
let str1 = "LauchCode"

for (let i = str1.length - 1; i >= 0; i--) {
    console.log(str1[i]);
}


//loop7
// prints all even and odd numbers in a given array
const numbers = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
const evens = [];
const odds = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  } else {
    odds.push(numbers[i]);
  }
}

console.log("Even numbers:", evens);
console.log("Odd numbers:", odds);

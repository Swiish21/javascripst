let fruits = ['apple', 'banana', 'orange'];

fruits[3] = 'mango', 'pineapple', 'guava';

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let nums = [1, 4, 7, 2, 0, 8];
let sum = 0

for(let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
}
console.log(sum)


//assignment starts here
//finding the largest number in an array using for loop
let nums2 = [1, 4, 7, 2, 0, 8];//the array
let max = nums2[0];//define a variable that will hold the largest number

for(let i = 0; i < nums2.length; i++) {
    if(nums2[i] > max) {
        max = nums2[i];
    }//if the number in the array is greater than the max variable, it will be the new max
}
console.log(max)
function greet() {
    console.log("Hello");
}

greet();

const greet2 = () => {
    console.log("Hello const");
}

greet2();

function greet3(first_name, last_name, age, gender) {
    console.log(`Hello ${first_name} ${last_name} ${age} ${gender}`);
}

greet3("John", "Doe", 25, "male");

function display_sum(num1, num2) {
    console.log(num1 + num2);
}

display_sum(5, 10);


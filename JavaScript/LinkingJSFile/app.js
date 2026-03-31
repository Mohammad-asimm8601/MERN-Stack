console.log("Hello World!");
console.log("Mohammad Asim");

let a = 10;
let b = 43;
console.log("Sum is : ", a+b);


// template literals

let pencilPrice = 10;
let erasorPrice = 5;
// let output = "The total price is : "  + (pencilPrice + erasorPrice) + " Rupees.";

let output = `The total price is : ${pencilPrice + erasorPrice} Rupees.`

console.log(output);




// Alert and prompt

alert("Something is Wrong!");

let firstName = prompt("enter first name :");
let lastName = prompt("enter last name :");
console.log("Welcome", firstName, lastName, "!");

// error and warning

console.error("this is an error");
console.warn("this is a warning");


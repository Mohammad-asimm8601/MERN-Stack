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

// alert("Something is Wrong!");

// let firstName = prompt("enter first name :");
// let lastName = prompt("enter last name :");
// console.log("Welcome", firstName, lastName, "!");

// error and warning

console.error("this is an error");
console.warn("this is a warning");


// Trim method
// let msg = " Hello ";
// console.log(msg.trim())

// let password = prompt("Set your password");
// let newPass = password.trim();
// console.log(newPass);


// toUpperCase and toLowerCAse method

// let s = "Asim";
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());


// indexOf

// let str = "ILoveYou";
// let i = str.indexOf("Love");
// console.log(i);


// Method Chaining
// let msg = "   hello  "
// console.log(msg.trim().toUpperCase());


// Slice 
// let str = "ILoveMohammadAsim";
// console.log(str.slice(-5));


// Replace and repeate method
let x = "How are you doing?";
let msg = x.replace("you", "they");
console.log(msg);
console.log(msg.repeat(2));


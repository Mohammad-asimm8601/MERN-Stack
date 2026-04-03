function hello(){
    console.log("Hello sulululu....")
}
hello();

function printName(){
    console.log("Mohammad Asim");
    console.log("Jainab Khatoon");
}
printName();


function detail(name, roll, course){
    console.log("Name : "+name+" Roll no. : "+ roll+ " Course : "+ course);
}
detail("Mohammad Asim", 29, "Btech");
detail("Shanawaz Ahmed", 37, "Btech");
detail("Asfak khan", 89, "Btech");




function square(ele){
    return ele*ele;
}

let res = square(5);
console.log(res);


const sum = (a, b) => {
    return a+b;
}
let total = sum(5,3);
console.log(total);

const mul = (a, b) => (a*b);
let ans = mul(8, 9);
console.log(ans);

console.log("Hi there!");
setTimeout( () => {
    console.log("Mohammad Asim");
},4000);

console.log("Welcome to");
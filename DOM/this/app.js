// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// btn.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "yellow";
// });

// function changeColor(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "Blue";
// }

// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("Clicked the button")
// });


let inp = document.querySelector("input");

inp.addEventListener("keyup", function(event){
    console.log(event);
    console.log("Hello");
});
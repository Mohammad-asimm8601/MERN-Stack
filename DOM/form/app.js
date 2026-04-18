let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    // let user = document.querySelector("#user");
    // console.log(user.value);
    // let pass = document.querySelector("#pass");
    // console.log(pass.value);
});

let user = document.querySelector("#user");

// user.addEventListener("change", function(){
//     console.log("CHANGE EVENT ");
//     console.log("final value = ", this.value)
// });
user.addEventListener("input", function(){
    console.log("input EVENT");
    console.log("final value = ", this.value)
});
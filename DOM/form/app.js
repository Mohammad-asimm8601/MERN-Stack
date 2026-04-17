let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let user = document.querySelector("#user");
    console.log(user.value);
    let pass = document.querySelector("#pass");
    console.log(pass.value);
});
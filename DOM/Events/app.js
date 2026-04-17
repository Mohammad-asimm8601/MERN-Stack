let btns = document.querySelectorAll("button");

for (btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;
    // btn.onmouseenter = function () {
    //     console.log("You entered a button");
    // }

    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
}

function sayHello() {
    alert("Hello!");
}
function sayName() {
    alert("Mohammad Asim");
}
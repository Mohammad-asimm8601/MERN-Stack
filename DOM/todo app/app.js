let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    let del = item.appendChild(btn);
    del.classList.add("delete");
    ul.appendChild(item);
    inp.value = "";
});


ul.addEventListener("click", function(event){
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement; 
        listItem.remove();
        console.log("deleted") 
    }
});
// let deltbns = document.querySelectorAll(".delete");
// for(deltbn of deltbns){
//     deltbn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }
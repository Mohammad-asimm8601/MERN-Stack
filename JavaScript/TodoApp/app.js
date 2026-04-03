let todo = [];
let req = prompt("Please enter your request : ");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("______________");
        for(let i=0; i<todo.length; i++){
            console.log(i+1+". "+ todo[i]);
        }
        console.log("______________");
    }else if(req == "add"){
        let task = prompt("Please enter your task you want to add");
        todo.push(task);
        console.log("task added");
        
    }
    else if(req == "delete"){
        let rem = prompt("Enter the task you want to remove");
        let idx = todo.indexOf(rem);
        todo.splice(idx, 1);
        console.log("Task deleted");
    }
    req = prompt("Please enter your request : ");
}
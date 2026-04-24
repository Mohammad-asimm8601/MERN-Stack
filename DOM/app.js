// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if( nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000 ,() =>{
//     changeColor("orange", 1000, () =>{
//         changeColor("green", 1000, () =>{
//             changeColor("yellow", 1000, ()=> {
//                 changeColor("maroon", 1000);
//             });
//         });
//     });
// });

// callbacks nesting -> callback hell

// function savetoDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 3) {
//     success();
//   } else {
//     failure();
//   }
// }
// savetoDB(
//   "Human Public School",
//   () => {
//     console.log(" Success : your data was saved");
//     savetoDB(
//       "hello world",
//       () => {
//         console.log(" Success2 : your data was saved");
//         savetoDB("Mohammad Asim", ()=>{
//             console.log("Success 3 : your data was saved");
//         }, ()=>{
//             console.log("Failue 3 : weak connection. data not saved");  
//         });
//       },
//       () => {
//         console.log("Failure2 : weak connection. data not saved");
//       },
//     );
//   },
//   () => {
//     console.log("Failure : weak connection. data not saved");
//   },
// );


function savetoDB(data) {
  return new Promise((resolve, reject) =>{
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
        resolve("Success : Data was saved");
    } else{
        reject("Failure : weak connection");
    }
  }); 
}

savetoDB("Apna college")
    .then(() =>{
    console.log("Resolved");  
})
.catch(() =>{
    console.log("Rejected");
});
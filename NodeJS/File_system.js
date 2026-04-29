const fs = require('node:fs');

// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data);   
// });

// const a = fs.readFileSync('file.txt');
// console.log(a.toString());

fs.writeFileSync('file2.txt', "I am file2 in your folder");

console.log("Finished reading file");

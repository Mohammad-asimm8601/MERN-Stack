const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("WaterFull", () => {
  setTimeout(() => {
    console.log("Please turn off the motor! Its a gentle reminder");
  }, 3000);
});

console.log("The script is running");
console.log("The script is running is still running");

myEmitter.emit("WaterFull");

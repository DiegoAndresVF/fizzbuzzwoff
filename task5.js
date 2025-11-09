// Refer to Task 5 in your Instructions to complete this task
const prompt = require("prompt-sync")();
let hasta = parseFloat(prompt("Ingresa el número hasta el cual analizar (máximo 105): "));

while(hasta > 105){
  console.log("Ingrese un número entre 1 y 105: ")
  hasta = parseFloat(prompt("Ingresa el número hasta el cual analizar (máximo 105): "));
}

for (let i = 1; i <= hasta; i++) {
  if(i%3 === 0 && i%5 === 0 && i%7 === 0){
    console.log("FizzBuzzWolf")
  }else if(i%3 === 0 && i%5 === 0){
    console.log("FizzBuzz")
  }else if(i%3 === 0){
    console.log("Fizz")
  }else if(i%5 === 0){
    console.log("Buzz")
  }else if(i%7 === 0){
    console.log("Wolf")
  }else {
  console.log(i)}
  };
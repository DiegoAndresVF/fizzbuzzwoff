// Refer to Task 6 in your Instructions to complete this task
let resultados = [];
const prompt = require("prompt-sync")();
let hasta = parseFloat(prompt("Ingresa el número hasta el cual analizar (máximo 105): "));

while(hasta > 105){
  console.log("Ingrese un número entre 1 y 105: ")
  hasta = parseFloat(prompt("Ingresa el número hasta el cual analizar (máximo 105): "));
}

for (let i = 1; i <= hasta; i++) {
  if(i%3 === 0 && i%5 === 0 && i%7 === 0){
    resultados.push("FizzBuzzWoof")
  }else if(i%3 === 0 && i%5 === 0){
    resultados.push("FizzBuzz")
  }else if(i%3 === 0){
    resultados.push("Fizz")
  }else if(i%5 === 0){
    resultados.push("Buzz")
  }else if(i%7 === 0){
    resultados.push("Woof")
  }else {
  resultados.push(i)}
  };

  resultados.forEach(elemento => {console.log(elemento)})
  console.log(`Largo de la lista: ${resultados.length}`)
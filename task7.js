// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
  ];
  
let resultados = [];
const prompt = require("prompt-sync")();
let hasta = parseFloat(prompt(">Ingresa el número hasta el cual analizar (máximo 105): "));

//Validación para que no se ingrese un número fuera del rango 1 - 105:
while(hasta < 1 || hasta > 105){
  console.log("\nERROR: El sólo se aceptan números entre 1 y 105")
  hasta = parseFloat(prompt(">Ingresa el número hasta el cual analizar (máximo 105): "));
}

//Detectar y llenar el array "resultados" con Fizz, Buzz, Wolf o convinaciones de estos:
for (let i = 1; i <= hasta; i++) {
  if(i%3 === 0 && i%5 === 0 && i%7 === 0){
    resultados.push(buzzWords[0]+buzzWords[1]+buzzWords[2])
  }else if(i%3 === 0 && i%5 === 0){
    resultados.push(buzzWords[0]+buzzWords[1])
  }else if(i%3 === 0){
    resultados.push(buzzWords[0])
  }else if(i%5 === 0){
    resultados.push(buzzWords[1])
  }else if(i%7 === 0){
    resultados.push(buzzWords[2])
  }else {
  resultados.push(i)
    }
};

console.log("\n--------------Lista Fizz, Buzz y Woof--------------")
resultados.forEach(elemento => {console.log(elemento)})
console.log(`Largo de la lista: ${resultados.length}`)


//Números primos
//Creé un array de objetos que usa un for para detectar cantidad de divisores por cada número hasta el límite definido por el usuario:
let objetos = []

for(let i=2; i<=hasta;i++){
    for(let x=1;x<=i;x++){
        if(i%x===0){
            objetos.push({
                num_i:i,
                num_x:x
            })
        }
    }
}
/*console.log(objetos.length)
console.log(objetos)*/


//Creé un arrya que se usa en un for que cuenta los divisores filtrando por cuántas veces aparece el número en la división de resto cero. Sí solo tiene 2, se le considera primo y se agrega una palabra (en este caso "Bark")
let primos = [];

for(let i=2; i<=hasta;i++){
    let cantidad = objetos.filter(obj => obj.num_i === i).length;
    //console.log(`El número ${i} tiene ${cantidad} de divisores`)
    if(cantidad <= 2){
        //console.log(`*Ponerle al número ${i} que es primo`)
        primos.push(i)
        resultados[i-1] = String(resultados[i-1]).replace(/\d+/g, '')+buzzWords[3]
    }
}
console.log("\n--------------Lista actualizada con números primos--------------")
console.log(`${primos} son primos (Bark)`)
resultados.forEach(elem=>console.log(elem))
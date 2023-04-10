
//Ejercicio #1
let num = 13;

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}

let resultado = parImpar(num);
console.log("Ejercicio #1 : El número "+num+" es "+resultado);


//Ejercicio #2

function comparar(a,b) {
  if(a>b){
      console.log("Ejercicio #2 :  "+a+" es mayor que "+b)
  }
  if(a<b){
      console.log("Ejercicio #2 :  "+a+" es menor que "+b )
  }
  if(a===b)  {
      console.log("Ejercicio #2 : ambos valores son iguales")
  }
  return 
}
let comparado = comparar(9, 16);


//Ejercicio #3


function multiploCinco( resultado){
  if (numero % 5){
      console.log("Ejercicio #3 : "+numero+" no es multiplo de 5")
  }
  else {
      console.log("Ejercicio #3 : "+numero+"  es multiplo de 5" )

  }
}
let numero = (20)
let multiplo = multiploCinco(numero);

//Ejercicio #4

let i = 0;
let numE4 = (10)
console.log("Ejercicio #4 : ")
function contador(resultado){
    while (i < numE4) {
     console.log(i++);
    
    }
}

let resultante = contador(i)
console.log(numE4) 

//Ejercicio #5

console.log("Ejercicio #5 :")

function repetirPalabra(palabra, veces){
  for (let i = 0; i < veces; i++) {
      console.log(palabra);
  }
  
}

repetirPalabra("hola",5);

//Ejercicio #6

console.log("Ejercicio #6 :")
const a = ["Hola", "mundo", "cruel",2023]

function ejer6(array){
    for (let i = 0; i< a.length; i++){
        
            console.log(a[i])
    }
}
ejer6(a)

//Ejercicio #7 

console.log("Ejercicio #7 :")
const b = [10, 20,30, 40, 50, 60, 70, 80, 90, 100]

function ejer7(saltarN){
    for (let i = 0; i< b.length; i++){
        if(i !== 4){
            console.log(b[i])
        }
    }
}
ejer7(b)

//Ejercicio #8 

console.log("Ejercicio #8 :")
let n =(5) 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function ejer8(n, numeros){
    for(let i = 0 ; i < numeros.length; i++){
        console.log(numeros[i]*n)
    }

}
ejer8(n, numeros);

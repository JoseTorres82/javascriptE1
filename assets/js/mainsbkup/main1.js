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

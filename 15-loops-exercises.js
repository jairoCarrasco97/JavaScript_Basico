
// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let sumaTotal = 0;
let contador = 1;

while (contador <= 100) {
    sumaTotal = sumaTotal + contador;
    contador++;
    console.log(sumaTotal);
}
console.log("La suma total del 1 al 100 es: " + sumaTotal);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <=50; i++) {
    if (i % 2 == 0) {console.log(i);}

}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Juan", "Pepe", "Alberto", "Perico", "Antonio"];

for (let i = 0; i <= nombres.length -1; i++) {
    console.log(nombres[i]);
}

for (let value of nombres) {
    console.log(value);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let string = "Hola, estoy aprendiendo JavaScripts y me encanta";
let contadorVocales = 0;

for (let value of string) {
    if (value == "a" || value == "e" || value == "i" || value == "o" || value == "u" || value == "A" || value == "E" || value == "I" || value == "O" || value == "U") {
        contadorVocales++;
    }
}

console.log("El número total de vocales es: " +contadorVocales);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let arrayNumeros = [1, 2, 3, 4, 5];
let producto = 1;

for (let value of arrayNumeros) {
    producto = producto * value;
}
console.log("El producto total es: " +producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ` + 5*i);
}

// 8. Usa un bucle para invertir una cadena de texto

/*
Primero generaré el resultado en un array para poder usar la funcion unshift y luego
convertiré en un string
*/

let cadena = "Hola, estoy aprendiendo JavaScript";
let arrayCadena = [];
let cadenaInvertida = "";
for (let value of cadena) {
    arrayCadena.unshift(value);
}

for (let value of arrayCadena) {
    cadenaInvertida = cadenaInvertida + value;
}
console.log(cadenaInvertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let a = 0;
let b = 1;
let fibonacci = 0;
for (let i = 0; i < 10; i++) {
    fibonacci = a + b;
    console.log(fibonacci);
    a = b;
    b = fibonacci;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
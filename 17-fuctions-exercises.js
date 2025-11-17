// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

let a = 3;
let b = 10;

function sum(a, b) {
    return a+b;
}
let result = sum(a, b);
console.log(result);

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let myArray = [3, 5, 50, 75, 3, -8898, 0, 2];

function maxNumber(array) {
    let max;
    for (let value of array) {
        if (max == undefined || value > max) {
            max = value;
        }
    }
    return max;
}

let maxResult = maxNumber(myArray);
console.log(maxResult);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let string = "Holaa, voy a contar cuántas vocales tiene esta string";

function countVocals(str) {
    let count = 0;
    let vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";
    for (let value of str) {
        if (vocales.includes(value)) {
            count++;
        }
    }
    return count;
}

let countResult = countVocals(string);
console.log(countResult);

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let myArrayString = ["Hola, ", "Estoy aprendiendo ", "a escribir", " En ", "mayusculas"];

function mayusculas(array) {
    let newArray = [];
    for (let value of array) {
        newArray.push(value.toUpperCase());
    }
    return newArray;
}

let mayusResult = mayusculas(myArrayString);
console.log(mayusResult);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

let primo = 984;

function esPrimo(num) {
    for (let i = 2; i <= (num - 1); i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true;
}

let primoResult = esPrimo(primo);
console.log(primoResult);

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array1 = [3, 5, 7, 9, 11, 13];
let array2 = [4, 5, 6, 7, 8, 9];

function commonElements(arr1, arr2) {
    let commonArray = [];

    for (let value of arr1) {
        if (arr2.includes(value)) {
            commonArray.push(value);
        }
    }
    return commonArray;
}
let commonArray = commonElements(array1, array2);
console.log(commonArray);

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let numbers = [3, 5, 7, 9, 11, 13, 2, 4, 6, 8, 10];

function sumPar(array) {
    let sum = 0;
    for (let value of array) {
        if (value % 2 == 0) {
            sum = sum + value;
        }
    }
    return sum;
}

let sumParResult = sumPar(numbers);
console.log(sumParResult);

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado
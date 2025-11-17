// 1. Crea un array que almacene cinco animales

let myArray = ["Perro", "Gato", "Loro", "Tigre", "Cebra"];

// 2. Añade dos más. Uno al principio y otro al final

myArray.unshift("Elefante"); // Añade al principio
myArray.push("Conejo");      // Añade al final

console.log(myArray);


// 3. Elimina el que se encuentra en tercera posición

myArray.splice(2, 1);  // Elimina 1 elemnto (el segundo número indica cuántos a eliminar)
                       // desde el índice 2 (OJO: el índice empieza en 0, por tanto el 2 elimina
                       // el tercer elemento)

console.log(myArray);

// 4. Crea un set que almacene cinco libros

let mySet = new Set(["El Quijote", "El Principito", "1984", "Cien años de soledad", "La Iliada"]);
console.log(mySet);

// 5. Añade dos más. Uno de ellos repetido

mySet.add("Don Juan Tenorio");
mySet.add("1984"); // Repetido

console.log(mySet);

// 6. Elimina uno concreto a tu elección

mySet.delete("El Quijote");

console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map();

myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]          // El último no lleva coma
]);

console.log(myMap);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMap.has(5)); // true

// 9. Añade al mapa una clave con un array que almacene los meses de verano

myMap.set("verano", [6, 7, 8]);
console.log(myMap);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray2 = ["a", "b", "c", "a", "b", "d", "e"];

let mySet2 = new Set(myArray2);

let myMap2 = new Map();

myMap2.set("letras", mySet2);

console.log(myMap2);
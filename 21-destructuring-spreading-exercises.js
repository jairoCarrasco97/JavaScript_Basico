
// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let myArray = [1, 2, 3, 4, 5];

let [n1, n2] = myArray;
console.log(n1);
console.log(n2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [num1, num2, num3, num4, num5, num6 = 0] = myArray;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let car = {
    brand: "BMW",
    color: "Blue",
    doors: 5,
    launch: 2024,
    owner: {
        name: "Jairo",
        age: 27
    }
}

let {brand, launch} = car;
console.log(brand);
console.log(launch);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {brand: brand1, color: color1} = car;
console.log(brand1);
console.log(color1);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let {owner: {name: ownerName, age: ownerAge}} = car;
console.log(ownerName);
console.log(ownerAge);

// 6. Usa propagación para combinar dos arrays en uno nuevo

let array1 = [1, 2, 3];
let array2 = [4, 5];

let array = [...array1, ...array2];
console.log(array);

// 7. Usa propagación para crear una copia de un array

let arrayCopy = [...array];
console.log(arrayCopy);

// 8. Usa propagación para combinar dos objetos en uno nuevo

// 9. Usa propagación para crear una copia de un objeto

// 10. Combina desestructuración y propagación
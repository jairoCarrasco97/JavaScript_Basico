// 1. Crea un objeto con 3 propiedades

let consoleGame = {
    model: "PS5",
    color: "Black",
    price: 500,
}

// 2. Accede y muestra su valor

console.log(consoleGame);

// 3. Agrega una nueva propiedad

consoleGame.Brand = "Sony";

// 4. Elimina una de las 3 primeras propiedades

delete consoleGame.color;

// 5. Agrega una función e invócala

consoleGame.turnOn = function() {
    console.log("La consola esta encendida");
}

// 6. Itera las propiedades del objeto

for (let key in consoleGame) {
    console.log(key + ": " + consoleGame[key])
}

// 7. Crea un objeto anidado

// 8. Accede y muestra el valor de las propiedades anidadas

// 9. Comprueba si los dos objetos creados son iguales

// 10. Comprueba si dos propiedades diferentes son iguales
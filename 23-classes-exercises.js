// 1. Crea una clase que reciba dos propiedades

class car {

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    arrancar() {
        console.log("El coche está arrancado");
    }

    static saludar() {
        console.log("Hola desde la clase car");
    }
}

// 2. Añade un método a la clase que utilice las propiedades

let car1 = new car("Volkswagen", "Bora", 2001);

// 3. Muestra los valores de las propiedades e invoca a la función

console.log(car1.brand, car1.model, car1.year);
car1.arrancar();

// 4. Añade un método estático a la primera clase

car.saludar();

// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia

class subCar extends car {

    constructor(power){
        this.power = power
    }


}

// 7. Crea una clase que haga uso de getters y setters

class home {

    #adress
    #country
    constructor(adress, country, year) {
        this.#adress = adress
        this.#country = country
        this.year = year
    }

    get getAdress() {
        return this.#adress
    }

    set setAdress(newAdress) {
        this.#adress = newAdress
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

let home1 = new home("C/ Alpino, n5", "España", 1985);

// 9. Utiliza los get y set y muestra sus valores

console.log(home1);   // No se visualiza ni adress ni country porque son privados
console.log(home1.getAdress);

// 10. Sobrescribe un método de una clase que utilice herencia
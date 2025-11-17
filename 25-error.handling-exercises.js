

// 1. Captura una excepción utilizando try-catch

try {
    console.log(total);
} catch (error) {
    console.log("Se ha producido un error: " + error.message);
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    console.log("Hola, mi nombre es: " + nombre)
} catch (error) {
    console.log("Se ha producido un error: " + error.message);
} finally {
    console.log("Este bloque se ejecuta siempre");
}

// 3. Lanza una excepción genérica

try {
    throw new Error ("Esto es una exepción genérica");
} catch (error) {
    console.log(error.message);
}

// 4. Crea una excepción personalizada

class numParError extends Error {
    constructor (message, a){
        super(message);
        this.a = a;
    }
}
function numPar(a) {
        if (a % 2 == 0) {
            console.log("El número " + a +" es par");
        } else {
            throw new numParError("El número " + a +" no es par")
        }
    }

// 5. Lanza una excepción personalizada

try {
    console.log(numPar(3));
} catch (error) {
    console.log("Se ha producido un error: " + error.message);
}

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
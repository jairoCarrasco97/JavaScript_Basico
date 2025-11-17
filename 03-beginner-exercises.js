// 1. Escribe un comentario en una línea

let lineComment = "This is a single line comment";
console.log(lineComment);

// 2. Escribe un comentario en varias líneas

let multiLineComment = "This is a single line comment. \nThis is a second line of the comment. \nThis is a multi-line comment.";
console.log(multiLineComment);
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let num = 23;
let string = "Hello, World!";
let boolean = true;
let undefinedVar;
let bigInt = 5481354168571678516857167171n;
let symbol = Symbol("id");
let nullVar = null;

// 4. Imprime por consola el valor de todas las variables

console.log("Número: ", num, "\nCadena de texto: ", string, "\nBooleano: ", boolean, "\nVariable indefinida: ", undefinedVar, "\nBigInt: ", bigInt, "\nSímbolo: ", symbol, "\nValor nulo: ", nullVar);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof num);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof undefinedVar);
console.log(typeof bigInt);
console.log(typeof symbol);
console.log(typeof nullVar);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

num = 564;
string = "Hello, coding!";
boolean = false;
undefinedVar;
bigInt = 548134786578348967983468571678516857167171n;
symbol = Symbol("id2");
nullVar = null;  // ¿Cómo cambio un valor nulo?

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

num = Symbol("number");
string = null;
boolean = "true";
undefinedVar;
bigInt = false;
symbol = 893;
nullVar = 54968546541651681658161681651635163n;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const numConst = 5;
const stringConst = "Hello, World!";
const booleanConst = true;
const undefinedVarConst = undefined; //Hay que asignarle un valor indefinido explícitamente si es constante.
const bigIntConst = 5481354168571678516857167171n;
const symbolConst = Symbol("id");
const nullVarConst = null;

// 9. A continuación, modifica los valores de las constantes

/*
    numConst = 867564;
*/
 //No se puede asignar un nuevo valor a una constante, produce error.

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/*
    Código corregido para ejecutarse correctamente
*/
# Funciones_Como_Crearlas
¿Qué es una función?
Una función es un conjunto de instrucciones que se agrupan para realizar una 
tarea concreta y que se pueden reutilizar fácilmente. 
Función por declaración
function saludar() {
 console.log('¡Hola!');
}
saludar(); // Salida: "¡Hola!"
Parámetros y argumentos
Una función puede tener cero o más parámetros. Los parámetros son los 
nombres que aparecen en la definición de una función. Por otro lado, los 
argumentos son los valores que le pasamos (y que, por tanto, recibe) una 
función.
function saludar(tuNombre) {
 console.log('¡Hola! ' + tuNombre);
}
saludar(“JuanPerez”); // Salida: "¡Hola! JuanPerez"
Return
La sentencia return finaliza la ejecución de la función y especifica un valor para 
ser devuelto a quien llama a la función.
function sumar(a, b) {
 const resultado = a + b;
 return resultado;
}
Profesor: Alejandro 
console.log( sumar( 5, 3 ) ); // Salida: 8
Uso de template strings o `plantillas literales`
function sumar(a, b) {
 const suma = a + b
 const resultado = `El resultado de la suma es ${suma}`;
 return resultado;
}
console.log( sumar( 5, 3 ) ); // Salida: El resultado de la suma es 8
Asignar función a una variable
const sumando = sumar;
console.log( sumando ( 5, 3 ) ); // Salida: El resultado de la suma es 8
Parámetros por defecto
function multiplicar(a, b = 1) {
 const resultado = a * b;
 return resultado;
}
console.log(multiplicar(5)); // Salida: 5
console.log(multiplicar(5, 3)); // Salida: 15
Funciones anónimas
Las funciones anónimas son un tipo de funciones que se declaran sin nombre de 
función y se alojan en el interior de una variable y haciendo referencia a ella cada 
vez que queramos utilizarla.
const multiplicar = function(a, b) {
 return a * b;
};
Profesor: Alejandro 
const resultado = multiplicar(5, 3);
console.log(resultado); // Salida: 15
Funciones constructor
La función constructora es técnicamente una función normal. Aunque hay dos 
convenciones:
• Son nombradas con la primera letra mayúscula.
• Sólo deben ejecutarse con el operador "new".
this es una palabra clave especial que se utiliza para referirse al objeto actual en 
el contexto en el que se encuentra.
function Persona(nombre, edad) {
 this.nombre = nombre;
 this.edad = edad;
 this.saludar = function() {
 console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
 };
}
const persona1 = new Persona("Juan", 25);
const persona2 = new Persona("María", 30);
persona1.saludar(); // Salida: "Hola, mi nombre es Juan y tengo 25 años."
persona2.saludar(); // Salida: "Hola, mi nombre es María y tengo 30 años."
Funciones flechas o arrow functions
Son una forma corta de escribir funciones que aparece en Javascript a partir de 
las ultimas especificaciones. Básicamente, se trata de eliminar la palabra 
function y añadir => antes de abrir las llaves:
const func = function () {
 return "Función tradicional.";
};
Profesor: Alejandro 
const func = () => {
 return "Función flecha.";
};
Ejemplo arrow function sin parámetros
const func = () => "Función flecha."; // 0 parámetros: Devuelve "Función flecha"
Ejemplo arrow function con 1 parámetro
const func = (e) => e + 1; // 1 parámetro: Devuelve el valor de e + 1
Ejemplo arrow function con 2 parámetro
const func = (a, b) => a + b; // 2 parámetros: Devuelve el valor de a + b
Variables locales: 
Las variables locales son declaradas dentro de una función y solo están 
accesibles dentro de ese ámbito. Estas variables se denominan locales porque 
su alcance está limitado al contexto de la función en la que se declaran. No 
pueden ser accedidas desde fuera de la función.
function ejemplo() {
 const variableLocal = 10; // Variable local
 console.log(variableLocal); // Salida: 10
}
ejemplo();
console.log(variableLocal); // Error: variableLocal is not defined
Variables globales: 
Las variables globales son declaradas fuera de cualquier función y están 
disponibles en todo el alcance del script. Pueden ser accedidas y modificadas 
desde cualquier parte del código, incluyendo dentro de funciones.
Profesor: Alejandro 
let variableGlobal = 5; // Variable global
function ejemplo() {
 console.log(variableGlobal); // Salida: 5
 variableGlobal = 10;
}
ejemplo();
console.log(variableGlobal); // Salida: 10
Ejemplo con VAR
function ejemplo() {
 if (true) {
 var x = 10;
 console.log(x); // Salida: 10
 }
 console.log(x); // Salida: 10
}
ejemplo();
console.log(x); // Error: x is not define
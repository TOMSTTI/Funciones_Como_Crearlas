
//Funcion por declaracion
function saludar (){
    console.log("Hola!");
}
saludar();


//parametros y argumentos
function saludar(tuNombre) {
    console.log('¡Hola! ' + tuNombre);
   }
   saludar("JuanPerez"); // Salida: "¡Hola! JuanPerez"


//RETURN
function sumar(a, b) {
    const resultado = a + b;
    return resultado;
}
   console.log( sumar( 5, 3 ) ); // Salida: 8

   
   //Uso de template strings o `plantillas literales`
   function sumar(a, b) {
    const suma = a + b
    const resultado = `El resultado de la suma es ${suma}`;
    return resultado;
   }
   console.log( sumar( 5, 3 ) ); // Salida: El resultado de la suma es 8


   //Asignar función a una variable
   const sumando = sumar;
   console.log( sumando ( 5, 3 ) ); // Salida: El resultado de la suma es 8

   //Parámetros por defecto
   function multiplicar(a, b = 1) {
    const resultado = a * b;
    return resultado;
   }
   console.log(multiplicar(5)); // Salida: 5
   console.log(multiplicar(5, 3)); // Salida: 15

   //Funciones anónimas
   const multiplicar = function(a, b) {
    return a * b;
   };
   const resultado = multiplicar(5, 3);
   console.log(resultado); // Salida: 15

   //Funciones constructor
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

   //Funciones flechas o arrow functions
   const funcion = function () {
    return "Función tradicional.";
   };
   const fun = () => {
    return "Función flecha.";
   };

   //Ejemplo arrow function sin parámetros
   const funcio = () => "Función flecha."; // 0 parámetros: Devuelve "Función flecha"

  // Ejemplo arrow function con 1 parámetro
   const funcionn = (e) => e + 1; // 1 parámetro: Devuelve el valor de e + 1

  // Ejemplo arrow function con 2 parámetro
   const funcioon = (a, b) => a + b; // 2 parámetros: Devuelve el valor de a + b
   

   //Variables locales: 
   function ejemplo() {
    const variableLocal = 10; // Variable local
    console.log(variableLocal); // Salida: 10
   }
   ejemplo();
   console.log(variableLocal); // Error: variableLocal is not defined

   //Variables globales: 
   let variableGlobal = 5; // Variable global
function ejemplo() {
 console.log(variableGlobal); // Salida: 5
 variableGlobal = 10;
}
ejemplo();
console.log(variableGlobal); // Salida: 10

//Ejemplo con VAR
function ejemplo() {
 if (true) {
 var x = 10;
 console.log(x); // Salida: 10
 }
 console.log(x); // Salida: 10
}
ejemplo();
console.log(x); // Error: x is not define


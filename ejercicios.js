console.log(" Hola, el archivo se vincúlo correctamente");

// 1.  Hacer un programa que reciba 2 números del usuario y los sume.

// Es una secuencia 
/*let número1= 0;
let número2= 0;
let resultado = 0;*/

// se usa para pedir datos a los usuarios
// los metodos se usan con parentisis

// Variable = asignación
// TODO LO QUE VIENE EN PROMPTS O DEL USUARIO VIENE CON STRING 
//Vamos 

// Vamos a convertir el texto en numero
// parseIntc-> convierte a decimales
// parsefloat -> convierte a decimales 
/*número1= prompt ("Ingrese el primer número");
número2= prompt ("Ingrese el segundo número");
resultado= parseFloat(número1)+ parseFloat(número2)


alert("el resultado de la suma de:  " + número1 + "+" + número2+ "es" + resultado); */

//2. Hacer un programa que reciba un nombre por parte del usuario, si se recibió nombre por parte del usuario, saludarlo con nombre, si no, sólo decir 'Hola'

// Esto son condicionales 


// if -> si se cumple una condición haga
// else -> sino se cumple haga otra cosa

/*variable = "" -> false -> no
Variable = "Edna"  -> true -> si */
/* SÓLO SE EJECUTA LO DE EL IF CUANDO LA CONDICIÓN SE CUMPLE ->
VERDADERO */

/*let nombreUsuario = prompt("Ingrese su nombre")
if (nombreUsuario) {
    alert("Hola"+ nombreUsuario);
console.log("se cumpla la condición")
}else {
    alert( "Hola")
}*/

//3. Hacer un programa que pida al usuario un número entero y muestre los valores desde cero hasta el número ingresado -> 1 en 1

/* For 
foreach -> se utiliza bastante 
while
do while */


/*let numero = parseInt(prompt("Ingrese un número entero"));
for (let i = 0; i <= numero; i++) {
    console.log(i);

} */

//4. Hacer un programa que solicite al usuario un texto, si el usuario no ingresa nada seguir solicitando hasta que lo haga.🙋‍♂️ 🙋‍♀️ 

function solicitarTexto() {
    let texto = "";
    // Bucle que continúa solicitando texto hasta que el usuario ingrese algo
    while (texto === "") {
        texto = prompt("Por favor, ingresa un texto:");
        // Opcional: Puedes manejar la posibilidad de que el usuario cancele el prompt
        if (texto === null) {
            alert("Operación cancelada por el usuario.");
            return; // Sale de la función si el usuario cancela
        }
        // Eliminar espacios en blanco para evitar entradas vacías con espacios
        texto = texto.trim();
    }
    alert("Gracias por ingresar: " + texto);
}

/*
//5. Hacer un programa que muestre los días de la semana.

let diasSemana = ["lunes", "martes","miercoles","jueves","viernes","sabado","domingo"];

console.log(diasSemana);
// forma 1 de mostrar elemnetos 
// el nombreDelArreglo [el index]
/*console.log (diasSemana[0]);
console.log (diasSemana[1]);
console.log (diasSemana[2]);
console.log (diasSemana[3]);
console.log (diasSemana[4]);
console.log (diasSemana[5]);
console.log (diasSemana[6]);
console.log (diasSemana[7]);*/

// OPCION OPTIMIZADA CON CICLOS
// Foreach -> es un ciclo para recorrer arreglos de datos
// El ciclo termina 
// forma 2 de mostrar elementos 
/*diasSemana.forEach(
    // función flecha -> acciones que se deben ejecutar 
    (dia) => { 
        console.log(dia);
    }
)*/

// Foreach () -> es un metodo UNICAMENTE PARA ARREGLOS - Arrays

//6. Hacer un programa que pida al usuario dos números, mostrar la suma y la resta del primer número y el segundo número.   
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene referencias a los elementos del DOM
    const calcularBtn = document.getElementById('calcularBtn');
    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');
    const sumaOutput = document.getElementById('suma');
    const restaOutput = document.getElementById('resta');

    // Agrega un evento de clic al botón
    calcularBtn.addEventListener('click', function() {
        // Obtiene los valores de los inputs y los convierte a números
        const num1 = parseFloat(numero1Input.value);
        const num2 = parseFloat(numero2Input.value);

        // Verifica que ambos campos hayan sido llenados
        if (isNaN(num1) || isNaN(num2)) {
            alert('Por favor, ingresa ambos números.');
            return;
        }

        // Calcula la suma y la resta
        const suma = num1 + num2;
        const resta = num1 - num2;

        // Muestra los resultados en la página
        sumaOutput.textContent = `Suma: ${suma}`;
        restaOutput.textContent = `Resta: ${resta}`;
    });
});
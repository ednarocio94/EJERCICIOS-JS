// no hay espacios entre el document, el punto y el metodo
// getElementById -> es traer un elemento del html por si Id 

let nameInput = document.getElementById("name");
console.log(nameInput);

// querySelector me trae cualquier tipo de selector -> etiqueta, id, clase
let saludoP = document.querySelector(".mostrarSaludo");
console.log(saludoP);

// Acceder al contenido de nuestras etiquetas
//let = nameInput.value;

// Funciones --> SON BLOQUES QUE ENCAPSULAN CÓDIGO, Y EJECUTAN ACCIONES

function saludarUsuario(){
// Aquí va el código que quiero ejecutar 
// acceder al contenido de nuestras etiquetas 
let name = nameInput.value;
console.log(name)


let mensaje = " ";
// si se ingreso nombre 
if (name){
    mensaje = " hola " + name;
    saludoP.textContent = mensaje;
} else {
    // si no se ingreso nombre 
    mensaje = "Hola Amigo"
    saludoP.textContent = mensaje
}
}









/*let nombreUsuario = prompt("Ingrese su nombre")
if (nombreUsuario) {
    alert("Hola"+ nombreUsuario);
console.log("se cumpla la condición")
}else {
    alert( "Hola")
}*/
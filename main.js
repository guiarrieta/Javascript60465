// Variables y constantes
let inventario = [];

// Funciones

//Funcion para agregar nuevo producto al inventario. Si el producto ya se encuentra en el inventario, se informa
// Si no se ingresa un nombre o una cantidad, se informa que la entrada es inválida
function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:").toUpperCase();
    let productoIndex = inventario.findIndex(producto => producto.nombre === nombre)
    if (productoIndex !== -1) {
        alert(`El producto '${nombre}' ya se encuentra en el inventario.`);
    } else {    
        let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
        let precio = parseInt(prompt(`Ingrese el precio unitario del producto ${nombre}:`));

        if (nombre && cantidad) {
            inventario.push({ nombre, cantidad, precio });
            console.log(`Producto '${nombre}' agregado al inventario.`);
        } else {
        console.log("Entrada inválida. Por favor, ingrese un nombre y una cantidad válidos.");
        }
    }
}

//Funcion para visualizar inventario por consola en una tabla
function verInventario() {
    let blanco = " "
    console.log("Inventario:");
    console.log("|     PRODUCTO              |   CANTIDAD   |     PRECIO     |");
    inventario.forEach(producto => {
        console.log(`|  ${producto.nombre.padEnd(25)}|   ${producto.cantidad}${blanco.padEnd(10 - producto.cantidad.toString().length)} | ${producto.precio}${blanco.padEnd(15 - producto.precio.toString().length)}|`);
    });
}

// Funcion de baja de productos en inventario. Si la cantidad a vender es mayor a la cantidad en stock,
// se informa que no se puede realizar la venta. Si el producto no se encuentra en el inventario, se informa

function realizarVenta() {
    let nombre = prompt("Ingrese el nombre del producto vendido:").toUpperCase();
    let cantidad = parseInt(prompt("Ingrese la cantidad vendida:"));

    let productoIndex = inventario.findIndex(producto => producto.nombre === nombre);

    if (productoIndex !== -1 && inventario[productoIndex].cantidad >= cantidad) {
        inventario[productoIndex].cantidad -= cantidad;
        console.log(`Venta de ${cantidad} unidades de '${nombre}' realizada correctamente.`);
    } else if (productoIndex == -1){
        console.log("Producto no encontrado en el inventario");
    } else {
        console.log(`La cantidad de ${nombre} es insuficiente para realizar la venta`)
    }
}

// menu principal para elegir la funcion a realizar
function menu() {
    let accion = "";
    while (accion !== "S") {
        accion = prompt("Elija la accion presionando la primer letra cada opcion: \n Alta (A) \n Venta (V) \n Consulta (C) \n Salir (S)").toUpperCase(); 
        switch (accion) {
        case "A":
            agregarProducto(); 
            break
        case "V":
            realizarVenta();
            break
        case "C":
            verInventario();
            break
        case "S":
            break
        default: alert("Opcion incorrecta");
        }
    }
    alert("Gracias! En la Consola podra ver los resultados de sus acciones.")
    verInventario()
}



// Llamadas a las funciones

menu()

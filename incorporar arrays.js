

// tengo pensado añadir un login para que el usuario acceda y que al crear su cuenta también ingrese algunos datos 

function login (usuario, contraseña) {
    this.usuario = usuario;
    this.contraseña = contraseña;
}

//const login1 = new login ((prompt("ingresa tu usuario" )), prompt(("ingresa la contraseña")))

//console.log(login1);

function datosPersonales (nombre, edad, localidad, genero) {
    this.nombre = nombre;
    this.edad   = edad;
    this.localidad  = localidad;
    this.genero = genero;
}

//const datosPersonales1 = new datosPersonales ((prompt("ingresa tu nombre")), parseInt((prompt("cual es tu edad?"))), (prompt("localidad")), (prompt("genero")));

//console.log(datosPersonales1);


class producto {
    constructor(nombre, precio) {
        this.nombre  = nombre;
        this.precio  = parseInt(precio);
    }
    sumaIva() {
        this.precio = this.precio * parseInt(1.21);
    }
}

const producto1 = new producto("Samsung A10", 20999);
const producto2 = new producto("Samsung A11", 22999);
const producto3 = new producto("Samsung A20", 30999);
const producto4 = new producto("Samsung A52", 59999);
const producto5 = new producto("Samsung S21 Ultra", 195999);

producto5.sumaIva();
console.log(producto5);


// La idea de esta función es poder seleccionar un producto en cuestión y luego aplicarle el IVA

function ventaProductos() {

    alert("Elige el producto a comprar seleccionando del 1 al 5");
    let productoElegido = parseInt(prompt("Ingresa un número"));

function seleccionarProducto (){
    /* Acá utilice un switch case con condicionales dentro para que se despliegue el 
       precio del producto el cual vendría con imagen, pero como aún no se como utilizarlo bien con html queda así .  */
   
    switch (productoElegido) {
        case 1 : 
            if (productoElegido == 1) {
                alert("elegiste el " + producto1.nombre);       
            }
            ;
        case 2 : 
            if (productoElegido == 2) {
               alert("elegiste el " + producto2.nombre);
            }
            ;
        case 3 :
            if (productoElegido == 3) {
                alert("elegiste el " + producto3.nombre);
            }
            ;
        case 4 : 
            if (productoElegido == 4) {
                alert("elegiste el " + producto4.nombre);
            }
            ;
        case 5 :
            if (productoElegido == 5) {
                alert("elegiste el " + producto5.nombre);
            } 
            ;
    }
    
}
seleccionarProducto();

function calcularPrecioFinal () {
     // En función de que producto se selecciono utilicé condicionales para luego aplicarle el IVA y obtener el precio final.
    if (productoElegido == 1) {
        alert("El precio final con IVA de " + producto1.nombre + " es " + (producto1.precio * 1.21) );                    
        
    } else if (productoElegido == 2) {
        alert("El precio final con IVA de " + producto2.nombre + " es " + (producto2.precio * 1.21) );

    } else if (productoElegido == 3) {
        alert("El precio final con IVA de " + producto3.nombre + " es " + (producto3.precio * 1.21) );

    } else if (productoElegido == 4) {
        alert("El precio final con IVA de " + producto4.nombre + " es " + (producto4.precio * 1.21) );

    } else if (productoElegido == 5) {
        alert("El precio final con IVA de " + producto5.nombre + " es " + (producto5.precio * 1.21) );
    }  

}
calcularPrecioFinal();

}
ventaProductos();


const productos = []

function produc (nombre, precio) {
    this.nombre = nombre
    this.precio = precio
}

productos.push( new produc("Samsung A10", 20.999) );
productos.push( new produc("Samsung A11", 22.999) );
productos.push( new produc("Samsung A20", 30.999) );
productos.push( new produc("Samsung A52", 59.999) );
productos.push( new produc("Samsung S21 Ultra", 195.999) );

console.log(productos);

productos.sort((a, b) => b.precio - a.precio);
// Acá ordené los precios de mayor a menor del array de objetos que cree 

console.log(productos);

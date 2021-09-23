

// tengo pensado añadir un login para que el usuario acceda y que al crear su cuenta también ingrese algunos datos 

function login (usuario, contraseña, nombre, edad, localidad) {
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.nombre = nombre;
    this.edad   = edad;
    this.localidad  = localidad;
    
}

const login1 = new login ((prompt("ingresa tu usuario" )), prompt(("ingresa la contraseña")), (prompt("ingresa tu nombre")), parseInt((prompt("cual es tu edad?"))), (prompt("localidad")))

console.log(login1);

// La idea de esta función es poder seleccionar un producto en cuestión y luego aplicarle el IVA

function ventaProductos() {

    alert("Elige el producto a comprar seleccionando del 1 al 5")
    alert("Productos a elegir: 1- Samsung A10 = $20.999 2- Samsung A11 = $22.999 3- Samsung A20 = $30.999 4- Samsung A52 = $59.999 5- Samsung S21 Ultra = 195.999");
    
    let productoElegido = parseInt(prompt("Ingresa un número"));

function seleccionarProducto (){
    /* Acá utilice un switch case con condicionales dentro para que se despliegue el 
       precio del producto el cual vendría con imagen, pero como aún no se como utilizarlo bien con html queda así .  */
   
    switch (productoElegido) {
        case 1 : 
            if (productoElegido == 1) {
                alert("elegiste el A10. Precio = $20.999");
                
            }
            ;
        case 2 : 
            if (productoElegido == 2) {
               alert("elegiste el A11. Precio = $22.999");
            }
            ;
        case 3 :
            if (productoElegido == 3) {
                alert("elegiste el A20. Precio = $30.999");
            }
            ;
        case 4 : 
            if (productoElegido == 4) {
                alert("elegiste el A52 Precio = $59.999");
            }
            ;
        case 5 :
            if (productoElegido == 5) {
                alert("elegiste el S21 Ultra Precio = $195.999");
            } 
            ;
    }
    
}
seleccionarProducto();

function calcularPrecioFinal () {
     // En función de que producto se selecciono utilicé condicionales para luego aplicarle el IVA y obtener el precio final.
    if (productoElegido == 1) {
        productoElegido = 21000
        let valorConIva = productoElegido * 21/100;
        alert("El precio final con IVA es " + (valorConIva + productoElegido));
        
    } else if (productoElegido == 2) {
        productoElegido = 22999
        let valorConIva = productoElegido * 21/100;
        alert("El precio final con IVA es " + (valorConIva + productoElegido));

    } else if (productoElegido == 3) {
        productoElegido = 30.999
        let valorConIva = productoElegido * 21/100;
        alert("El precio final con IVA es " + (valorConIva + productoElegido));

    } else if (productoElegido == 4) {
        productoElegido = 59999
        let valorConIva = productoElegido * 21/100;
        alert("El precio final con IVA es " + (valorConIva + productoElegido));

    } else if (productoElegido == 5) {
        productoElegido = 195999
        let valorConIva = productoElegido * 21/100;
        alert("El precio final con IVA es " + (valorConIva + productoElegido));

    }  

}
calcularPrecioFinal();

}
ventaProductos();


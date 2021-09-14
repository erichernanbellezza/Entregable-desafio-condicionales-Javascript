
function ventaProductos() {

        alert("Elige el producto a comprar seleccionando del 1 al 5")
        alert("Productos a elegir: 1- Samsung A10 = $20.999 2- Samsung A11 = $22.999 3- Samsung A20 = $30.999 4- Samsung A52 = $59.999 5- Samsung S21 Ultra = 195.999");
        
        let productoElegido = parseInt(prompt("Ingresa un número"));

    function seleccionarProducto (){
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


const modoOscuro = document.getElementById('botonModoOscuro');
const botonPrecioAplicado = document.getElementById('precioAplicado');
const headerModoOscuro = document.getElementById('headerModoOscuroId');
const cambiarColorBolsa = document.getElementById('toggleBolsa');
const cambiarColorLogo = document.getElementById('toggleLogo');
const cambiarColorCarrito = document.getElementById('carritoDeCompras');
const precioFinal = document.getElementById('sumaTotal');
const abrirCerrarCarrito = document.getElementById('carritoDeCompras');
const selectMarca = document.getElementById('ordenarPorMarca');
const selectPrecio = document.getElementById('ordenarPorPrecio');
const botonBuscar = document.getElementById('botonBuscar');
const ocultarMain = document.getElementById('mainPrincipal');
const mostrarCompra = document.getElementById('compraID');
const precioFinalCompra = document.getElementById('totalCompra')
const ocultarCarritoBolsa = document.getElementById('toggleBolsa');

   
 
    
    //Acá se van añadiendo con un bucle forEach a traves del DOM los productos a la página.

    let carrito = []
    
    const miLocalStorage = window.localStorage;
    
    
    const mostrarProductos = (array) => {
        contenedorProductos.innerHTML = ``
    
        array.forEach( (producto) => {
            const div = document.createElement('div')
            div.classList.add('producto')
            div.innerHTML = `
            <h3 class="nombreCelular">${producto.nombre}</h3>
                <img class="imagenCelular" src="${producto.img}"" alt="">
                <div>
                    <button onclick="agregarAlCarrito(${producto.id})" class="anadirAlCarrito">Añadir</button>
                    <p>$ ${producto.precio}</p> 
                </div>
            `
    
            contenedorProductos.appendChild(div)
        } )
    }
    mostrarProductos(listaProductos);
    
    
    ///// Esta función es para añadir los productos al array de carrito
    
    const agregarAlCarrito = (itemId) => {
        const productoEncarrito = carrito.find( (prod) => prod.id === itemId)
        
        if (productoEncarrito) {
            productoEncarrito.cantidad++
         
        } else {
            const prod = listaProductos.find( (prod) => prod.id === itemId)
    
            carrito.push({
                id: prod.id,
                nombre: prod.nombre,
                precio: prod.precio,
                img: prod.img,
                cantidad: 1
            })
            
        }
    
        console.log(carrito)
    
        actualizarCarrito()
        
        guardarCarritoEnLocalStorage();
        

    }
    
    //// esta función sirve para añadir el innerHTML a los productos del carrito
    
    const actualizarCarrito = () => {
        productosEnCarrito.innerHTML = ""
    
        carrito.forEach((producto) => {
            const div = document.createElement('div')
            div.classList.add('productoEnCarrito')
    
            div.innerHTML = `
            <div class="estilosProductosCarrito" id="productosCarrito">
                <img src="${producto.img}">
                <p class="nombreProductoCarrito">${producto.nombre}</p>
                <p class="precioProductosCarrito">$ ${producto.precio}</p>
                <p class="cantidadCarrito"> ${producto.cantidad} </p>
                <button onclick="eliminarProducto(${producto.id})" class="buttonCantidad">X</button>
            </div>
            <div>
            `
            productosEnCarrito.appendChild(div)

        })

        precioFinal.innerText = carrito.reduce((acc, producto) => acc += producto.precio * producto.cantidad , 0)
        
        
    };
    
    //// Función para eliminar los productos del carrito
    
    const eliminarProducto = (itemId) => {
        const producto = carrito.find((producto) => producto.id === itemId)

        producto.cantidad--
    
        if (producto.cantidad === 0) {
            const index = carrito.indexOf(producto)
            carrito.splice(index, 1)
        }
        
        actualizarCarrito()
       
        guardarCarritoEnLocalStorage();

        
    };
     
    //// acá muestro el carrito ////
    
    $('#toggleBolsa').click( () => {
        $('#carritoDeCompras').slideDown(500)
    })
    
    //// acá se cierra el carrito ////
    
    $('#cerrarCarrito').click ( () => {
        $('#carritoDeCompras').slideUp(500)
    })

    
    
    ///// A partir de acá están las funciones para verificar si hay objetos guardados en el local storage y de existir los renderiza con la función actualizarCarrito, en caso contrario no muestra nada.

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }
    
    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }
    
    cargarCarritoDeLocalStorage();      

    actualizarCarrito();


// Esta función permite ordenar los productos de la página principal según precio o marca    

const filtrar = () => {
    let valorFiltroMarca = selectMarca.value
    let valorFiltroPrecio = selectPrecio.value

    let arrayFiltrado = []

    botonPrecioAplicado.addEventListener('click', () => {
        if (valorFiltroMarca == 'Todos') {
            arrayFiltrado = listaProductos
        } else {
            arrayFiltrado = listaProductos.filter (el => el.marca == selectMarca.value)
        }
    
        if (valorFiltroPrecio == 1) {
            arrayFiltrado = arrayFiltrado.filter( el => el.precio >= 50000)
        } else if (valorFiltroPrecio == 2) {
            arrayFiltrado = arrayFiltrado.filter( el => el.precio >= 70000)
        }
    
        mostrarProductos(arrayFiltrado);
    } )  

}

selectMarca.addEventListener('change', ()=>{
    filtrar();
})
selectPrecio.addEventListener('change', ()=>{
    filtrar();
})


// === buscador ===

const buscador = document.getElementById('inputBuscador')

const buscar = (search) => {
    return listaProductos.filter((prod) => prod.nombre.toLowerCase().includes(search))
}

buscador.addEventListener('input', () => {
    const search = buscador.value.trim().toLowerCase()

    botonBuscar.addEventListener('click', () => { 
        mostrarProductos( buscar(search) )  
    })
    
})

/* Acá se añaden los productos del carrito a la parte de finalizar compra según el array de carrito, se oculta toda la página principal

*/
const buttonComprar = document.getElementById('buttonComprar');

    buttonComprar.addEventListener('click', () => {

        if (carrito.length >= 1) { 
            ocultarMain.classList.toggle('ocultarMain');
            mostrarCompra.classList.toggle('mostrarComprar');
            ocultarCarritoBolsa.classList.toggle('ocultarCarritoBolsa');
            abrirCerrarCarrito.classList.toggle('ocultarCarritoBolsa');
           
            const mostrarProductosFinalizar = () => {
    
                productosFinalizar.innerHTML = ""
    
                carrito.forEach((producto) => {
                    const div = document.createElement('div')
                    div.classList.add('producto_finalizarCompra')
    
                    div.innerHTML = `
                    <div class="producto_finalizarCompra">
                    <img src="${producto.img}" alt="" class="imagenProductoCompra">
                    <p class="nombreProducto_finalizarCompra">${producto.nombre}</p>
                    <p class="precioProducto_finalizarCompra">$${producto.precio}</p>     
                    `
                    productosFinalizar.appendChild(div)
                })
                console.log(mostrarProductosFinalizar);
            };
    
            precioFinalCompra.innerText = carrito.reduce((acc, producto) => acc += producto.precio * producto.cantidad , 0)
    
            console.log(buttonComprar);
            mostrarProductosFinalizar();
        }
        
    });


    // Si se finaliza la compra vuelve el carrito a un array vacío y lo aplica al local storage

    buttonFinalizarCompraEvento = document.getElementById('buttonFinalizarCompraEvento');

    buttonFinalizarCompraEvento.addEventListener('click', () => {
        carrito = []
        console.log(carrito);
        guardarCarritoEnLocalStorage();
    });


    /// Si el carrito está vacío oculta el botón de comprar

   
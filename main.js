const modoOscuro = document.getElementById('botonModoOscuro');
const botonPrecioAplicado = document.getElementById('precioAplicado');
const headerModoOscuro = document.getElementById('headerModoOscuroId');
const cambiarColorBolsa = document.getElementById('toggleBolsa');
const cambiarColorLogo = document.getElementById('toggleLogo');
const cambiarColorCarrito = document.getElementById('carritoDeCompras');
const precioFinal = document.getElementById('sumaTotal');
const abrirCerrarCarrito = document.getElementById('carritoDeCompras');

const miLocalStorage = window.localStorage;


let listaProductos = [
    {id: 1, nombre: "Samsung A01 Core", precio: 15900, img: './imagenes/Celular Galaxy A01 Core-15.999.jpg'},
    {id: 2, nombre: "Samsung A01", precio: 18900, img: './imagenes/Celular Galaxy A01-18999.jpg'},
    {id: 3, nombre: "Samsung A10s", precio: 21900, img: './imagenes/Celular Galaxy A10s-21.999.png'},
    {id: 4, nombre: "Samsung A11", precio: 24900, img: './imagenes/Celular Galaxy A11-24.999.png'},
    {id: 5, nombre: "Samsung A31", precio: 39900, img: './imagenes/Celular Galaxy A31-39999.png'},
    {id: 6, nombre: "Samsung M12", precio: 50900, img: './imagenes/Celular Galaxy M12-35999.png'},
    {id: 7, nombre: "Samsung M12", precio: 50900, img: './imagenes/Celular Galaxy M12-35999.png'},
    {id: 8, nombre: "Samsung M12", precio: 50900, img: './imagenes/Celular Galaxy M12-35999.png'},
    {id: 9, nombre: "Samsung M12", precio: 50900, img: './imagenes/Celular Galaxy M12-35999.png'},
    {id: 10, nombre: "Samsung M12", precio: 50900, img: './imagenes/Celular Galaxy M12-35999.png'},
    {id: 11, nombre: "Samsung M12", precio: 50900, img: './imagenes/Celular Galaxy M12-35999.png'}
]


const carrito = []

    
//Acá se van añadiendo con un bucle forEach a traves del DOM los productos a la página.

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
            <input class="cantidadInputCarrito" type="text" placeholder="${producto.cantidad}">
            <button onclick="eliminarProducto(${producto.id})" class="buttonCantidad">X</button>
        </div>
        <div>
           
        `
        productosEnCarrito.appendChild(div)
    })

    precioFinal.innerText = carrito.reduce((acc, producto) => acc += producto.precio * producto.cantidad , 0)

    guardarCarritoEnLocalStorage();

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


  //
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


// Acá voy a añadir un modo oscuro a la página, voy a cambiar el background principal, el color de la tipografía y el logo de la página.

modoOscuro.addEventListener('click', () => {
    toggleModoOscuro.classList.toggle('fondoOscuro');
    botonPrecioAplicado.classList.toggle('botonAplicarModoOscuro');
    headerModoOscuroId.classList.toggle('modoOscuroHeader');
    cambiarColorCarrito.classList.toggle('modoOscuroCarrito');
    console.log(modoOscuro);
});

function cambiarBotonModoOscuro() {
    let texto = document.getElementById("botonModoOscuro");
    if (texto.innerHTML == "Modo Oscuro") {
      texto.innerHTML = "Modo Claro";
      cambiarColorLogo.src = "./imagenes/logo negro.jpg";
      cambiarColorBolsa.src = "./imagenes/bolsa blanca.jpg";
    } else {
      texto.innerHTML = "Modo Oscuro";
      cambiarColorLogo.src = "./imagenes/logo.jpg";
      cambiarColorBolsa.src = "./imagenes/bolsa negra.jpg";
    }
  }

 
//// acá muestro el carrito ////

const mostrarCarrito = document.getElementById('toggleBolsa');

mostrarCarrito.addEventListener('click', () => {
    abrirCerrarCarrito.classList.toggle('mostrarCarrito');
    console.log(abrirCerrarCarrito);
});

//// acá se cierra el carrito ////

const cerrarCarrito = document.getElementById('cerrarCarrito');

cerrarCarrito.addEventListener('click', () => {
    abrirCerrarCarrito.classList.toggle('mostrarCarrito');
    console.log(abrirCerrarCarrito);
})


/*
    ////// Local Storage
    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

    //Almacenar producto por producto
    for (const producto of carrito) {
        guardarLocal(producto.id, JSON.stringify(producto));
    }
    
    let carritoLS = JSON.parse( localStorage.getItem('guardarLocal') )
    
    if(carritoLS) {
        carrito = carritoLS
    }
*/
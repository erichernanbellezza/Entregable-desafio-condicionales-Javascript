
let listaProductos = [
    {id: 1, nombre: "Samsung A01 Core", precio: 15.999, img: './imagenes/Celular Galaxy A01 Core-15.999.jpg'},
    {id: 2, nombre: "Samsung A01", precio: 18.999, img: './imagenes/Celular Galaxy A01-18999.jpg'},
    {id: 3, nombre: "Samsung A10s", precio: 21.999, img: './imagenes/Celular Galaxy A10s-21.999.png'},
    {id: 4, nombre: "Samsung A11", precio: 24.999, img: './imagenes/Celular Galaxy A11-24.999.png'},
    {id: 5, nombre: "Samsung A31", precio: 39.999, img: './imagenes/Celular Galaxy A31-39999.png'},
    {id: 6, nombre: "Samsung M12", precio: 50.999, img: './imagenes/Celular Galaxy M12-35999.png'}
]
    
//añadiendo a traves del DOM con un bucle los productos

listaProductos.forEach( (producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <h3 class="nombreCelular">${producto.nombre}</h3>
        <img class="imagenCelular" src="${producto.img}"" alt="">
        <div>
            <button class="anadirAlCarrito">Añadir</button>
            <p>$ ${producto.precio}</p> 
        </div>
    `

    contenedorProductos.appendChild(div)
} )



// Acá voy a añadir un modo oscuro a la página, voy a cambiar el background principal, el color de la tipografía y el logo de la página.

const modoOscuro = document.getElementById('botonModoOscuro');
const botonPrecioAplicado = document.getElementById('precioAplicado');
const headerModoOscuro = document.getElementById('headerModoOscuroId')
const cambiarColorBolsa = document.getElementById('toggleBolsa');
const cambiarColorLogo = document.getElementById('toggleLogo');

modoOscuro.addEventListener('click', () => {
    toggleModoOscuro.classList.toggle('fondoOscuro')
    botonPrecioAplicado.classList.toggle('botonAplicarModoOscuro')
    headerModoOscuroId.classList.toggle('modoOscuroHeader')
    //cambiarColorBolsa.src = "./imagenes/bolsa blanca.jpg";
    //cambiarColorLogo.src = "./imagenes/logo negro.jpg";
});


function cambiarBotonModoOscuro() {
    var texto = document.getElementById("botonModoOscuro");
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






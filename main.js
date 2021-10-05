
class creadorProductos {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let producto1 = new creadorProductos("Samsung A01 Core", 15.999);
let producto2 = new creadorProductos("Samsung A01", 18.999);
let producto3 = new creadorProductos("Samsung A10s", 21.999);
let producto4 = new creadorProductos("Samsung A11", 24.999);
let producto5 = new creadorProductos("Samsung A31", 39.999);
let producto6 = new creadorProductos("Samsung M12", 50.999);

const listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6];


//añadiendo a travez del DOM el primer producto

let productos1 = document.createElement("div");
productos1.classList.add('producto');
productos1.innerHTML = `
                <h3 class="nombreCelular">${producto1.nombre}</h3>
                <img class="imagenCelular" src="./imagenes/Celular Galaxy A01 Core-15.999.jpg" alt="">
                <div>
                    <button class="anadirAlCarrito">Añadir</button>
                    <p>$ ${producto1.precio}</p> 
                </div>`;


document.getElementById("productosCreados").appendChild(productos1);


//añadiendo atravez del DOM el segundo producto

let productos2 = document.createElement("div");
productos2.classList.add('producto');
productos2.innerHTML = `
                <h3 class="nombreCelular">${producto2.nombre}</h3>
                <img class="imagenCelular" src="./imagenes/Celular Galaxy A01-18999.jpg" alt="">
                <div>
                    <button class="anadirAlCarrito">Añadir</button>
                    <p>$ ${producto2.precio}</p> 
                </div>`;


document.getElementById("productosCreados").appendChild(productos2);


//añadiendo atravez del DOM el tercer producto

let productos3 = document.createElement("div");
productos3.classList.add('producto');
productos3.innerHTML = `
                <h3 class="nombreCelular">${producto3.nombre}</h3>
                <img class="imagenCelular" src="../imagenes/Celular Galaxy A10s-21.999.png" alt="">
                <div>
                    <button class="anadirAlCarrito">Añadir</button>
                    <p>$ ${producto3.precio}</p> 
                </div>`;


document.getElementById("productosCreados").appendChild(productos3);


//añadiendo atravez del DOM el cuarto producto

let productos4 = document.createElement("div");
productos4.classList.add('producto');
productos4.innerHTML = `
                <h3 class="nombreCelular">${producto4.nombre}</h3>
                <img class="imagenCelular" src="./imagenes/Celular Galaxy A11-24.999.png" alt="">
                <div>
                    <button class="anadirAlCarrito">Añadir</button>
                    <p>$ ${producto4.precio}</p> 
                </div>`;


document.getElementById("productosCreados").appendChild(productos4);


//añadiendo atravez del DOM el quinto producto

let productos5 = document.createElement("div");
productos5.classList.add('producto');
productos5.innerHTML = `
                <h3 class="nombreCelular">${producto5.nombre}</h3>
                <img class="imagenCelular" src="./imagenes/Celular Galaxy A31-39999.png" alt="">
                <div>
                    <button class="anadirAlCarrito">Añadir</button>
                    <p>$ ${producto5.precio}</p> 
                </div>`;


document.getElementById("productosCreados").appendChild(productos5);


//añadiendo atravez del DOM el sexto producto

let productos6 = document.createElement("div");
productos6.classList.add('producto');
productos6.innerHTML = `
                <h3 class="nombreCelular">${producto6.nombre}</h3>
                <img class="imagenCelular" src="./imagenes/Celular Galaxy M12-35999.png" alt="">
                <div>
                    <button class="anadirAlCarrito">Añadir</button>
                    <p>$ ${producto6.precio}</p> 
                </div>`;

document.getElementById("productosCreados").appendChild(productos6);               


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
    if (texto.innerHTML === "Modo Oscuro") {
      texto.innerHTML = "Modo Claro";
      cambiarColorLogo.src = "./imagenes/logo negro.jpg";
      cambiarColorBolsa.src = "./imagenes/bolsa blanca.jpg";
    } else {
      texto.innerHTML = "Modo Oscuro";
      cambiarColorLogo.src = "./imagenes/logo.jpg";
      cambiarColorBolsa.src = "./imagenes/bolsa negra.jpg";
    }
  }






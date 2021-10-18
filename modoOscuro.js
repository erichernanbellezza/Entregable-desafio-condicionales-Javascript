 
 
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
      cambiarColorLogo.src = "./imagenes/logoBlanco.png";
      cambiarColorBolsa.src = "./imagenes/bolsa blanca.jpg";
    } else {
      texto.innerHTML = "Modo Oscuro";
      cambiarColorLogo.src = "./imagenes/logoNegro.png";
      cambiarColorBolsa.src = "./imagenes/bolsa negra.jpg";
    }
  }
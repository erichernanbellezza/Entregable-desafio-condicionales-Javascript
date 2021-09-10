while (true) {
    let numeroIngresado = parseInt(prompt("Ingresa un número"));
    
    if (isNaN(numeroIngresado)) {

        alert("Ingresa un número ,no texto")

    } else if (typeof numeroIngresado == 'number') {
        function calcularIva () {
   
            function calcularIva21 () {
            let valorConIva = numeroIngresado * 21/100;
        
            alert("El iva a pagar es" + " " + valorConIva);
            
            return console.log(valorConIva);
            
        } 
        
        calcularIva21()
          
        }
        calcularIva();
        
        break
        
    }
  
}




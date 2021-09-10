
/*alert ("Aplicación para calcular IVA");


let numeroIngresado = parseInt(prompt("Ingresa el monto para calcular el IVA del 21%"));

if (numeroIngresado === Number) {
    function calcularIva21() {
        let valorConIva = numeroIngresado * 21/100 ;
        console.log(valorConIva);
        alert("El iva es" + " " + valorConIva);
    };
    calcularIva21();
}


function calcularIva10() {
    let numeroIngresado = parseInt(prompt("Ingresa el monto para calcular el IVA del 10%"));
    let valorConIva = numeroIngresado * 10/100 ;
    console.log(valorConIva);
    alert("El iva es" + " " + valorConIva);

    calcularIva10();
}; */


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




//conseguir un numero al azar
let numeroAzar = Math.floor(Math.random()*100 + 1);
console.log(numeroAzar);
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');

//esta accion se va a ejecutar cuando se toque el boton comprobar
function chequear(){
    let numeroIngresado = parseInt(numeroEntrada.value)
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = "Por favor introduce un número valido entre 1 y 100";
        return;
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = "Felicitaciones haz adivinado el número"
        mensaje.style.color = "green"
        numeroEntrada.disabled = true;

    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = "¿¡Más alto! El número es mayor al que dijiste!";
        mensaje.style.color = "red";
    }else{
        mensaje.textContent = "¿¡Más bajo! El número es menor al que dijiste!";
        mensaje.style.color = "blue";
    }
}
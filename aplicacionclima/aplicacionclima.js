let APIKEY = '1cf03690b80df4a77fa8d987a86b310a';
let url = 'https://api.openweathermap.org/data/2.5/weather'

let difKelvin = 273.15
const busqueda = document.getElementById('botonBusqueda');

busqueda.addEventListener('click', ()=>{
    const ciudad = document.getElementById('ciudadEntrada').value;
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${url}?q=${ciudad}&appid=${APIKEY}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    console.log(data)
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const nombreCiudad = data.name;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;
    const humedad = data.main.humidity;
    const icono = data.weather[0].icon;

    const ciudadTitutlo = document.createElement('h2');
    ciudadTitutlo.textContent = `${nombreCiudad}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}°C`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es: ${humedad}%`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripcion meteorológica es: ${descripcion}`;

    divDatosClima.appendChild(ciudadTitutlo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(descripcionInfo)
}




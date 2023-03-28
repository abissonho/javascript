function converter() {
var celsius = window.prompt('Digite uma temperatura em °C(Celsius)')
var kelvin = Number(celsius) + 273.15
var fahrenheit = (Number(celsius) * 1.8) + 32
var res = window.document.getElementById('res')

res.innerHTML = ''
res.innerHTML += `<h2>A Temperatura de ${celsius}°C, Corresponde a...</h2>`
res.innerHTML += `<p>${kelvin}°K (Kelvin)</p>`
res.innerHTML += `<p>${fahrenheit}°F (Fahrenheit)</p>`

}
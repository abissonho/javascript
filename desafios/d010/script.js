function calcular() {
    var a = window.prompt('Qual o valor de a??')
    var b = window.prompt('Qual o valor de b??')
    var c = window.prompt('Qual o vlaor de c??')
    var res = document.getElementById('res')
    var formula = b**2 - 4 * a * c

    res.innerHTML = ''
    res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>Δ = ${b}² -4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p>O valor cálculado foi <strong>Δ = ${formula}</strong></p>`
    
}
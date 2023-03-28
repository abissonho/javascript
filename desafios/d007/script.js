var dolar = window.prompt('Me diga qual a cotação do dólar atualmente!')
function converter() {
    let res = window.document.getElementById('res')
    var real = window.prompt('Quantos R$ você tem na carteira')
    var Rc = Number(real) / Number(dolar)

    res.innerHTML = ''
    res.innerHTML = `<h1>${real} reais corresponde a....</h1>`
    res.innerHTML = `<p>Você tem ${Rc} dólares</p>`
}




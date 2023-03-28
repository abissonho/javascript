function calcular() {
    let produto = window.prompt('Qual o produto que você está comprando?')
    let preco = window.prompt(`Qual é o preço de ${produto}??`)
    let res = document.getElementById('res')
    var desconto = Math.round(((10 / 100) * Number(preco)))
    var VTotal = preco - desconto

    res.innerHTML = ''
    res.innerHTML += `<h2>Calculando desconto de 10% para ${produto}</h2>`
    res.innerHTML += `<p>O valor original era de R$${preco}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar R$${desconto} de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você ira pagar R$${VTotal} no produto ${produto}</p>`
}
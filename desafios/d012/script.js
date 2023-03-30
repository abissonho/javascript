function verificar(){
    let preçoAnterior = window.prompt('Qual o preço anterior do produto?')
    let preçoAtual = window.prompt('Qual o preço atual do produto?')
    let Res = window.document.getElementById('Res')

    if(Number(preçoAnterior) > Number(preçoAtual)){
        let diferenca = Number(preçoAnterior) - Number(preçoAtual)
        let porcentagemDecimal = diferenca / Number(preçoAnterior) * 100
        let porcentagem = Math.abs(porcentagemDecimal).toFixed(2)

        Res.innerHTML = ''
        Res.innerHTML += `<p>O produto Custava R$${preçoAnterior} e agora custa R$${preçoAtual}.</p>`
        Res.innerHTML += `<p>Hoje o produto está custando mais Barato.</p>`
        Res.innerHTML += `<p>O preço caiu R$${diferenca} em relação ao preço anterior.</p>`
        Res.innerHTML += `<p>Uma variação de ${porcentagem}% pra baixo.</p>`
    }
}
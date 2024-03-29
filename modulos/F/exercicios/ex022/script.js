let num = window.document.querySelector('input#num')
let lista = window.document.querySelector('select#lista')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adc(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) //Adicionando Valor No Vetor/Array
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor Inválido ou Já Encontrado na Lista')
    }
    num.value = ''
    num.focus
}

function finalizar() {
    if (valores.length == 0){
        window.alert('Adicione Valores para finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] <  menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao Todo Temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O Maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O Menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
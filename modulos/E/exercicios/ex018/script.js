function contar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passos')
    var res = window.document.getElementById('resultado')

   if(inicio.value == 0 || fim.value == 0 || passo .value == 0){
        res.innerHTML = `<p>Faltam dados!</p>`
   } else {
        res.innerHTML = `<p>Contando:</p>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Inválido! Considerando Passo 1')
            p = 1
        }
        if (i < f){ //Contagem Crescente
           for (let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
            } 
        } else{ //Contagem regressiva
            for(let c = i; c >= f; c -= p)
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
   }
}
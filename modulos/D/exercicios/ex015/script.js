function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) >= ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!!')
    } 
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var fotos = window.document.getElementsByClassName('foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                fotos.src = '/imagens/criança-m.png'
            } else if(idade < 21){
                //jovem
                
            } else if(idade < 50){
                //adulto
            } else{
                //idoso
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
            } else if(idade < 21){
                //jovem
                img.src = './imagens/jovem-m.png'
            } else if(idade < 50){
                //adulto
            } else{
                //idoso
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
    }

}
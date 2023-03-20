function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os daos e tente novamente!')
    } else{
        var fem = document.getElementById('fem')
        var mas = document.getElementById('mas')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(mas.checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './img/crianca-m.png')
            }else if(idade < 21){
                img.setAttribute('src', './img/jovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src', './img/adulto-m.png')
            }else{
                img.setAttribute('src', './img/idoso-m.png')
            }
        } else if(fem.checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './img/crianca-f.png')
            }else if(idade < 21){
                img.setAttribute('src', './img/jovem-f.png')
            }else if(idade < 50){
                img.setAttribute('src', './img/adulto-f.png')
            }else{
                img.setAttribute('src', './img/idosa-f.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${gênero} com idade ${idade} anos</p>`
        res.appendChild(img)
    }
    

}
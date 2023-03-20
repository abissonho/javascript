function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = './imagens/foto-manha.png'
        document.body.style.background = '#617F93'
    } else if( hora >= 12 && hora <= 18){
        //boa tarde
        img.src = './imagens/foto-tarde.png'
        document.body.style.background = '#D94D1A   '
    } else {
        //boa noite
        img.src = './imagens/foto-noite.png'
        document.body.style.background = '#111426'
    }
}

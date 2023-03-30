function notas(){
    let nome = window.prompt('Qual o Nome do(a) Aluno(a)?')
    let nota1 = window.prompt(`Qual foi a primeira nota de ${nome}:`)
    let nota2 = window.prompt(`Qual foi a segunda nota de ${nome}:`)
    let media = ((Number(nota1) + Number(nota2)) / 2)
    let res = window.document.getElementById('res')
    
    if (media < 3 && media < 30){
        res.innerHTML = ''
        res.innerHTML += `<h1>Analisando a situação de ${nome}</h1>`
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}</strong></p>`
        res.innerHTML += `<p>Com média abaixo de 3.0, O Aluno está Reprovado.</p>`
        
    } else if(media >= 3 && media <= 6 || media >= 30 && media <= 60) {
        res.innerHTML = ''
        res.innerHTML += `<h1>Analisando a situação de ${nome}</h1>`
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}</strong></p>`
        res.innerHTML += `<p>Com média entre 3.0 e 6.0, O Aluno está em Recuperação.</p>`

    } else{
        res.innerHTML = ''
        res.innerHTML += `<h1>Analisando a situação de ${nome}</h1>`
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}</strong></p>`
        res.innerHTML += `<p>Com média acima de 6.0, O Aluno está Aprovado.</p>`

    }
}
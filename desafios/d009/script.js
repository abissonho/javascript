function reajustar(){
    let nome = window.prompt('Qual o nome do funcionário???')
    let salario = window.prompt(`Qual é o salário de ${nome}???`)
    let porcentagem = window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem???`)
    let res = window.document.getElementById('res')
    let aumento = Math.round(( Number(porcentagem) / 100) * Number(salario))
    let novoSalario = Number(salario) + aumento

    res.innerHTML = ''
    res.innerHTML += `<p>O salário de ${nome} antes do reajuste era R$ ${salario}</p>`
    res.innerHTML += `<p>Com o reajuste de ${porcentagem}%, o aumento será de R$ ${aumento}</p>`
    res.innerHTML += `<p>O novo salário de ${nome} será R$ ${novoSalario}</p>`
}
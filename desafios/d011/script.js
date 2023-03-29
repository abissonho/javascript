function Verificar(){
    var ano = window.prompt('Qual é o ano que você quer verificar?')
    var res = window.document.getElementById('res')
    if (Number(ano) % 4 === 0 && (Number(ano) % 100 !== 0 || Number(ano) % 400 === 0)) {
        res.innerHTML = `${ano} é bissexto`
      } else {
        res.innerHTML = `${ano} não é bissexto`
      }
    }

function calcular(){
    let num = window.document.getElementById('numero')
    let tab = window.document.getElementById('seltab')

    if(num.value == 0){
        window.alert('Por Favor, Digite um número!')
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}
let num = [1, 2, 3] 
//Array são variaveis compostas, ex: let num = [ , , ] <- Obrigatorio
num.sort() //Serve para embaralhar

console.log(`A nossa array é ${num}`)

num[3] = 6
console.log(`2 teste de array ${num}`)

num.push(4)
num.push(8)
console.log(`3 teste de array ${num}`)

console.log(`o terceiro teste tem ${num.length} elementos`)

let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor 6 está na posição ${pos}`)
}

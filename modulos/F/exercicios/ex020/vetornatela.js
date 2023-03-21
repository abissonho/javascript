let valores = [8, 1, 2, 34, 5, 6, 7, 9, 0 , 0]
valores.sort()
//Esse código serve pra mostrar a posição dos elementos da array acima

/*
for (let pos = 0; pos<valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
} 
*/

//código simplificado

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
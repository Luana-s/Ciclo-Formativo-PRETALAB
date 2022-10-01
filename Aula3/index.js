const valores=[0,1,2,3,4]
//valores.copyWithin(1,2)
//console.log(valores)

function verificaPar(num){
    if(num % 2 ==0){
        return num
    }
    

}
console.log(valores.filter(verificaPar))

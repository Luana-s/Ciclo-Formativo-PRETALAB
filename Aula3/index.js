const valores=[0,1,2,3]
valores.copyWithin(1,2)
console.log(valores)

function verificaPar(num){
    if(num % 2 ==0){
        return num
    }
    

}
const num=2

console.log(valores.filter(verificaPar))

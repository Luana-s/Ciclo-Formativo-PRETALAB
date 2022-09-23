const pessoa={
    nome:"Luana",
    idade:21,
    endereco:{
        estado:'AL'

    }

}
console.log(pessoa.endereco.estado)


const alunas=[
    {
        nome:"Vera",
        nota:6
    },
    {
        nome:'Amanda',
        nota:7
    },
    {
        nome:"Maria",
        nota:8,
        curso:"preta lab"

    },


]
alunas.filter((alunas)=>{
    if(alunas.nota >=7){
        console.log(alunas.nome +' foi Aprovada')

    }else{
        console.log(alunas.nome + ' foi Reprovada')
        
    }


})

const alunas=[
    {aluno: "Maria",nota:10},
    {aluno: "João",nota:8},
    {aluno: "José",nota:9},
    {aluno: "Vera",nota:10},

];
let index=0;
let somaDasNotas=0;
let totalAlunas=alunas.length;

do{
    somaDasNotas += alunas[index].nota;
    index ++;

    
} while(index <totalAlunas);
let media =somaDasNotas/totalAlunas;
console.log(media);


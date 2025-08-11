import prompt from 'prompt-sync'
const ler = prompt();

console.log("== Média Final ==");

console.log("Informe a primeira nota:");
let n1= Number(ler());

console.log("Informe a segunda nota:");
let n2= Number(ler());

console.log("Informe a terceira nota:");
let n3= Number(ler());

let media = (n1 + n2 + n3) /3;

let situacao = '';

if(media >= 6){
    situacao = ("Aprovado")
}

else if(media<6 && media>4){
    situacao = ("Recuperação")
}

else{
    situacao = ("Reprovado")
}

console.log(`
Média: ${media}
Situação: ${situacao}
`);
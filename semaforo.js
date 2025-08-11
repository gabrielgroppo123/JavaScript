import prompt from 'prompt-sync'
const ler = prompt();

console.log('Semáforo');

console.log('Qual cor está o semáforo: ');
let cor= String(ler());
let situacao = '';
if(cor == 'verde'){
    situacao = 'Você deve: andar.'
}

else if(cor == 'amarelo'){
    situacao = 'Você deve: esperar.'
}

else if(cor == 'vermelho'){
    situacao = 'Você deve: parar.'
}

console.log(situacao);
import prompt from 'prompt-sync'
const ler = prompt();

console.log('Medidor de febre');

console.log('Insira sua temperatura: ');
let temp= Number(ler());

if(temp > 36,5){
    console.log('Você está com febre.')
}

else{
    console.log('Você não está com febre.')
}
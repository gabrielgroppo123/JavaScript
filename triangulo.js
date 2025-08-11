import prompt from "prompt-sync"
const ler = prompt ();

console.log("Triângulos")

console.log("Informe o tamanho do triângulo:");
let tamanho= Number(ler());

for(let i = 1; i <= tamanho; i++) {

    for(let j = 1; j <= i ; j++){
        process.stdout.write("* ")
    }
    console.log()
}
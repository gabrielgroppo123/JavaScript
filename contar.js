import prompt from "prompt-sync"
const ler = prompt();

console.log("Contar intervalos")

console.log("Informe o primeiro numero:");
let n1= Number(ler());

console.log("Informe o segundo numero:");
let n2= Number(ler());

if (n1 < n2){
    for(let i = n1; i <= n2; i++) {
        console.log(i)
    }
}

else if (n1 > n2){
     for(let i = n1; i >= n2; i--) {
        console.log(i)
    }
}

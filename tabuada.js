import prompt from "prompt-sync"
const ler = prompt ();

console.log("Tabuada")

console.log("Informe o número:");
let n1= Number(ler());

console.log("Informe até onde deseja a tabuada:");
let n2= Number(ler());

for(let i = 0; i <= n2; i++) {
    console.log(`${n1} x ${i} = ${n1*i}`);
}
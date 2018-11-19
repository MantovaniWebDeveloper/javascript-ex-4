//chiedo all'utente un numero da 1 a 5 e se pari o Dispari
var pariDispariUtente = prompt("Pari o Dispari ?");
console.log(pariDispariUtente);

//generiamo numero random per il pc da 1 a 5
//passando tra gli argomenti 2 valori
function numeroRandom(numeroMin, numeroMax){
  var numRandomRisultante = Math.floor(Math.random() * (numeroMax - numeroMin + 1) - numeroMin);
  return numRandomRisultante;
}
//lancio la funzione per l'user
var randomUser = numeroRandom(1,6);
//lancio la funzione per la cpu
var randomCpuPariDispari = numeroRandom(0,1);

if (randomCpuPariDispari == 0) {
  randomCpuPariDispari = "pari"
}
else {
  randomCpuPariDispari = "dispari"
}
var randomCpu = numeroRandom(1,6);

console.log("numero random user: " + randomUser);
console.log("pari o dispari cpu: " + randomCpuPariDispari);
console.log("numero random cpu: " + randomCpu);

function sommaNumeri (numeroUtente, numeroCPU) {
   var somma = numeroUtente + numeroCPU;
   return somma;
}

var risultatoSomma = sommaNumeri(randomUser,randomCpu);
console.log("risultato somma: " + risultatoSomma);

//chiedo all'utente un numero da 1 a 5
var numeroUtente = parseInt(prompt("inserisca un numero da 1 a 5"));
console.log(numeroUtente);

//generiamo numero random per il pc da 1 a 5
//passando tra gli argomenti 2 valori
function numeroRandom(numeroMin, numeroMax){
  var numRandomRisultante = Math.floor(Math.random() * (numeroMax - numeroMin + 1) - numeroMin);
  return numRandomRisultante;
}

//lancio la funzione per la cpu
var randomCpu = numeroRandom(1,6);
console.log(randomCpu);

if (numeroUtente > randomCpu) {
  console.log("Utente hai vitnto");
}
else if (numeroUtente == randomCpu) {
  console.log("pareggio");
}
else {
  console.log("CPU VINCE");
}

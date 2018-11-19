//chiedo all'utente una parola
var parolaUtente = prompt("Inserisci la parola");

console.log("Stringa ricevuta dall'utente: " + parolaUtente)

//creo una funzione per controllare la parola
function controlloPalindromo(parolaUtente) {
  //setto una variabile in modalita false da cambiare in caso di
  //parola palindroma
  var palindroma = false;
  var parolaUtenteReverse = parolaUtente.reverse();
  console.log("parola al rovescio: " + parolaUtenteReverse);

  //faccio un confronto tra la versione della parola normale
  // e la stessa parola letta ne senso opposto
  //ritorno il risultato
}
 //richiamo la funzione in variabile
 var risultato = controlloPalindromo(parolaUtente);
 //la stampo su console
console.log(risultato);

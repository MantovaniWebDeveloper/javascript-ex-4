//chiedo all'utente una parola
var parolaUtente = prompt("Inserisci la parola");

console.log("Stringa ricevuta dall'utente: " + parolaUtente)


//creo una funzione per controllare la parola
function controlloPalindromo(parolaUtente) {
  //setto una variabile in modalita false da cambiare in caso di
  //parola palindroma
  var palindromo = false;
  console.log(parolaUtente.length)
  var parolaRovesciata = "";

  for (var i = parolaUtente.length -1; i >= 0 ; i--) {
    console.log(parolaUtente[i]);
    parolaRovesciata = parolaRovesciata + parolaUtente[i];
  }

  console.log(parolaRovesciata);
  //faccio un confronto tra la versione della parola normale
  // e la stessa parola letta ne senso opposto
  //ritorno il risultato
  if (parolaUtente == parolaRovesciata) {
    palindromo = true;
  }
  else {
    palindromo = false;
  }

  return palindromo
}
 //richiamo la funzione in variabile
 var risultato = controlloPalindromo(parolaUtente);
 //la stampo su console
 console.log(risultato);

/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function inLett(arr) {

  const firstLett = []

  for (let i = 0; i < arr.length; i++) {
    const thisElement = arr[i];

    firstLett.push(thisElement.charAt(0))

  }

  return firstLett;
}


// Invoca la funzione qui e stampa il risultato in console
const firstLetter = inLett(names);
console.log(firstLetter);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
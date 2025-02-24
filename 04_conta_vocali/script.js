/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numVoc(str) {

  let count = 0;
  const voc = ['a', 'e', 'i', 'o', 'u'];
  const foundVowels = [];
  for (let i = 0; i < str.length; i++) {
    const thisChar = str[i];

    if (voc.includes(thisChar)) {
      count++;
      foundVowels.push(thisChar);
    }

  }
  return [count, foundVowels];

}


// Invoca la funzione qui e stampa il risultato in console
const vocNumb = numVoc(word);
console.log(vocNumb, word);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
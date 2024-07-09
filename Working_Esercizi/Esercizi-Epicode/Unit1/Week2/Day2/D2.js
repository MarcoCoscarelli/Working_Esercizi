/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('---ESERCIZIO 1---')

let num1 = 14;
let num2 = 15;
 if (num1<num2){
  console.log('Il numero maggiore è ' + num2);
}
  else if (num1>num2){
    console.log ('Il numero maggiore è ' + num1);
}
    
  else if (num1 = num2)
  {
    console.log('I numeri sono uguali.')
  }
 
  

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('---ESERCIZIO 2---')
let verinum = 12;
if (verinum !==5){
  console.log('Il numero è diverso da 5');
}  else {
    console.log( 'Il numero è uguale a 5');
  }



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('---ESERCIZIO 3---')
let div5num = 15;
if(div5num % 5 === 0){
  console.log('Il numero è divisibile per 5');
} else {
  console.log('Il numero non è divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('---ESERCIZIO 4---')
let num3 = 12;
let num4 = 20;

if (num3 === 8) {
  console.log("Il primo numero è 8");
} else if (num4 === 8) {
  console.log("Il secondo numero è 8");
} else if (num3 + num4 === 8) {
  console.log("La somma dei due numeri è 8");
} else if (num3 - num4 === 8) {
  console.log("La sottrazione del secondo numero dal primo è 8");
} else if (num4 - num3 === 8) {
  console.log("La sottrazione del primo numero dal secondo è 8");
} else {
  console.log("Nessuna delle condizioni è soddisfatta");
}

  
   



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('---ESERCIZIO 5---')

  let totalShoppingCart = 50;
  const costoSpedizione = 10;
  let checkout;
  if (totalShoppingCart > 50 ) {
    checkout = totalShoppingCart;
    console.log('Spedizione gratuita');
  } else {
    checkout = totalShoppingCart + costoSpedizione;
    console.log('Carrello inferiore a 50, costo spedizione 10') 
  }
  console.log('Carrello:' + checkout)


 

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('---ESERCIZIO 6---')

totalShoppingCart = totalShoppingCart * 0.80;

if (totalShoppingCart > 50 ) {
  checkout = totalShoppingCart;
  console.log('Spedizione gratuita');
} else {
  checkout = totalShoppingCart + costoSpedizione;
  console.log('Carrello inferiore a 50, costo spedizione 10') 
}
console.log('Carrello:' + checkout)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('---ESERCIZIO 7---')              
let numero1 = 13;
let numero2 = 56;
let numero3 = 27;                           

if (numero1 >= numero2 && numero1 >= numero3){
  if (numero2>= numero3) { 
    console.log(numero1, numero2, numero3);
} 
else{
  console.log(numero1, numero3, numero2);}
} else if (numero2>numero1 && numero2>numero3){
  if (numero1>numero3){

  }
}

  





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('---ESERCIZIO 8---') 

let numeric = 15;
if(typeof numeric === 'numero' ){
  console.log('è un numero');

} else {
  console.log('Non è un numero');
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('---ESERCIZIO 9---')
let num7 = 20;
if (num7 % 2 === 0) {
console.log('il numero è pari')

} else {
  console.log('il numero è dispari')
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
 
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('---ESERCIZIO 10---')
let val = 7
if (val < 5) {
    console.log("Meno di 10");
  } else if (val < 10) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/


const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('---ESERCIZIO 11---')
me.city = 'Roma';
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('---ESERCIZIO 13---')
me.skills.lenght = me.skills.lenght -1
console.log(me);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('---ESERCIZIO 14---')
const arr =[];

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
arr[5] = 6;
arr[6] = 7;
arr[7] = 8;
arr[8] = 9;
arr[9] = 10;
console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

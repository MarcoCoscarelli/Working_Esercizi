/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let domanda;
domanda = 'Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.';
console.log (domanda);
let stringa;
stringa = 'stringa, indica caratteri e si identifica con apici singoli o doppi';
console.log (stringa);
let numerico;
numerico= 'numerico, indica numeri, nessuna distinzione tra intero e decimale';
console.log (numerico);
let booleano;
booleano = 'booleano ammette due valori true o false';
console.log (booleano);


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let nome;
nome= 'come ti chiami?';
console.log (nome);
let myName;
myName = 'Marco';
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let domanda2 = 'Somma dei numeri 12 e 20 ';
console.log (domanda2);
let numeber1 = 12;
let numeber2 = 20;
let add1 = numeber1 + numeber2;
console.log( add1);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let domanda3 = 'quanto vale x?';
console.log (domanda3);
let x = 12;
console.log (x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 myName = 'il tuo cognome';
 console.log (myName);
 let costante1 = "assegna un valore ad una costante e dimostra successivamente l'impossibilita di riassegnarne un valore"
 console.log (costante1);
 const prova1 = 20;
 console.log (prova1);
 /* prova1 = 30; /*



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let domanda4 = 'sottrai a 4 il valore di x';
console.log (domanda4);
let sub1 = 4 - x;
console.log (sub1);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let domanda5 = 'i nomi john e John sono uguali?'
console.log (domanda5);
let name1 = 'john';
let name2 = 'John';
const verify1 = name1 !== name2 ? 'name1 è diverso da name2' : 'name1 è identico a name2';
console.log (verify1);
let domanda6 = 'verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase';
console.log(domanda6);
let verify2 = name1.toLowerCase() === name2.toLowerCase();
console.log(verify2);

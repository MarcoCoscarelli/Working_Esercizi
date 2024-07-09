/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('*-------Esercizio 1-------');

function area(l1, l2) {
    return l1 * l2;

}
let l1 = 10;
let l2 = 7;

console.log('Area del rettangolo :', area(l1, l2));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*-------Esercizio 2-------')

function crazySum(n1, n2) {
    if (n1 === n2) {
        return (n1 + n2) * 3;
    } else {
        return n1 + n2;
    }
}
let n1 = 8;
let n2 = 8;
console.log('Risultato', crazySum(n1, n2));




/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*-------Esercizio 3-------')

function crazyDiff(numero) {

    let differenzaAssoluta = Math.abs(numero - 19);


    if (numero > 19) {

    }


    return differenzaAssoluta;
}


let numero1 = 50;
let numero2 = 70;

let risultato1 = crazyDiff(numero1);
console.log(`Per il numero ${numero1}, la crazyDiff è: ${risultato1}`);

let risultato2 = crazyDiff(numero2);
console.log(`Per il numero ${numero2}, la crazyDiff è: ${risultato2}`);




/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*-------Esercizio 4-------')

function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true;
    } else {
        return false;
    }
}
let n = 80;
console.log('Check boundary', boundary(n));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*-------Esercizio 5-------')

function epify(string) {

    if (string.startsWith("EPICODE")) {
        return string;



    } else {
        return 'EPICODE' + string;
    }
}


console.log(epify("JavaScript"));
console.log(epify("EPICODE Python"));
console.log(epify("EPICODE React"));



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve consolelare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*-------Esercizio 6-------')

function check3and7(ncheck) {
    return ncheck > 0 && (ncheck % 3 === 0 || ncheck % 7 === 0) ? true : false;
}
let ncheck = 3;
console.log(check3and7(n));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*-------Esercizio 7-------')


    // Suddivide la stringa in un array di caratteri, inverte l'array e poi lo riunisce in una stringa
    //return stringa.split('').reverse().join('');

function reverseString(stringa) {
    let reversedString = '';
    // Itera dalla fine alla inizio della stringa e costruisce la stringa invertita
    for (let i = stringa.length - 1; i >= 0; i--) 
        reversedString += stringa[i];
    return reversedString; 
}
   
    console.log(reverseString('epicode'));




/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*-------Esercizio 8-------')

function upperFirst(stringa) { //dichiaro la funzione
    
    let parole = stringa.split(' '); //splitto gli spazi della stringa

    
    for (let i = 0; i < parole.length; i++) {
        
        parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1),toLowerCase(); //taglio ogni parola eliminando il primo carattere
    }

    
    return parole.join(' ');
}

console.log(upperFirst('JAvaSCript è DIAboLico'))
console.log(upperFirst("ciao come stai")); 
console.log(upperFirst("Javascript è potente")); 

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*-------Esercizio 9-------')

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*-------Esercizio 10-------')
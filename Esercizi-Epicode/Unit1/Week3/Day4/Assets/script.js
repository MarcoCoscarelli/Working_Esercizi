document.addEventListener('DOMContentLoaded', (event) => {

    //Seleziono Gli Elementi Del DOM e Ne Inizializzo Le Variaili

    const board = document.getElementById('board');
    const drawButton = document.getElementById('draw-button');
    const resetButton = document.getElementById('reset-button');
    const drawnNumbersContainer = document.getElementById('drawn-numbers');
    const generateCardsButton = document.getElementById('generate-cards-button');
    const playerCardsContainer = document.getElementById('player-cards');
    const numCardsInput = document.getElementById('num-cards');
    let drawnNumbers = [];
    let playerCards = [];

    // Croe IL Tabellone Da Novanta Celle Numerate
    for (let i = 1; i <= 90; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = i;
        cell.id = `cell-${i}`; //id univoco dove i è numero della cella
        board.appendChild(cell); //aggiungo le celle al contenitore board
    }

    // Funzione per estrarre un numero tra i novanta
    drawButton.addEventListener('click', () => {
        if (drawnNumbers.length >= 90) {
            alert("Tutti i numeri sono stati estratti!");
            return;
        }

        let number;
        do {
            number = Math.floor(Math.random() * 90) + 1;
        } while (drawnNumbers.includes(number)); //viene estratto un numero da 1 a 90 che non è stato ancora estratto

        drawnNumbers.push(number);
        document.getElementById(`cell-${number}`).classList.add('highlight'); //Il numero estratto viene aggiunto all'array drawnNumbers e la cella corrispondente sul tabellone 
        highlightPlayerCards(number); //evidenzio il numero sulle cartelle dei giocatori
        updateDrawnNumbers(); //aggiorna l'elenco dei numeri estratti visualizzati nell'elemento 
    });

    // Reset Del Gioco
    resetButton.addEventListener('click', () => {
        drawnNumbers = [];
        document.querySelectorAll('.cell').forEach(cell => {
            cell.classList.remove('highlight'); // quando il pulsante viene cliccato tutti i numeri estratti vengono azzerati
        });
        drawnNumbersContainer.textContent = '';
        playerCardsContainer.innerHTML = ''; //svuotamento elementi
        playerCards = [];
    });

    // Mostra Numeri Estratti
    function updateDrawnNumbers() {
        drawnNumbersContainer.textContent = `Numeri estratti: ${drawnNumbers.join(', ')}`;
    }

    // Genero Cartelle Del Giocatore
    generateCardsButton.addEventListener('click', () => {   //aggiunge un event listener al pulsante Genera Cartelle


        const numCards = parseInt(numCardsInput.value);   //Quando il pulsante viene cliccato, viene letto il numero di cartelle da generare. 
        playerCardsContainer.innerHTML = '';    //svuota il contenitore delle cartelle dei giocatori
        playerCards = [];

        for (let i = 0; i < numCards; i++) {
            const card = createCard();   //serve per generare il numero giusto di cartelle
            playerCards.push(card);
            playerCardsContainer.appendChild(card.element);
        }
    });

    function createCard() {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';

        const numbers = generateUniqueRandomNumbers(15, 1, 90);  //Genera 15 numeri unici e casuali compresi tra 1 e 90 utilizzando la funzione (questa me la sono andata a cercare su google)
        const cells = numbers.map(number => {
            const cell = document.createElement('div'); //per ciascun numero generato crea una cella e l aggiunge all elemento
            cell.className = 'cell';
            cell.textContent = number;
            cell.id = `card-cell-${number}`;
            cardElement.appendChild(cell);
            return cell;
        });

        return { element: cardElement, numbers: numbers };
    }

    // Generazioni Numeri Casuali
    function generateUniqueRandomNumbers(count, min, max) {  //Genera 15 numeri unici e casuali compresi tra 1 e 90 utilizzando la funzione (questa me la sono andata a cercare su google)
        const numbers = [];
        while (numbers.length < count) {
            const number = Math.floor(Math.random() * (max - min + 1)) + min;   //Per ogni cartella del giocatore (card), controlla se il numero estratto (number) è incluso nell'array card.numbers
            if (!numbers.includes(number)) {   
                numbers.push(number);
            }
        }
        return numbers;
    }

    // Evidenzio i Numeri Delle Cartelle 
    function highlightPlayerCards(number) { //questa funzione evidenzia il numero estratto sulla cartella del giocatore
        playerCards.forEach(card => {
            if (card.numbers.includes(number)) {   //Se il numro è incluso, lo aggiunge la classe highlight alla cella della cartella corrispondente
                card.element.querySelector(`#card-cell-${number}`).classList.add('highlight');
            }
        });
        
    }
});


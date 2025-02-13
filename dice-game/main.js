/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo. */

// 1 - Genero due variabili, per il giocatore e per il computer,  che conterrano all'interno dei numeri randomici da 1 a 6

let firstNumber = Math.floor(Math.random()* 6) +1;
let secondNumber = Math.floor(Math.random()* 6) +1;
console.log(firstNumber);

// 2 - Adesso creo una condizione per stabilire chi ha vinto e chi ha perso in base al numero che è uscito

if (firstNumber > secondNumber){
    alert(`Hai vinto! ${firstNumber} è maggiore di ${secondNumber}`);

} 
else if(firstNumber < secondNumber){
    alert(`Purtroppo hai perso. ${firstNumber} è minore di ${secondNumber}`);
    
}
else {
    alert(`Nessuno di voi ha vinto. ${firstNumber} e ${secondNumber} sono uguali`)
}
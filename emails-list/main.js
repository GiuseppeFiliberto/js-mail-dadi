/* Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */


// 1 - la prima cosa che la traccia chiede è quella di creare una lista di email di invitati, quindi procediamo nel creare una lista tramite un un array

const emailsInvited = ["christopher.nolan@gmail.com", "lino.banfi@gmail.com", "gerry.scotti@gmail.com", "donald.trump@gmail.com", "shrek@gmail.com"]

// 2 - dobbiamo chiedere all'utente per controllare se è invitato oppure no, quindi dichiariamo una variabile che avrà come valore il risultato prodotto (un valore booleano che sarà true se è invitato o false se non è invitato)

let canAcces 
const emailToCheck = prompt("Scrivi la tua mail per verificare se sei invitato")

// 3 - adesso controlliamo se la mail dell'utente è tra quelle degli invitati creado un ciclo for 

for (let index = 0; index < emailsInvited.length; index++){

    const mailSelector =  emailsInvited[index];
    console.log(mailSelector);

    if (mailSelector === emailToCheck) {
        canAcces = true;
        alert ("Complimenti, sei stato invitato e puoi accedere alla festa")
        console.log(canAcces);
        break;
        
    } 
}

if (canAcces){
    alert ("Complimenti, sei stato invitato e puoi accedere alla festa")
} else{
    alert ("Mi dispiace, non sei stato invitato")

}
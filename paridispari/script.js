// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// CREO VARIABILI PER STAMPARE IN HTML
const choiceCont = document.getElementById("pari-dispari");
const userNumCont = document.getElementById("num-user");
const randNumCont = document.getElementById("num-rand");
const sommaCount = document.getElementById("somma");
const risultatoCount = document.getElementById("risultato");

//L'UTENTE SCEGLIE PARI O DISPARI
const userChoice =prompt("inserisci PARI  o DISPARI");
console.log(userChoice);
choiceCont.innerHTML=`PARI o DISPARI ?: ${userChoice}`

// L'UTENTE SCEGLIE UN NUMERO DA 1 A 5
const userNum =parseInt(prompt("inserisci un numero da 1 a 5")) ;
console.log("numero inserito",userNum);
userNumCont.innerHTML=`Inserisci un numero da 1 a 5: ${userNum}`;

// GENERO CASUALMENTE UN NUMERO DA 1 A 5 e LO INSERISCO IN UNA VAR
let randNum = randNumGenerator(1, 5);
console.log("numero generato",randNum);
randNumCont.innerHTML=`Numero Randoom Generato : ${randNum}`;

// SOMMO I DUE NUMERI
let somma = userNum + randNum;
console.log("somma",somma);

// STABILIAMO SE LA SOMMA E' PARI O DISPARI
let risultato;
if(pairUnpair(somma) === true) {
    risultato = "la somma è pari";
    console.log( "la somma è pari");
}else {
    risultato = "la somma è dispari";
    console.log( "la somma è dispari");
}
sommaCount.innerHTML=`La Somma dei numer è : ${somma} ${risultato}`;


// DICHIARIAMO IL VINCITORE
let winLose;
if (userChoice === risultato) {
    winLose = "HAI VINTO";
    console.log("HAI Vinto");

}else{
    winLose="HAI PERSO";
    console.log("Hai perso");
}

risultatoCount.innerHTML=`${winLose}`;




// FUNZIONI
// GENERATORE NUMERI RANDOM
function randNumGenerator (min, max) {
    return Math.floor(Math.random() * (max - min) + min);    
}
// VEDERE SE UN NUMERO è PARI O DISPARI
function pairUnpair (num) {
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }

}


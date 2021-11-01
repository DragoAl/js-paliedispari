// PALINDROME Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.
// Dare l’output relativo.

const wordCont = document.getElementById("word");
// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA

 
let userWord = prompt("Inserisci una parola");

if (functPalindrome(userWord) == true) {
    console.log('è palindroma');
    wordCont.innerHTML=`${userWord} è palindroma`;
} else {
    console.log('non è palindroma');
    wordCont.innerHTML=`${userWord} non è palindroma`;
}


// INVERTO LA PAROLA INSERITA
// const reverseWord = userWord.split("").reverse().join("");
// console.log(reverseWord);

// CONFRONTO SE LA PAROLA INSERITA E' UGUALE ALLA PAROLA INVERTITA
// if(userWord === reverseWord){
//     console.log("è una parola palindroma");
// }else{
//     console.log("non è palindroma");
// }


// FUNZIONE 
function functPalindrome(inputWord) {
    // INVERTO LA PAROLA INSERITA
    let reverseWord = inputWord.split("").reverse().join("");
    console.log(reverseWord);

    // CONFRONTO LA PAROLA INVERTITA CON QUELLA INSERITA
    if(inputWord === reverseWord){
        return true;
    } else {
        return false;
    }
}

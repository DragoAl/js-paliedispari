// PALINDROME Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.
// Dare l’output relativo.

const verifica = document.getElementById("submit");
const wordCont = document.getElementById("word-box");


verifica.addEventListener("click",
    function(){
        // CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA

        
        let userWord =document.getElementById("word").value;

        if (functPalindrome(userWord) == true) {
            console.log('è palindroma');
            wordCont.innerHTML=`${userWord} è PALINDROMA`;
        } else {
            console.log('non è palindroma');
            wordCont.innerHTML=`${userWord} NON è PALINDROMA`;
        }

    }
);




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

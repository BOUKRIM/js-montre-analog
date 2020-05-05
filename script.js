// Séléctionner les aiguilles de montre
const AIGUILLEH = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

var date = new Date();
console.log(date);

//Ajouter l'heure , minite , seconde  dans des varaiables
let h = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("hour: " + h + " Minute: " + min  + "second: " + sec );


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
let hPosition = (h*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+ (sec*(360/60)/60);
let secPosition = sec*360/60;

// Déplacer les aiguilles 
function demarrerLaMontre() {
    hPosition = hPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;
    





    AIGUILLEH.style.transform = "rotate(" + hPosition + "deg)";
    AIGUILLEMIN.style.transform = "rotate(" + minPosition + "deg)";
    AIGUILLESEC.style.transform = "rotate(" + secPosition + "deg)";
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
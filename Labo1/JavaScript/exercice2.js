function calculer(){


var calcul = document.getElementById("aCalculer").value;
var resultatDuCalcul= eval(calcul);

var reponse= document.getElementById("reponse").value;

if (reponse == resultatDuCalcul){
    document.getElementById("message").value = 
    "Réponse bonne... Bravo!"
}else{
    document.getElementById("message").value = 
    "Réponse fausse... recommence"
}

}

function verif(){
    var calcul = document.getElementById("aCalculer").value;
    var resultatDuCalcul= eval(calcul); 
    document.getElementById("message").value = resultatDuCalcul;
}


// ajout pour exercice 3

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
nombreSecret = getRandomInt(1, 100);

tentative;
const maxEsssais = 7;
essais = 1;

function valider() {
    while (essais <= maxEsssais) {
        if (nombreSecret > tentative) {
            message = "C'est plus!";
        } else if (nombreSecret < guess) {
            message = "c'est moins";
        }else{
            message = "Vous avez trouvé en " + essais + " essais";
        }
        essais++
    }
    message = "Le nombre à touver était : " + nombreSecret;
}

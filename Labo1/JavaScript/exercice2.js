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
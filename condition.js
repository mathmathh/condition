"use strict";


let prenom="rv";
let legume="poireau";

let nbr1=5
let nbr2=8
let nbr3="5"


/*
quand il y a une utilisation des conditions il faut utiliser outls comparateur (+;-= <>)
si nombr1 est egal a nombr3 message alerte egaliter
pour tester egaliter il faut au minimumdeux signe egale sinon on affcet une nouvelle valeur

egal simple , attribut la valeur -->
*/
if(nbr1==nbr3){
    alert("idem");
}
if(nbr1==nbr3){
    alert("idem bis");
}else{
    alert("je suis dans le else");
}
     
// si () {}sinon si (){}
if(nbr1<nbr2){
    alert("nbr1 est le plus petit");
}else{
    alert("je ne sais pas");
}

if(prenom=="rv"){
    alert ("idem")
}else{
    alert("il s appelle rv")
}  

//switch
switch (nbr1) {
    case 1:
        console.log("je suis le chiffre 1");
        break;
    case 2:
        console.log("je suis le chiffre 2");
        break;
    case 3:
        console.log("jr suis le chiffre 3");
        break;
    case 4:
        console.log("je suis le chiffre 4");
        break;
    case 5:
        console.log("je suis le chiffre 5");
        break;
    default:
        console.log("je suis un autre chiffre")

}

switch (2) {
    case 1:
        console.log("je suis le chiffre 1");
        break;
    case 2:
        console.log("je suis le chiffre 2");
        
    case 3:
        console.log("jr suis le chiffre 3");
        break;
    case 4:
        console.log("je suis le chiffre 4");
        break;
    case 5:
        console.log("je suis le chiffre 5");
        break;
    default:
        console.log("je suis un autre chiffre")

} 

// et && 
if(nbr1==5 && nbr2 ==8){
    alert("je suis trop fort");
}else{
    alert('NOOB')
}


// ou ll
if(nbr1==5 || nbr2==5){
    alert("je suis trop fort ou l autre ");
}else{
    alert('NOOB')
}
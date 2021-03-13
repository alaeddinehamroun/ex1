let a=Math.floor(Math.random()*11);
b=-1;
c=prompt("Saisir La difficult\u00e9  \n mode Simple :saisir 1 \n mode moyenne :saisir 2 \n mode difficile :saisir 3")
d=0;
if(c==1) d=6;
else if(c==2) d=3;
else if(c==3) d=2;
else alert("la valeur de difficulté entrez est fausse");
for(i=1;i<=d && a!=b;i++){
b=prompt("entrez une valeur entre 0 et 10 ","<entrz ici la valeur>");
if(b==a){
alert("Vous etes Gangnant"+"Le nombre saisi est "+b+" Le nombre genere est "+a);
}
else {
    if(i<d){
    if(confirm("la valeur est fausse voulez vous essayez de nouveau ?")==false) {alert("Game Over \n Le nombre genere est "+a); break;}
}
else alert("c'est fini la partie est terminee sans vainqueur et Le nombre genere est "+a)
}}
//document.getElementById("id2").textContent="Le nombre saisi est "+b+" Le nombre genere est "+a
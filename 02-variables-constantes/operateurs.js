// .js pour la page pour les opérateurs


//opérateurs arithmétiques
let x = 200;
let y = 4;
let z = 40;

let a = x + 1;
let b = x + y;
let c = x - y;
let d = x * z;
let e = x / y;
let f = 5 % 3;
let g = 2 ** 3;

console.log(a, b, c, d, e);

console.log(f);

console.log(g);

// \n permet d'aller à la ligne dans l'alerte
alert('a contient : ' + a + 
    '\nb contient : ' + b + 
    '\nc contient : ' + c + 
    '\nd contient : ' + d + 
    '\ne contient : ' + e + 
    '\nf contient : ' + f + 
    '\ng contient : ' + g
);

// priorité des calculs 
let h = 1 - 2 - 3;
// le calcul dans h se fait de gauche à droite
console.log(h);

let k = 1 + 4 - 5;
console.log(k);

// le calcul dans j se fait de droite à gauche
let j = 2 ** 2 ** 2;
console.log(j);

let l = 1 - (2 * 3);
console.log(l);

alert('h contient : ' + h + 
    '\nk contient : ' + k + 
    '\nj contient : ' + j + 
    '\nl contient : ' + l 
);

//Opérateurs d'affectation
// var chiffre1 = 5;
let chiffre1 = 15;
let chiffre2 = 2;

let somme = chiffre1 % chiffre2;

console.log(somme);

// let prenom = "Audrey est chez elle et fait du js";
// console.log(prenom);
// console.log(typeof prenom);

let m = 20;
let o = 50;

m += 15; // on ajoute 15 à la valeur stockée

o *= 5;

console.log(o);


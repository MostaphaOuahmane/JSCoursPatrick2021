//GralaBu

// alert('coucou');

// 1 boucle for
console.log('1ère version >>>>>');
for (var nombre = 1; nombre <=100; nombre++) {
    if ((nombre % 3 === 0) && (nombre % 5 === 0)) {// le nombre est divisible par 3 ET 5 
        console.log('GralaBu'); 
    } else if (nombre % 3 === 0) {
        console.log('Grala');
    } else if (nombre % 5 === 0) {
        console.log('Bu'); }  
    else {
        console.log(nombre);
        } //fin if else
    }//fin for

console.log('seconde version >>>>>');

for (var nombre = 1; nombre <=100; nombre++) {
    if ((nombre % 3 === 0) && (nombre % 5 === 0)) // le nombre est divisible par 3 ET 5 
        console.log('GralaBu'); 
    else if (nombre % 3 === 0) 
        console.log('Grala');
    else if (nombre % 5 === 0) 
        console.log('Bu');  
    else 
        console.log(nombre);
    }//fin for

console.log('3ème version Justine >>>>> dans la page ');

for(var i = 1; i <= 100; i++){
    if (i % 15 === 0) { // modulo de 15 qui équivaut à un modulo pour 3 et 5
            document.getElementById('p1').innerHTML += '<span class="vert">GralaBu </span>';
        //  document.getElementById('p1').classList.add('stabilo');
        } else if (i % 3 === 0) {
            document.getElementById('p1').innerHTML += '<span class="bleu">Grala  </span>';
        } else  if (i % 5 === 0) {
            document.getElementById('p1').innerHTML += '<span class="orange-poudre">Bu  </span>';
        } else {
            document.getElementById('p1').innerHTML += '<span class="bleu-2">' + i + '</span>';
        }
    } // fin de la boucle for

console.log('4ème version Mike >>>>>');
    for (var nombre = 1; nombre <= 100; nombre++) {
    var Message = '';//initialisation de la var message
    if (nombre % 3 === 0) { //Si le modulo de 3 est egale a 0, il est divisible par 3
        message +='Grala';
        }
    if (nombre % 5 === 0){ //Si le modulo de 5 est egale a 0, il est divisible par 5
        message += 'Bu';
        }
    if (message == ''){ // et sinon on affiche le nombre
        message = nombre;// en même temps la variable va concaténer Grala + Bu si le nombre est un multiple de 3 ET de de 5
        }
    console.log(message);
}//fin de for


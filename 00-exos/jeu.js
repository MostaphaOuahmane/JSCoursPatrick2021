// alert('coucou');

var disMoi = '';
var i = 1;

while ((disMoi !== 'oui') && (disMoi !== 'non')) {
    disMoi =  prompt('On jour au ni oui ni non, tape quelque chose');
    i++;
}

document.getElementById('p1').classList.add('stabilo');
document.getElementById('p1').innerHTML = 'Vous avez perdu';
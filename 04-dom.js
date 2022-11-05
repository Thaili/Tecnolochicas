const nombreElement = document.querySelector('#name');
const ageElement = document.querySelector('#age');
const likesMusicElement = document.querySelector('#likesMusic');

const nombre = 'Thaili';
const age = 21;
const likesMusic = true;

console.log(nombre.nodeName);
console.log(age.nodeName);
console.log(likesMusic.nodeName);

/*const linklamarr = document.querySelector('a#link_lamarr');
linklamarr.textContent = 'Página principal';
linklamarr.href = 'Entregable.html';*/

const sect = document.querySelector('section');
const para = document. createElement('p');
para.textContent = 'Hola'
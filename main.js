const nombreElement = document.querySelector('span#name');
const edadElement = document.querySelector('span#age');
const likesMusicElement = document.querySelector('span#likesMusic');

const nombre = 'Thaili';
const edad = 21;
const likesMusic = true;

nombreElement.textContent = nombre;
edadElement.textContent = edad;
if (likesMusic === true) {
    likesMusicElement.textContent = 'me gusta la musica';
} else {
    likesMusicElement.textContent = 'no me gusta la musica';
}

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

function playNote(key) {
    // Obtener la nota
    const noteAudio = document.getElementById(key.dataset.note);
    // Resetear la ejecución de la nota
    noteAudio.currentTime = 0;
    // Utilizar método play() de la nota
    noteAudio.play();
  
    // Añadimos clase active
    key.classList.add('active');
    // Agregamos un event listener al estado ended del evento keydown
    noteAudio.addEventListener('ended', () => {
      // Cuando termine de reproducirse el sonido, removemos clase active
      key.classList.remove('active');
    });
  }

const playNote = (key) => {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.play();
}

document.addEventListener('keydown', (e) => { // z
    if (e.repeat) return;

    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);// 0
    const blackKeyIndex = BLACK_KEYS.indexOf(key);//-1

    if (whiteKeyIndex > -1) {
        playNote(whiteKeys[whiteKeyIndex]); // whiteKeys[0]
    }

    if (blackKeyIndex > -1) {
        playNote(blackKeys[blackKeyIndex]);
    }
});



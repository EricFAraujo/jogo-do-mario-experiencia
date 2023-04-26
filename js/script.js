const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const botaoRestart = document.getElementById('btnRestart');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 800);
}

let contador = 0;
console.log(contador)

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {

        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        pipe.style.animation = 'none';
        pipe.style.bottom = '${marioPosition}px';

        mario.src = './images/game-over.png';
        mario.style.width = '80px'
        mario.style.marginLeft = '70px'
        botaoRestart.classList.add('display');

        clearInterval(loop);
    }

    /* Adicionar isto */
    contador++;
    const pontos = document.getElementById('pontos')
    pontos.innerText = contador;


}, 10);

document.addEventListener('keydown', jump);


botaoRestart.addEventListener('click', () => {
    location.reload();

})





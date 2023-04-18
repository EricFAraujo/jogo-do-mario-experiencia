const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 800);
}

const loop = setInterval(() => {

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');


if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {

    pipe.style.animation = 'none';
    pipe.style.left = '${pipePosition}px';

    pipe.style.animation = 'none';
    pipe.style.bottom = '${marioPosition}px';

    mario.src = './images/game-over.png';
    mario.style.width = '80px'
    mario.style.marginLeft = '70px'

    clearInterval(loop);
}

}, 10);

document.addEventListener('keydown', jump);


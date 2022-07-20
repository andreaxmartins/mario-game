const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
  mario.classList.add("jump");

  setTimeout (() => {
    mario.classList.remove("jump");
  }, 500);
}

const jumpSound = () => {
  const audio = new Audio("./sounds/jump.wav");
  audio.play();
}

const gameOverSound = () => {
  const audio = new Audio("./sounds/game-over.wav");
  audio.play();
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
  document.addEventListener("keydown", jumpSound);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    document.removeEventListener("keydown", jumpSound);

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";
    gameOverSound();

    clearInterval(loop);
  }

}, 10);

document.addEventListener("keydown", jump);
// document.addEventListener("keydown", jumpSound);

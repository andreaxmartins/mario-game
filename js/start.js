const startSound = () => {
  const audio = new Audio("./sounds/start-game.wav");
  audio.play();
}

const delay = URL => {
  setTimeout(() => {
    window.location = URL
  }, 1000);
}

document.querySelector(".button").addEventListener("click", startSound);

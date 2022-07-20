const startSound = () => {
  const audio = new Audio("./sounds/start-game.wav");
  audio.play();
}

const delay = URL => {
  setTimeout(() => {
    const startButton = document.querySelector(".start-button");
    startButton.innerText="READY";
  }, 700);

  setTimeout(() => {
    window.location = URL
  }, 800);
}

document.querySelector(".button").addEventListener("click", startSound);

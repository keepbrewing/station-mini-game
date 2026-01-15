import GameState from '../systems/GameState.js';

let intervalId = null;

export function startTimer(onEnd) {
  updateTimerText();

  intervalId = setInterval(() => {
    GameState.timeRemaining--;

    updateTimerText();

    if (GameState.timeRemaining <= 0) {
      clearInterval(intervalId);
      onEnd();
    }
  }, 1000);
}

function updateTimerText() {
  const minutes = String(Math.floor(GameState.timeRemaining / 60)).padStart(2, '0');
  const seconds = String(GameState.timeRemaining % 60).padStart(2, '0');

  document.getElementById('timer').innerText =
    `Time Remaining: ${minutes}:${seconds}`;
}

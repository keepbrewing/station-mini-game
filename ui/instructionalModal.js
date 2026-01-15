import GameState from '../systems/GameState.js';
import { startTimer } from './timer.js';
import MetricsLogger from '../systems/MetricsLogger.js';

export function setupInstructionModal(onGameEnd) {
  const modal = document.getElementById('instruction-modal');
  const startBtn = document.getElementById('start-button');

  startBtn.addEventListener('click', () => {
    modal.style.display = 'none';

    GameState.started = true;
    MetricsLogger.log('game_started');

    startTimer(onGameEnd);
  });
}

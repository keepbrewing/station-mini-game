import MainScene from './scenes/MainScene.js';
import { setupInstructionModal } from './ui/instructionalModal.js';
import { showEndModal } from './ui/endModal.js';
import MetricsLogger from './systems/MetricsLogger.js';

MetricsLogger.init();


const config = {
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  parent: 'game-container',
  backgroundColor: '#393852',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 0 } }
  },
  scene: [MainScene]
};

new Phaser.Game(config);

// what happens when time runs out
function endGame() {
  console.log('Game ended');
  showEndModal();
  // later: show final modal + export JSON
}

setupInstructionModal(endGame);
window.addEventListener('game-end', endGame);
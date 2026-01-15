import GameState from './GameState.js';

const MetricsLogger = {
  events: [],
  sessionId: null,
  device: null,

  init() {
    this.sessionId = crypto.randomUUID();
    this.device = {
      screen: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
      platform: navigator.platform,
      userAgent: navigator.userAgent
    };

    this.log('session_start');
  },

  log(event, value = null) {
    const entry = {
      sessionId: this.sessionId,
      event,
      value,
      timeRemaining: GameState.timeRemaining,
      timestamp: Date.now(),
      device: this.device
    };

    this.events.push(entry);
    console.log('[Metric]', entry);
  },

  getAll() {
    return this.events;
  }
};

export default MetricsLogger;
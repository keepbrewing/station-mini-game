const InteractionManager = {
  active: null,

  set(target) {
    this.active = target;
  },

  clear() {
    this.active = null;
  }
};

export default InteractionManager;


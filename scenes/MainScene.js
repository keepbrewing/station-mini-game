import GameState from '../systems/GameState.js';
import MetricsLogger from '../systems/MetricsLogger.js';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    this.load.image('floor_walls', 'assets/floor_walls1.png');
    this.load.tilemapTiledJSON('station_map', 'assets/station_map.json');

    this.load.spritesheet('player_idle', './assets/player/idle.png', {
      frameWidth: 16,
      frameHeight: 32
    });
    this.load.spritesheet('player_walk', './assets/player/walk.png', {
      frameWidth: 16,
      frameHeight: 32
    });

    this.load.image('counter1', './assets/counter1.png');
    this.load.image('counter2', './assets/counter2.png');
    this.load.image('counter3', './assets/counter3.png');
    this.load.image('counter4', './assets/counter4.png');

    this.load.image('token_gate1', './assets/token_gate1.png');
    this.load.image('token_gate2', './assets/token_gate2.png');
    this.load.image('token_gate3', './assets/token_gate3.png');
    this.load.image('token_gate4', './assets/token_gate4.png');

    this.load.image('token1', './assets/token1.png');
    this.load.image('token2', './assets/token2.png');
    this.load.image('token3', './assets/token3.png');
    this.load.image('token4', './assets/token4.png');
    this.load.image('token5', './assets/token5.png');

    this.load.image('flower_pot', './assets/flower_pot.png');
    this.load.image('seat', './assets/seat.png');
    this.load.image('brown_bench', './assets/brown_bench.png');
    this.load.image('photo_frame', './assets/photo_frame.png');

    this.load.image('old1', './assets/old_walk_left1.png');
    this.load.image('old2', './assets/old_walk_left2.png');
    this.load.image('old3', './assets/old_walk_left3.png');
    this.load.image('old4', './assets/old_walk_left4.png');
    this.load.image('old5', './assets/old_walk_left5.png');
    this.load.image('old6', './assets/old_walk_left6.png');

    this.load.image('old_speech1', './assets/blind_woman_speech1.png');
    this.load.image('old_speech2', './assets/blind_woman_speech2.png');
    this.load.image('old_speech3', './assets/blind_woman_speech3.png');
    this.load.image('old_speech4', './assets/blind_woman_speech4.png');
    this.load.image('old_speech5', './assets/blind_woman_speech5.png');
    this.load.image('old_speech6', './assets/blind_woman_speech6.png');
    this.load.image('old_speech7', './assets/blind_woman_speech7.png');
    this.load.image('old_speech8', './assets/blind_woman_speech8.png');
    this.load.image('old_speech9', './assets/blind_woman_speech9.png');
    this.load.image('old_speech10', './assets/blind_woman_speech10.png');
    this.load.image('old_speech11', './assets/blind_woman_speech11.png');
    this.load.image('old_speech12', './assets/blind_woman_speech12.png');
    this.load.image('old_speech13', './assets/blind_woman_speech13.png');
    this.load.image('old_speech14', './assets/blind_woman_speech14.png');
    this.load.image('old_speech15', './assets/blind_woman_speech15.png');
    this.load.image('old_speech16', './assets/blind_woman_speech16.png');
    this.load.image('old_speech17', './assets/blind_woman_speech17.png');
    this.load.image('old_speech18', './assets/blind_woman_speech18.png');
    this.load.image('old_speech19', './assets/blind_woman_speech19.png');
    this.load.image('old_speech20', './assets/blind_woman_speech20.png');

    this.load.image('old_thank1', './assets/old_thank1.png');
    this.load.image('old_thank2', './assets/old_thank2.png');
    this.load.image('old_thank3', './assets/old_thank3.png');
    this.load.image('old_thank4', './assets/old_thank4.png');

    this.load.image('money_bag', './assets/money_bag.png');

    this.load.image('food_shop', './assets/shop.png');

    this.load.image('vending_machine', './assets/vending_machine.png');
  }

  create() {
    /* ---------------- MAP ---------------- */
    const map = this.make.tilemap({ key: 'station_map' });
    const tileset = map.addTilesetImage('floor_walls1', 'floor_walls');

    const groundLayer = map.createLayer('Ground', tileset, 0, 0);
    const wallsLayer  = map.createLayer('Walls', tileset, 0, 0);
    wallsLayer.setCollisionByProperty({ collides: true });

    /* ---------------- ANIMS ---------------- */
    this.anims.create({
      key: 'idle_down',
      frames: this.anims.generateFrameNumbers('player_idle', { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key: 'idle_right',
      frames: this.anims.generateFrameNumbers('player_idle', { start: 8, end: 11 }),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key: 'idle_up',
      frames: this.anims.generateFrameNumbers('player_idle', { start: 16, end: 19 }),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('player_walk', { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key: 'walk_up',
      frames: this.anims.generateFrameNumbers('player_walk', { start: 16, end: 19 }),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key: 'walk_right',
      frames: this.anims.generateFrameNumbers('player_walk', { start: 8, end: 11 }),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key: 'counter_idle',
      frames: [
        { key: 'counter1' },
        { key: 'counter2' },
        { key: 'counter3' },
        { key: 'counter4' }
      ],
      frameRate: 4,
      repeat: -1
    });

    this.anims.create({
      key: 'token_anim',
      frames: [
        {key: 'token1'},
        {key: 'token2'},
        {key: 'token3'},
        {key: 'token4'},
        {key: 'token5'}
      ],
      frameRate: 10,
      repeat: 0
    });

    this.anims.create({
      key: 'old_walk',
      frames: [
        {key: 'old1'},
        {key: 'old2'},
        {key: 'old3'},
        {key: 'old4'},
        {key: 'old5'},
        {key: 'old6'}
      ],
      frameRate: 5,
      repeat: -1
    });

    this.anims.create({
      key: 'old_speech',
      frames: [
        {key: 'old_speech1'},
        {key: 'old_speech2'},
        {key: 'old_speech3'},
        {key: 'old_speech4'},
        {key: 'old_speech5'},
        {key: 'old_speech6'},
        {key: 'old_speech7'},
        {key: 'old_speech8'},
        {key: 'old_speech9'},
        {key: 'old_speech10'},
        {key: 'old_speech11'},
        {key: 'old_speech12'},
        {key: 'old_speech13'},
        {key: 'old_speech14'},
        {key: 'old_speech15'},
        {key: 'old_speech16'},
        {key: 'old_speech17'},
        {key: 'old_speech18'},
        {key: 'old_speech19'},
        {key: 'old_speech20'}
      ],
      frameRate: 8,
      repeat: 0
    });

    this.anims.create({
      key: 'old_thank',
      frames: [
        {key: 'old_thank1'},
        {key: 'old_thank2'},
        {key: 'old_thank3'},
        {key: 'old_thank4'}
      ],
      frameRate:6,
      repeat: -1
    });

    this.anims.create({
      key: 'token_gate',
      frames: [
        {key: 'token_gate1'},
        {key: 'token_gate2'},
        {key: 'token_gate3'},
        {key: 'token_gate4'}
      ],
      frameRate: 7,
      repeat: 0
    });

    /* ---------------- PLAYER ---------------- */
    this.player = this.physics.add.sprite(400, 300, 'player_idle');
    this.player.setScale(3);
    this.player.setSize(12, 20);
    this.player.setOffset(2, 12);
    this.player.setCollideWorldBounds(true);

    this.physics.add.collider(this.player, wallsLayer);

    this.facing = 'down';

    /* ---------------- INPUT ---------------- */
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys('W,A,S,D');
    this.keyInteract = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.keyConfirm = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    this.keyCancel = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);
    this.keyReturn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);

    //Interaction prompt
    this.interactText = this.add.text(0,0,'Press E to interact', {
      fontFamily: 'VT323',
      fontSize: '18px',
      color: '#ffd54a',
      backgroundColor: 'rgba(0,0,0,0.6)',
      padding: {x:6, y:4}
    });

    this.interactText.setVisible(false);
    this.interactText.setDepth(10);

    this.confirmText = this.add.text(0, 0, 'Press ENTER: Buy token? BACKSPACE: Cancel', {
        fontFamily: 'VT323',
        fontSize: '18px',
        color: '#7cff7c',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: {x: 6, y: 4}
      });

      this.confirmText.setVisible(false);
      this.confirmText.setDepth(10);

    /* ---------------- COUNTER ---------------- */
    this.counter = this.physics.add.staticSprite(240, 136, 'counter1')
      .setScale(2)
      .play('counter_idle');

    this.counter.setTint(0xffffff);
    this.counter.isHighlighted = false;
    this.nearCounter = false;
    this.awaitingConfirmation = false;
    //this.tokenBought = false;

    /* ---------------- GATE ---------------- */
    this.tokenGate = this.physics.add.staticSprite(543, 150, 'token_gate1')
      .setScale(1.05);

    this.physics.add.collider(this.player, this.counter);
    this.physics.add.collider(this.player, this.tokenGate);

    /*Flower pot*/
    this.flowerPot = this.physics.add.staticSprite(50,170,'flower_pot').setScale(2);
    this.seat = this.physics.add.staticSprite(450,250,'seat').setScale(1.5).setDepth(1);
    this.seat1 = this.physics.add.staticSprite(640,250,'seat').setScale(1.5).setDepth(1);
    this.brown_bench = this.physics.add.staticSprite(900,215,'brown_bench').setScale(1).setDepth(1);
    this.photoFrame = this.physics.add.staticSprite(840,90,'photo_frame').setScale(1.5).setDepth(1);

    this.physics.add.collider(this.player, this.brown_bench);

    this.cashText = this.add.text(880, 16, '', {
      fontFamily: 'VT323',
      fontSize: '20px',
      color: '#7cff7c',
      backgroundColor: 'rgba(0,0,0,0.7',
      padding: {x: 6, y: 4}
    });

    this.cashText.setOrigin(1,0).setDepth(20);

    this.updateCashUI();

    this.oldManActive = true;

    this.oldMan = this.physics.add.sprite(200, 400, 'old1').setScale(3.5).setDepth(3).play('old_walk');
    this.oldMan.speed = 18;
    this.oldMan.direction = 1;
    this.oldMan.startX = this.oldMan.x;
    this.oldMan.range = 80;
    this.oldMan.pause = false;

    this.oldSpeech = this.add.sprite(this.oldMan.x, this.oldMan.y - 40, 'old_speech1').setScale(0.4).setDepth(10).setVisible(false);

    this.oldSpeechTimer = this.time.addEvent({
      delay: 3500,
      loop: true,
      callback: () => {
        if(!this.oldManActive || !this.oldSpeech) return;
        this.oldSpeech.setVisible(true);
        this.oldSpeech.play('old_speech');

        this.oldSpeech.once('animationcomplete', () => {
          if(this.oldSpeech){
            this.oldSpeech.setVisible(false);
          }
        });
      }
    });

    this.walletPicked = false;
    this.nearWallet = false;
    this.walletChoiceActive = false;
    this.walletActionLocked = false;

    this.wallet = this.physics.add.staticSprite(650,290,'money_bag').setDepth(2);
    this.wallet.isHighlighted = false;

    this.foodShop = this.physics.add.staticSprite(768, 180, 'food_shop').setScale(2).setDepth(2);
    this.foodShop.isHighlighted = false;
    this.nearFoodShop = false;
    this.physics.add.collider(this.player, this.foodShop);

    this.foodMenuActive = false;
    this.selectedFoodIndex = 0;
    this.foodItems = [
      {key: 'burger', price: 25},
      {key: 'donut', price: 20},
      {key: 'hotdog', price:18}
    ];

    this.vendingMachine = this.physics.add.staticSprite(880, 380, 'vending_machine').setScale(2.5).setDepth(2);
    this.vendingMachine.isHighlighted = false;
    this.nearVending = false;
    this.vendingActive = false;

    this.physics.add.collider(this.player, this.vendingMachine);

    this.drinkMenuActive = false;
    this.selectedDrinkIndex = false;
    this.drinkItems = [
      {key: 'icecream', price: 25},
      {key: 'coke', price: 20},
      {key: 'shake', price:18}
    ];
    
    /* ---------------- DEPTH ---------------- */
    groundLayer.setDepth(0);
    wallsLayer.setDepth(1);
    this.counter.setDepth(2);
    this.tokenGate.setDepth(2);
    this.player.setDepth(3);
    this.flowerPot.setDepth(1);
    this.interactText.setDepth(10);
    this.confirmText.setDepth(10);
  }

  update() {
    const speed = 140;
    const body = this.player.body;
    if(this.walletChoiceActive || this.drinkMenuActive || this.foodMenuActive) {
      this.player.setVelocity(0);
    }

    if(this.walletChoiceActive){
      if(Phaser.Input.Keyboard.JustDown(this.keyConfirm)) {
        console.log('take money');
        GameState.cash += 20;
        this.updateCashUI();
        this.walletPicked = true;
        this.nearWallet = false;
        this.walletChoiceActive = false;
        this.walletActionLocked = false;

        if(this.wallet) {
          this.wallet.destroy();
          this.wallet = null;
        }
        this.confirmText.setVisible(false);
        this.interactText.setVisible(false);
        this.confirmText.setVisible('');

        MetricsLogger.log('wallet_decision', 'kept_money');
        
        return;
      }
      if(Phaser.Input.Keyboard.JustDown(this.keyReturn)) {
        console.log('return wallet');
        this.walletPicked = true;
        this.nearWallet = false;
        this.walletChoiceActive = false;
        this.walletActionLocked = false;

        if(this.wallet) {
          this.wallet.destroy();
          this.wallet = null;
        }
        this.confirmText.setVisible(false);
        this.interactText.setVisible(false);
        this.confirmText.setVisible('');

        this.removeOldManWithThanks();

        MetricsLogger.log('wallet_decision', 'returned_wallet');
        return;
      }
      if(Phaser.Input.Keyboard.JustDown(this.keyCancel)) {
        this.walletChoiceActive = false;
        this.walletActionLocked = false;
        this.confirmText.setVisible(false);
        this.interactText.setVisible(true);
      }
    }

    if(this.oldManActive && this.oldMan){
      if(!this.oldMan.pause){
        this.oldMan.setVelocityX(this.oldMan.speed * this.oldMan.direction);

        this.oldMan.setFlipX(this.oldMan.direction > 0);
        if(Math.abs(this.oldMan.x - this.oldMan.startX) >= this.oldMan.range){
          this.oldMan.pause = true;
          this.oldMan.setVelocityX(0);

          this.time.delayedCall(1200, () => {
            if(!this.oldManActive || !this.oldMan) return;
            this.oldMan.direction *= -1;
            this.oldMan.startX = this.oldMan.x;
            this.oldMan.pause = false;
          });
        }

        if(this.oldSpeech){
          this.oldSpeech.setPosition(this.oldMan.x, this.oldMan.y - 40);
        }
      }
    }
    
    if(!this.walletPicked && this.wallet){
      const distToWallet = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.wallet.x, this.wallet.y);
      const WALLET_DISTANCE = 45;
      if(distToWallet <= WALLET_DISTANCE){
        this.nearWallet = true;
        if(!this.wallet.isHighlighted){
          this.wallet.setTint(0xffe066);
          this.wallet.isHighlighted = true;
        }
        this.interactText.setText('Press E to interact');
        this.interactText.setPosition(this.wallet.x - this.interactText.width / 2, this.wallet.y - 28);
        this.interactText.setVisible(true);
      }
      else{
        this.nearWallet = false;
        if(this.wallet.isHighlighted){
          this.wallet.clearTint();
          this.wallet.isHighlighted = false;
        }
        this.interactText.setVisible(false);
      }
    }

    if(this.nearWallet && !this.walletChoiceActive && Phaser.Input.Keyboard.JustDown(this.keyInteract)){
      this.walletChoiceActive = true;
      this.walletActionLocked = true;

      this.player.setVelocity(0);
      this.interactText.setVisible(false);
      this.confirmText.setText(
        "This seems like the old man's wallet. \n\n" +
        "[ENTER] Take the money \n" +
        "[SHIFT] Return the wallet \n" +
        "[BACKSPACE] Cancel"
      );

      this.confirmText.setPosition(this.player.x - this.confirmText.width / 2, this.player.y - 70);
      this.confirmText.setVisible(true);
    }

    if(this.foodMenuActive){
      this.player.setVelocity(0);
      if(Phaser.Input.Keyboard.JustDown(this.cursors.up)) {
        this.selectedFoodIndex = (this.selectedFoodIndex - 1 + this.foodItems.length) % this.foodItems.length;
        this.showFoodMenu();
      }
      if(Phaser.Input.Keyboard.JustDown(this.cursors.down)){
        this.selectedFoodIndex = (this.selectedFoodIndex + 1) % this.foodItems.length;
        this.showFoodMenu();                
      }

      if(Phaser.Input.Keyboard.JustDown(this.keyCancel)){
        this.closeFoodMenu();
      }
      if(Phaser.Input.Keyboard.JustDown(this.keyConfirm)) {
        this.buySelectedFood();
      }
      return;
    }

    const distToFoodShop = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.foodShop.x, this.foodShop.y);
    const FOOD_INTERACT_DISTANCE = 70;
    if(distToFoodShop <= FOOD_INTERACT_DISTANCE && !this.walletChoiceActive && !this.awaitingConfirmation && !this.nearWallet) {
      this.nearFoodShop = true;
      if(!this.foodShop.isHighlighted) {
        this.foodShop.setTint(0xffe066);
        this.foodShop.isHighlighted = true;
      }
      this.interactText.setText('Press E to interact');
      this.interactText.setPosition(this.foodShop.x - this.interactText.width / 2, this.foodShop.y - this.foodShop.displayHeight / 2 - 16);
      this.interactText.setVisible(true);
    }
    else {
      this.nearFoodShop = false;
      if(this.foodShop.isHighlighted) {
        this.foodShop.clearTint();
        this.foodShop.isHighlighted = false;
      }
    }

    if(this.nearFoodShop && !this.foodMenuActive && Phaser.Input.Keyboard.JustDown(this.keyInteract)){
      this.foodMenuActive = true;
      this.selectedFoodIndex = 0;

      this.player.setVelocity(0);
      this.interactText.setVisible(false);

      this.showFoodMenu();
    }

    if (this.drinkMenuActive) {
      this.player.setVelocity(0);

      if (Phaser.Input.Keyboard.JustDown(this.cursors.up)) {
        this.selectedDrinkIndex =
          (this.selectedDrinkIndex - 1 + this.drinkItems.length) %
          this.drinkItems.length;
        this.showDrinkMenu();
      }

      if (Phaser.Input.Keyboard.JustDown(this.cursors.down)) {
        this.selectedDrinkIndex =
          (this.selectedDrinkIndex + 1) % this.drinkItems.length;
        this.showDrinkMenu();
      }

      if (Phaser.Input.Keyboard.JustDown(this.keyConfirm)) {
        this.buySelectedDrink();
      }

      if (Phaser.Input.Keyboard.JustDown(this.keyCancel)) {
        this.closeDrinkMenu();
      }

      return; // VERY IMPORTANT
    }

    const distToVending = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.vendingMachine.x, this.vendingMachine.y);
    const VENDING_INTERACT_DISTANCE = 70;

    if(distToVending <= VENDING_INTERACT_DISTANCE && !this.walletChoiceActive && !this.foodMenuActive && !this.drinkMenuActive && !this.awaitingConfirmation){
      this.nearVending = true;
      if(!this.vendingMachine.isHighlighted){
        this.vendingMachine.setTint(0xffe066);
        this.vendingMachine.isHighlighted = true;
      }
      this.interactText.setText('Press E to interact');
      this.interactText.setPosition(this.vendingMachine.x - this.interactText.width / 2, this.vendingMachine.y - this.vendingMachine.displayHeight / 2 - 16);
      this.interactText.setVisible(true);
    }
    else{
      this.nearVending = false;
      if(this.vendingMachine.isHighlighted) {
        this.vendingMachine.clearTint();
        this.vendingMachine.isHighlighted = false;
      }
    }

    if(this.nearVending && Phaser.Input.Keyboard.JustDown(this.keyInteract)){
      this.drinkMenuActive = true;
      this.selectedDrinkIndex = 0;
      this.player.setVelocity(0);
      this.interactText.setVisible(false);
      this.showDrinkMenu();
    }

    const distToGate = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.tokenGate.x, this.tokenGate.y);
    const GATE_DISTANCE = 98;
    if(distToGate <= GATE_DISTANCE && Phaser.Input.Keyboard.JustDown(this.keyInteract)) {
      this.player.setVelocity(0);
      if(!this.hasAllRequiredItems()){
        this.confirmText.setText('You need all required items first.');
        this.confirmText.setPosition(this.player.x - this.confirmText.width / 2, this.player.y - 70);
        this.confirmText.setVisible(true);
        return;
      }
      this.openGateAndEnd();
    }

    // --- Ticket counter proximity check ---
    const distToCounter = Phaser.Math.Distance.Between(
      this.player.x, this.player.y,
      this.counter.x, this.counter.y
    );

    const INTERACT_DISTANCE = 70;

    if (distToCounter <= INTERACT_DISTANCE && !GameState.inventory.token && !this.nearWallet && !this.nearFoodShop) {
      this.nearCounter = true;
      // highlight counter
      if (!this.counter.isHighlighted && !this.awaitingConfirmation) {
        this.counter.setTint(0xffe066); // yellow
        this.counter.isHighlighted = true;
      }

      // show prompt above counter
      if(!this.awaitingConfirmation){
        this.interactText.setPosition(
        this.counter.x - this.interactText.width / 2,
        this.counter.y - this.counter.displayHeight / 2 - 18
      );

      }

      this.interactText.setVisible(!this.awaitingConfirmation);
      }
      else if(!this.nearWallet && !this.nearFoodShop){
        this.nearCounter = false;
        // remove highlight
        if (this.counter.isHighlighted) {
          this.counter.clearTint();
          this.counter.isHighlighted = false;
        }

        this.interactText.setVisible(false);
      }


    let vx = 0, vy = 0;

    const left  = this.cursors.left.isDown  || this.keys.A.isDown;
    const right = this.cursors.right.isDown || this.keys.D.isDown;
    const up    = this.cursors.up.isDown    || this.keys.W.isDown;
    const down  = this.cursors.down.isDown  || this.keys.S.isDown;

    if (left)  { vx = -speed; this.facing = 'left';  this.player.setFlipX(true); }
    if (right) { vx =  speed; this.facing = 'right'; this.player.setFlipX(false); }
    if (up)    { vy = -speed; this.facing = 'up'; }
    if (down)  { vy =  speed; this.facing = 'down'; }

    body.setVelocity(vx, vy);
    if (vx && vy) body.velocity.normalize().scale(speed);

    let animKey = 'idle_down';
    if (vx || vy) {
      animKey =
        this.facing === 'up'   ? 'walk_up' :
        this.facing === 'down' ? 'walk' :
        'walk_right';
    } else {
      animKey =
        this.facing === 'up'   ? 'idle_up' :
        this.facing === 'down' ? 'idle_down' :
        'idle_right';
    }

    if (this.player.anims.currentAnim?.key !== animKey) {
      this.player.anims.play(animKey, true);
    }

    if(this.nearCounter && !GameState.inventory.token && Phaser.Input.Keyboard.JustDown(this.keyInteract))
    {
      if(!this.awaitingConfirmation){
        this.awaitingConfirmation = true;
      }

      this.interactText.setVisible(false);

      this.confirmText.setText('[Press ENTER] Buy token? \n [Press BACKSPACE] Cancel');

      this.confirmText.setPosition(
        this.counter.x - this.confirmText.width/2,
        this.counter.y - this.counter.displayHeight / 2 - 10
      );

      this.confirmText.setVisible(true);
    }

    if(this.awaitingConfirmation && Phaser.Input.Keyboard.JustDown(this.keyConfirm) && !GameState.inventory.token && GameState.cash >= 10){
      console.log(GameState.cash);
      GameState.cash -= 10;
      console.log(GameState.cash);
      GameState.inventory.token = true;

      this.updateCashUI();

      const token = this.add.sprite(this.player.x, this.player.y - 60, 'token1');
      token.setScale(2).setDepth(20).play('token_anim');

      token.once('animationcomplete', () => {
        token.destroy();
      });

      document.getElementById('item-token').classList.add('collected');

      this.awaitingConfirmation = false;
      //this.tokenBought = true;
      this.confirmText.setVisible(false);

      this.counter.clearTint();
      this.counter.isHighlighted = false;

      //this.interactText.setText('You already bought a token');
      //this.interactText.setVisible(true);
    }

    if(this.awaitingConfirmation && Phaser.Input.Keyboard.JustDown(this.keyCancel)){
      this.awaitingConfirmation = false;

      this.confirmText.setVisible(false);
      this.interactText.setVisible(true);

      this.counter.setTint(0xffe066);
      this.counter.isHighlighted = true;
    }
  }

  updateCashUI() {
    this.cashText.setText(`Cash: ₹ ${GameState.cash}`);
  }

  removeOldManWithThanks(){
    this.oldManActive = false;

    if(this.oldMan) {
      this.oldMan.setVelocity(0);
      this.oldMan.anims.stop();
    }

    if(this.oldSpeech){
      this.oldSpeech.destroy();
      this.oldSpeech = null;
    }

    const thankBubble = this.add.sprite(this.oldMan.x, this.oldMan.y - 40, 'old_thank1').setScale(0.4).setDepth(10).play('old_thank');

    this.time.delayedCall(2000, () => {
      if(thankBubble) thankBubble.destroy();
      if(this.oldMan) {
        this.oldMan.destroy();
        this.oldMan = null;
      }
    });
  }

  showFoodMenu() {
    let text = 'Choose food: \n \n';
    this.foodItems.forEach((item, index) => {
      const pointer = index === this.selectedFoodIndex ? '➤ ' : ' ';
      text += `${pointer}${item.key.toUpperCase()} - ₹${item.price}\n`;
    });

    text += '\n[ENTER] Buy [BACKSPACE] Cancel';

    this.confirmText.setText(text);
    this.confirmText.setPosition(this.player.x - this.confirmText.width / 2, this.player.y - 90);
    this.confirmText.setVisible(true);
  }

  buySelectedFood() {
    const food = this.foodItems[this.selectedFoodIndex];
    if(GameState.cash < food.price) {
      this.confirmText.setText('❌ Not enough cash');
      return;
    }
    GameState.cash -= food.price;
    GameState.inventory.food = true;
    this.updateCashUI();

    document.getElementById('item-food').classList.add('collected');
    this.closeFoodMenu();
  }

  closeFoodMenu() {
    this.foodMenuActive = false;
    this.confirmText.setVisible(false);
  }

  showDrinkMenu() {
    let text = 'Choose drink:\n\n';

    this.drinkItems.forEach((item, index) => {
      const pointer = index === this.selectedDrinkIndex ? '➤ ' : '  ';
      text += `${pointer}${item.key} - ₹${item.price}\n`;
    });

    text += '\n[ENTER] Buy   [BACKSPACE] Cancel';

    this.confirmText.setText(text);
    this.confirmText.setPosition(
      this.player.x - this.confirmText.width / 2,
      this.player.y - 90
    );
    this.confirmText.setVisible(true);
  }

  buySelectedDrink() {
    const drink = this.drinkItems[this.selectedDrinkIndex];

    if (GameState.cash < drink.price) {
      this.confirmText.setText('❌ Not enough cash');
      return;
    }

    GameState.cash -= drink.price;
    GameState.inventory.drink = true;
    this.updateCashUI();

    document.getElementById('item-drink').classList.add('collected');

    this.closeDrinkMenu();
  }

  closeDrinkMenu(){
    this.drinkMenuActive = false;
    this.confirmText.setVisible(false);
  }

  hasAllRequiredItems() {
    const inv = GameState.inventory;
    return inv.token && inv.food && inv.drink;
  }

  openGateAndEnd(){
    this.player.setVelocity(0);
    this.tokenGate.play('token_gate');

    this.tokenGate.once('animationcomplete', () => {
      this.cameras.main.fadeOut(800, 0, 0, 0);
    });

    this.cameras.main.once('camerafadeoutcomplete', () => {
      const modal = document.getElementById('end-modal');
      modal.classList.remove('hidden');
      modal.classList.add('show');
    });
  }

  
}
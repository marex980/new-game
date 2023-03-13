import Phaser from 'phaser';

let game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  width: 800,
  height: 600,
  scene: {
    preload: preloadScene,
    create: gameScene,
  },
});

function preloadScene() {
  this.load.image('player', 'assets/girl.png');
  this.load.image('background', 'assets/background.png');
}

function gameScene() {
  let background = this.add.tileSprite(400, 300, 800, 600, 'background');

  let player = this.add.sprite(100, 100, 'player');

  this.update = function () {
    if (this.input.mousePointer.leftButtonDown()) {
      player.y -= 5;
    } else {
      player.y += 5;
    }
    if (player.y < 0) {
      player.y = 0;
    }
    if (player.y > 600) {
      player.y = 600;
    }
  };
}

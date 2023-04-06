import * as Phaser from 'phaser';
import './style.css'


class PhaserMan extends Phaser.Scene {
  constructor() {
	super({ key: 'PhaserMan' });
  }

  preload() {
	this.load.image('sky', 'src/assets/sky.png');
    this.load.image('ground', 'src/assets/platform.png');
    this.load.image('star', 'src/assets/star.png');
    this.load.image('bomb', 'src/assets/bomb.png');
    this.load.spritesheet('dude',
      'src/assets/dude.png',
      { frameWidth: 32, frameHeight: 48 }
    );
  }

  create() {
    this.add.image(400, 300, 'sky');
  }

  update() {
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: PhaserMan
};

const game = new Phaser.Game(config);

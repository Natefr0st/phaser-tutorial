import * as Phaser from 'phaser';
import './style.css'


class PhaserMan extends Phaser.Scene {
  constructor() {
	super({key: 'PhaserMan'});
  }

  preload() {
	this.load.image('sky', 'src/assets/sky.png');
	this.load.image('ground', 'src/assets/platform.png');
	this.load.image('star', 'src/assets/star.png');
	this.load.image('bomb', 'src/assets/bomb.png');
	this.load.spritesheet('dude',
	  'src/assets/dude.png',
	  {frameWidth: 32, frameHeight: 48}
	);
  }

  create() {
	const platforms = this.physics.add.staticGroup();

	this.add.image(400, 300, 'sky');

	platforms.create(400, 568, 'ground').setScale(2).refreshBody();
	platforms.create(600, 400, 'ground');
	platforms.create(50, 250, 'ground');
	platforms.create(750, 220, 'ground');
  }

  update() {
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: PhaserMan,
  physics: {
	default: 'arcade',
	arcade: {
	  gravity: { y: 300 },
	  debug: false
	}
  }

};

const game = new Phaser.Game(config);

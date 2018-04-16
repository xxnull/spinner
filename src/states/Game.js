/* globals __DEV__ */
import Phaser from 'phaser'
//import Mushroom from '../sprites/Mushroom'
import Wheel from '../modules/Wheel'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    
    console.log(this.game)

    // this.mushroom = new Mushroom({
    //   game: this.game,
    //   x: this.world.centerX,
    //   y: this.world.centerY,
    //   asset: 'mushroom'
    // })

    this.wheel = new Wheel({
      game: this.game,
      slices: 8
    });

    this.wheel.create();

    //this.game.add.existing(this.wheel)
  }

  render() {
    if (__DEV__) {
      //this.game.debug.spriteInfo(this.wheel, 32, 32)
    }
  }
}
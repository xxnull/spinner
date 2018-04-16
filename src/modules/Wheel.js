import Phaser from 'phaser'


export default class Wheel {
  constructor({ game, slices }) {
    var slice_degrees = parseFloat((360 / slices));
    
    var factor = 5;
    var colors = [
      0xFF3300, 0x993300, 0x553300, 0x223300, 0xFF5500,
      0xFF7700, 0xFF9922, 0xFF5544, 0xFF3300, 0x993300,
      0x553300, 0x223300, 0xFF5500, 0xFF7700, 0xFF9922,
      0xFF5544, 0xFF3300, 0x993300, 0x553300, 0x223300,
      0xFF5500, 0xFF7700, 0xFF9922, 0xFF5544
    ];

  }

  create() {
    console.log(this);
    var canSpin = true;
  }




}

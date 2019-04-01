function giocoWTW() {/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/aMSIdOUi
 *
 * This source requires Phaser 2.6.2
 */

  var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, 'giocoWTW', { preload: preload, create: create, update: update, render: render }, true);

  function preload() {

      game.load.baseURL = './assets';
      game.load.crossOrigin = 'anonymous';

      game.load.image('player', '/Risorsa 1.png');

  }  // end of preload function

  var player;

  function create() {

    //player
    player = game.add.sprite(game.world.centerX/2, game.world.height/20*6, 'player');
    //player.scale.setTo(80, 80);

  }   // end of create function




  function update () {



  }   // end of update function




  function render () {

  }
}

giocoWTW();

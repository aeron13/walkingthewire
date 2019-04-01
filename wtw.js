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


  function create() {

    //player
    //posizione del player

    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');

  }   // end of create function




  function update () {



  }   // end of update function




  function render () {

  }
}

giocoWTW();

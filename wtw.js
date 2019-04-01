function giocoWTW() {/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/aMSIdOUi
 *
 * This source requires Phaser 2.6.2
 */

  var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'giocoWTW', { preload: preload, create: create, update: update, render: render }, true);

  function preload() {

      game.load.baseURL = './assets';
      game.load.crossOrigin = 'anonymous';

      game.load.image('player', '/Risorsa 1.png');

  }  // end of preload function

  var player;

  function create() {

    //player
    //var scale = 0.6;
    player = game.add.sprite(game.world.centerX-232/2, game.world.height/20*6, 'player');
    console.log(game.world.centerX);
    console.log(player.x);
    //player.scale.setTo(scale, scale);
    /*player.width = 100;
    player.height = 100;*/
    //player.anchor.setTo(0.5);

  }   // end of create function




  function update () {



  }   // end of update function




  function render () {

  }
}

giocoWTW();

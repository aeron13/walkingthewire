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

      game.load.spritesheet('player', '/spritesheet1.png', 800, 870, 19);
      game.load.image('line', '/line.png');

  }  // end of preload function

  var player;

  function create() {

    //Line
    line = game.add.sprite(0, game.world.height/10*0.35, 'line');
    line.width = game.world.width;
    line.height = game.world.height;

    //player
    var scale = 0.2;
    player = game.add.sprite(game.world.centerX-232/2, game.world.height/10*6, 'player');
    console.log(game.world.centerX);
    player.scale.setTo(scale, scale);
    player.x = game.world.centerX-player.width/2;
    //animations
    player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12], 13, true);
    player.animations.add('crouch', [13, 14, 15, 16, 17, 18, 19], 10, false);
    player.animations.play('walk');
    //click
    player.inputEnabled = true;
    player.events.onInputDown.add(listener, this);
    /*player.width = 100;
    player.height = 100;*/
    //player.anchor.setTo(0.5);

  }   // end of create function

function listener() {
  player.animations.play('crouch');
}


  function update () {




  }   // end of update function




  function render () {

  }
}

giocoWTW();

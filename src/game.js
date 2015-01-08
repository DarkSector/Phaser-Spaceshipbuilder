    var width = 1024;
    var height = 600;
    var renderer = Phaser.AUTO;
    var parent = "gamespace";
    var game = new Phaser.Game(width, height, renderer, parent);

    welcome = {
    	init: function(){

    	},
    	preload: function(){
    		game.load.image('logo', '../assets/images/phaser.png');
    	},
    	create: function(){
    		var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
            logo.anchor.setTo(0.5, 0.5);
    	},
    	update: function(){

    	},

    };

    game.state.add('beginning', helloworld);
    game.state.start('beginning');
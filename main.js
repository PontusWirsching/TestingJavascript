









$(document).ready(function() {



	
	
	engine.loadScene("main");
	engine.loadDescription("desc");

	engine.loadImage("textures/sheet.png");


	//Gets called when scripts are done loading.
	//All refrences to other scripts must be made here or later.
	engine.init = function() {
		
		engine.start();

	}

	//Start engine loading.
	engine.load();
	
	engine.imageOffset(false);

	global.scale = 0.75;


	engine.render = function() {
		engine.setScale(global.scale);


		engine.context.fillStyle = "black";
		engine.context.fillRect(0, 0, engine.width, engine.height);

		var handX = engine.width / 2;
		var handY = engine.height + 384 / 4;

		for (var i = 0; i < hand.length; i++) {
			var card = hand[i];
			engine.context.save();
			engine.context.translate(handX + ((i - hand.length / 2) * 252 / hand.length) + 252 / 4, handY);
			engine.context.rotate((10 * (i - (hand.length + 1) / 4)) * (Math.PI / 180));
			card.render(-252/2, -384);
			engine.context.restore();
		}


	}

	/* Your hand is the cards that you can see. */
	var hand = [];


	hand.push(Object.create(new Card().setType("WTC")));
	hand.push(Object.create(new Card().setType("NUKE")));
	hand.push(Object.create(new Card().setType("NUKE")));
	hand.push(Object.create(new Card().setType("NUKE")));


	function Card() {

		this.type = "undefined";
		this.setType = function(type) {
			this.type = type;
			return this;
		}

		this.render = function(x, y) {
			engine.drawImage(engine.images[0], 0, 0, 252, 384, x, y, 252, 384);
		}

	}




});



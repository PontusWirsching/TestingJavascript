









$(document).ready(function() {



	
	
	engine.loadScene("main");
	engine.loadDescription("desc");

	engine.loadImage("textures/planet.png");


	//Gets called when scripts are done loading.
	//All refrences to other scripts must be made here or later.
	engine.init = function() {
		
		engine.start();

	}

	//Start engine loading.
	engine.load();
	
	engine.imageOffset(true);

	global.scale = 1.5;


	engine.render = function() {
		engine.setScale(global.scale);

		engine.drawImage(engine.images[0], 0, 0, 255, 256, engine.width / 2, engine.height / 2, 255, 256);


	}



});













$(document).ready(function() {



	
	
	engine.loadScene("main");
	engine.loadDescription("desc");

	engine.loadImage("textures/planet.png");
	engine.loadImage("textures/guy.png");


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
		engine.context.clearRect(0, 0, engine.width, engine.height);

		engine.drawImage(engine.images[0], 0, 0, 255, 256, engine.width / 2, engine.height / 2, 255, 256);

		player.render();

		player.x = engine.mx;
		player.y = engine.my;

	}

	var player = new Guy(50, 50);

	function Guy(x, y) {
		this.x = x;
		this.y = y;
		this.render = function() {

			var closestPlanet = {x: engine.width / 2, y: engine.height / 2, radius: 256};

			var angle = getAngle(this.x, this.y, closestPlanet.x, closestPlanet.y);

			engine.context.save();
			engine.context.translate(this.x, this.y);
			engine.context.rotate((angle + 90) * (Math.PI / 180));
			engine.drawImage(engine.images[1], 0, 0, 16, 32, 8, 16, 16, 32);

			engine.context.restore();

		}
	}


	function getAngle(x1, y1, x2, y2) {
	    var angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);
	    if(angle < 0){
	        angle += 360;
	    }
	    return angle;
	}

});



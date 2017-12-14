function init(n, ngl) {
	ngl = ngl || false;
	var spd = [];
	var w = 1280;
	var h = 720;

	var loader = new PIXI.loaders.Loader();
	loader.add('test', '../../images/test.jpg');
	loader.load(function(loader, resources) {
		var controller = new PIXI.Container();
		var c;
		for (var i = 0; i < n; i++) {
			c = controller.addChild(new PIXI.Sprite(resources.test.texture));
			spd.push(createSpeed());
			c.x = w / 2;
			c.y = h / 2;
			c.scale.x = c.scale.y = 0.5;
			c.anchor.x = c.anchor.y = 0.5;
		}
		
		var app = new PIXI.Application(w, h, {resolution: innerWidth / w}, ngl);
		app.stage.addChild(controller);
		
		var t = new PIXI.Text(0, {
			fontFamily: 'MS Gothic',
			align: 'center',
			fontSize: 40,
			fill: 0xFF0000
		});
		t.y = 80;
		t.x = 800;
		
		app.stage.addChild(t);
		
		var l = controller.children.length;
		app.ticker.add(function(delta) {
			var c, s;
			console.log(delta)
			t.text = 1 / delta * 60;
			
			for (var i = 0; i < l; i++) {
				c = controller.children[i];
				s = spd[i];
				c.x += s.x;
				c.y += s.y;
				if (c.x < 0 || c.x > w || c.y < 0 || c.y > h) {
					c.x = w / 2;
					c.y = h / 2;
					spd[i] = createSpeed();
				}
			}
		});
		
		document.body.appendChild(app.view);
		app.start();
		
		function createSpeed() {
			return {x: Math.random() * 20 - 10, y: Math.random() * 20 - 10};
		}
	});
}
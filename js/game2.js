(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.mogu = function() {
	this.initialize(img.mogu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.hoge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.mogu();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.c, null, null);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var n = window.n;
		var self = this;
		var c;
		var spd = [];
		
		for (var i = 0; i < n; i++) {
			c = this.co.addChild(new lib.hoge());
			c.scaleX = c.scaleY = 0.5;
			c.x = 640;
			c.y = 360;
			spd.push(createSpeed());
		}
		
		var l = this.co.children.length;
		window.p.app.ticker.add(function(delta) {
			var s, c;
			for (var i = 0; i < l; i++) {
				c = self.co.children[i];
				s = spd[i];
				
				c.x += s.x;
				c.y += s.y;
				
				if (c.x < 0 || c.x > 1280 || c.y < 0 || c.y > 720) {
					c.x = 640;
					c.y = 360;
					spd[i] = createSpeed();
				}
			}
			
			self.tx.text = 1 / delta * 60;
		});
		
		function createSpeed() {
			return {x: Math.random() * 20 - 10, y: Math.random() * 20 - 10};
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー 3
	this.tx = new cjs.Text("0", "40px 'MS UI Gothic'", "#FF0000");
	this.tx.name = "tx";
	this.tx.lineHeight = 42;
	this.tx.parent = this;
	this.tx.setTransform(878.3,50.3);

	this.timeline.addTween(cjs.Tween.get(this.tx).wait(1));

	// レイヤー 1
	this.co = new lib.c();
	this.co.parent = this;
	this.co.setTransform(113,113,1,1,0,0,0,113,113);

	this.timeline.addTween(cjs.Tween.get(this.co).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1516.3,408.3,24.2,132.1);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"../../images/test.jpg?1513227108225", id:"mogu"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
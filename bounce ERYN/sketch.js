var x = 100;
var y = 180;
var xspeed = 7;
var yspeed = 7;

function preload() {
 DVD = loadImage('assets/DVD.png');
 ding = loadSound('assets/ding.mp3')
  
}

function setup() {
createCanvas(1000, 700);
ding.setVolume(3);

  if (DVD === (1000, 700)) {
  ding.play;
  }
  if (DVD === (0, 700)) {
  ding.play;
  }
  if (DVD === (1000, 0)) {
  ding.play;
  }
  if (DVD === (0, 0)) {
  ding.play;  
  }
}


function draw() {

background (25);
	var d = dist(1000, 700, mouseX, mouseY);
  imageMode(RIGHT)	
  	image(DVD, x, y, d, d)


 	 x = x + xspeed;
  	
  	 if (x > 1000 - d || x < 0)  {
  xspeed = -xspeed;
  	}

  	y = y + yspeed;

  	if (y > 700 - d || y < 0) {
	 	  yspeed = -yspeed;
  	}

}
function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}

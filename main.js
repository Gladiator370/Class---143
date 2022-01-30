function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("mario_jump.wav");
	mario_coin = loadSound("mario_coin.wav");
	mario_gameover = loadSound("mario_gameover.wav");
	mario_kick = loadSound("mario_kick.wav");
	mario_die = loadSound("mario_die.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
}

function draw() {
	game()
}







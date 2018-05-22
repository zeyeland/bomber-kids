var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

var mWidth = document.querySelector('main').offsetWidth;
var mHeight = document.querySelector('main').offsetHeight;

//Modify canvas
canvas.width = mWidth;
canvas.height = mHeight;
document.querySelector('main').appendChild(canvas);

function update(){
	drawMapGrid();
	player1.update();
	scanObjectGrid();
	//player1.update();
}

setInterval(update,40);

const canvasWIDTHblock = Math.round(canvas.width/17);
const canvasHEIGHTblock = Math.round(canvas.height/15);

loadBlocksInObjectGrid();

var player1 = new playerComponnet();
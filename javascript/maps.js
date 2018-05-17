var tileNine = new Image();  // 1
tileNine.src = "assets/stone_2_dark0.png";

var tileEight = new Image();  // 9
tileEight .src = "assets/stone_2_gray0.png";

var tileZero = new Image();  // 9
tileZero .src = "assets/grass_2.png";


// 17x by 15y grid
var mapGrid = [[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
				  [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
				  [9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9],
				  [9,9,0,8,0,8,0,8,0,8,0,8,0,8,0,9,9],
				  [9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9],
				  [9,9,0,8,0,8,0,8,0,8,0,8,0,8,0,9,9],
				  [9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9],
				  [9,9,0,8,0,8,0,8,0,8,0,8,0,8,0,9,9],
				  [9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9],
				  [9,9,0,8,0,8,0,8,0,8,0,8,0,8,0,9,9],
				  [9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9],
				  [9,9,0,8,0,8,0,8,0,8,0,8,0,8,0,9,9],
				  [9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9],
				  [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
				  [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
				];

function drawMapGrid(){
	for(var rowYcount=0; rowYcount < 15; rowYcount++){
		for(var columnXcount=0; columnXcount < 17; columnXcount++){
			if(mapGrid[rowYcount][columnXcount] == 9){
				ctx.drawImage(tileNine,columnXcount*canvasWIDTHblock,rowYcount*canvasHEIGHTblock,canvasWIDTHblock,canvasHEIGHTblock);
			}
			if(mapGrid[rowYcount][columnXcount] == 8){
				ctx.drawImage(tileEight,columnXcount*canvasWIDTHblock,rowYcount*canvasHEIGHTblock,canvasWIDTHblock,canvasHEIGHTblock);
			}
			if(mapGrid[rowYcount][columnXcount] == 0){
				ctx.drawImage(tileZero,columnXcount*canvasWIDTHblock,rowYcount*canvasHEIGHTblock,canvasWIDTHblock,canvasHEIGHTblock);
			}
			
		}
	}
}
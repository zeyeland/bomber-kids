var tileNine = new Image();  // 1
tileNine.src = "assets/stone_2_dark0.png";

var tileEight = new Image();  // 9
tileEight.src = "assets/stone_2_gray0.png";

var tileZero = new Image();  // 9
tileZero.src = "assets/grass_2.png";


/* these are the tiles for unique fires on mapGrid */

	var tileFire = new Image();
	tileFire.src = "assets/passed_sprites/lava_2.png";

	var tileWater = new Image();
	tileWater.src = "assets/passed_sprites/water_2.png";

//////////////////////////


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
			//// these if statements are for unique fires
			if(mapGrid[rowYcount][columnXcount] == "GREY"){
				ctx.drawImage(tileFire,columnXcount*canvasWIDTHblock,rowYcount*canvasHEIGHTblock,canvasWIDTHblock,canvasHEIGHTblock);
				if(player1.x/canvasWIDTHblock == columnXcount && player1.y/canvasHEIGHTblock == rowYcount){
					player1.hearts --;
				}
			}
			if(mapGrid[rowYcount][columnXcount] == "BLUE"){
				ctx.drawImage(tileWater,columnXcount*canvasWIDTHblock,rowYcount*canvasHEIGHTblock,canvasWIDTHblock,canvasHEIGHTblock);
				if( bombArray.includes(objectGrid[rowYcount][columnXcount]) ){
					objectGrid[rowYcount][columnXcount] = 0;
					player1.bombCapacity++;
				}
			}
		}
	}
}
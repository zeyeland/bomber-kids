//playerComponnet
function playerComponnet(){
    this.x = canvasWIDTHblock*2; //starting position;
    this.spdX = canvasWIDTHblock; // player speed
    this.y = canvasHEIGHTblock*2; // starting position
    this.spdY= canvasHEIGHTblock;  // player speed
    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/player_Sprites/playerChill-Right.png";
    this.power = 2;
    this.health = 100;
    //
    

    //
    /*player looking directions for sprites*/
    this.lookLeft = true;
    this.lookRight = false;

    this.update = function(){
        var parentThis = this;
        document.onkeydown = function(e) { //detects movement with keys strokes
            //console.log("The player y is: " + player1.y);  
            switch (e.keyCode) {
                case 77: //debuging key M 
                console.log(objectGrid[2][2]);
                break;
                case 37:
                if(parentThis.lookLeft == true){
                    
                    if(checkMapTileCollisions("LEFT",parentThis) == false){
                       //console.log("est for left movement");
                        parentThis.playerImage.src = "assets/player_Sprites/playerRun-Left.png";
                        parentThis.x -= parentThis.spdX;
                        //console.log("player left");
                    }
                }
                else{
                    parentThis.playerImage.src = "assets/player_Sprites/playerChill-Left.png";
                    parentThis.lookLeft = true;
                    parentThis.lookRight = false;
                }
                    break;
                case 38:
                if(checkMapTileCollisions("ABOVE",parentThis) == false){
                    parentThis.y -= parentThis.spdY;
                    //console.log("player up");
                }
                    break;
                case 39:
                if(parentThis.lookRight == true){
                    if(checkMapTileCollisions("RIGHT",parentThis) == false){
                        //console.log("est for right movement");
                        parentThis.playerImage.src = "assets/player_Sprites/playerRun-Right.png";
                        parentThis.x += parentThis.spdX;
                        //console.log("player right");
                       
                    }
                }
                else{
                    parentThis.playerImage.src = "assets/player_Sprites/playerChill-Right.png";
                    parentThis.lookRight = true;
                    parentThis.lookLeft = false;
                }
                    break;
                case 40:
                if(checkMapTileCollisions("BELOW",parentThis) == false){
                    parentThis.y += parentThis.spdY;
                    //console.log("player down");
                    
                }
                    break;
                case 32:  //spacebar
                    //console.log("Bomber places a Bomb - after release");
                    break;
            }//end of switch
        };   //end of document on keydown function 
        document.onkeyup = function(e){ //detects key up after movement
             switch (e.keyCode) {
                case 37:
                    parentThis.playerImage.src = "assets/player_Sprites/playerChill-Left.png";
                    
                    break;
                case 38:
                
                
                    break;
                case 39:
                    parentThis.playerImage.src = "assets/player_Sprites/playerChill-Right.png";
                
                    break;
                case 40:
                
                
                    break;
                case 32:
                    //console.log("Bomber places a Bomb");
                    var bomb007 = new droppedBomb(parentThis.x,parentThis.y,parentThis.power);
                    //create bomb object
                    //dropBomb
                break;
            }//end of key up switch
        }//end of keyup function
           
        if(parentThis.health < 1){
            console.log("you have been hit ; game over");
            player1.x = 0;
            player1.y = 0;
        }
        drawPlayer();
    }//end of update function

} // end of playerComponnet

function drawPlayer(){

    ctx.drawImage(player1.playerImage,player1.x,player1.y,canvasWIDTHblock,canvasHEIGHTblock);
}


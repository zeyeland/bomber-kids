var bombArray = [];
var fireArray = [];


function droppedBomb(x,y,power){
    
    this.x = x;
    this.y = y;
    this.power = power;
    this.timer = 0;
    this.bombImage = new Image();
    this.bombImage.src = "javascript/fakeBomb.png";
    
    player1.bombCapacity --;
    //console.log(player1.bombCapacity);
    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;
    bombArray.push(this);
    //console.log("bomb was created and dropped at: " + this.y/canvasHEIGHTblock + " " + this.x/canvasWIDTHblock);
    
    this.update = function(){
        
        if(this.timer > 50){
            bombExplode(this);
            player1.bombCapacity ++;
            //console.log(player1.bombCapacity);
        }
         //if(this.timer > 100){
          //  unExplode(this);
        //}
    this.timer ++;
    drawBomb(this);
    }//end of update

}//end of bomb object

function droppedBombRED(x,y,power){
    
    this.x = x;
    this.y = y;
    this.power = power;
    this.timer = 0;
    this.bombImage = new Image();
    this.bombImage.src = "assets/passed_sprites/bombRed.png";
    
    player1.bombCapacity --;
    //console.log(player1.bombCapacity);
    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;
    bombArray.push(this);
    
    this.update = function(){
        
        if(this.timer > 50){
            bombExplodeRED(this);
            player1.bombCapacity ++;
        }
    this.timer ++;
    drawBomb(this);
    }//end of update

}//end of bomb object

function droppedBombGREY(x,y,power){
    
    this.x = x;
    this.y = y;
    this.power = power;
    this.timer = 0;
    this.bombImage = new Image();
    this.bombImage.src = "assets/passed_sprites/bombGrey.png";
    
    player1.bombCapacity --;
    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;
    bombArray.push(this);
    
    this.update = function(){
        
        if(this.timer > 50){
            bombExplode2(this,"GREY");
            player1.bombCapacity ++;
        }
    this.timer ++;
    drawBomb(this);
    }//end of update

}//end of bomb object

function droppedBombBLUE(x,y,power){
    
    this.x = x;
    this.y = y;
    this.power = power;
    this.timer = 0;
    this.bombImage = new Image();
    this.bombImage.src = "assets/passed_sprites/bombBlue.png";
    
    player1.bombCapacity --;
    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;
    bombArray.push(this);
    
    this.update = function(){
        
        if(this.timer > 50){
            bombExplode2(this,"BLUE");
            player1.bombCapacity ++;
        }
    this.timer ++;
    drawBomb(this);
    }//end of update

}//end of bomb object

function fire(x,y,power){
    this.x = x;
    this.y = y;
    this.power = power;
    this.timer = 0;
    this.firePic = new Image();
    this.firePic.src = "assets/passed_sprites/cloud_fire_2.png";
    this.hitPlayer = false;

    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;
    fireArray.push(this);
    
    this.update = function(){
        if(this.x == player1.x && this.y == player1.y && this.hitPlayer == false){
            this.hitPlayer = true;
            player1.hearts--;
        }
        if(this.timer > 10){
            objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = 0;    
        }
    this.timer ++;
    drawFire(this);
    }//end of update
}

function fireUnique(x,y,power,mapID){
    this.x = x;
    this.y = y;
    this.power = power;
    this.timer = 0;
    this.firePic = new Image();
    this.firePic.src = "assets/passed_sprites/cloud_fire_2.png";
    this.hitPlayer = false;

    this.mapID = mapID;

   
    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;
    fireArray.push(this);
    
    this.update = function(){
        if(this.x == player1.x && this.y == player1.y && this.hitPlayer == false){
            this.hitPlayer = true;
            player1.hearts--;
        }
        if(this.timer > 10){
            if(this.mapID != null && this.mapID != false ){
                mapGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this.mapID       
            }
            objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = 0;    
        }
    this.timer ++;
    drawFire(this);
    }//end of update
}

function bombExplode(bombObject){
    
    var newFire = new fire(bombObject.x,bombObject.y,bombPower);
    //objectGrid[bombObject.y/canvasHEIGHTblock][bombObject.x/canvasWIDTHblock] = newFire;
    var bombPower = bombObject.power;
    var stopUp = false;
    var stopDown = false;
    var stopLeft = false;
    var stopRight = false;
    
    for(var z=1; z<=bombPower; z++ ){
        if(stopUp == false && explodeCollisions('ABOVE',bombObject,z) == true){
            stopUp = true;
        }
        if(stopDown == false && explodeCollisions('BELOW',bombObject,z) == true){
            stopDown = true;
        }
        if(stopLeft == false && explodeCollisions('LEFT',bombObject,z) == true){
            stopLeft = true;
        }
        if(stopRight == false && explodeCollisions('RIGHT',bombObject,z) == true){
            stopRight = true;
        }
        /////////////////////////
        if( stopUp == false && explodeCollisions('ABOVE',bombObject,z) == false){
            var newFire = new fire(bombObject.x,bombObject.y-(canvasHEIGHTblock*z),bombPower);
        }
        if(stopDown == false && explodeCollisions('BELOW',bombObject,z) == false){
            var newFire = new fire(bombObject.x,bombObject.y+(canvasHEIGHTblock*z),bombPower);
        }
        if(stopLeft == false && explodeCollisions('LEFT',bombObject,z) == false){
            var newFire = new fire(bombObject.x-(canvasWIDTHblock*z),bombObject.y,bombPower);           
        }
        if(stopRight == false &&explodeCollisions('RIGHT',bombObject,z) == false){
            var newFire = new fire(bombObject.x+(canvasWIDTHblock*z),bombObject.y,bombPower);
            
        }    
    }
}

//this bombExplode2 functions supports unique fire
function bombExplode2(bombObject,mapID){
    
    var newFire = new fireUnique(bombObject.x,bombObject.y,bombPower,mapID);
    //objectGrid[bombObject.y/canvasHEIGHTblock][bombObject.x/canvasWIDTHblock] = newFire;
    var bombPower = bombObject.power;
    var stopUp = false;
    var stopDown = false;
    var stopLeft = false;
    var stopRight = false;
    
    for(var z=1; z<=bombPower; z++ ){
        if(stopUp == false && explodeCollisions('ABOVE',bombObject,z) == true){
            stopUp = true;
        }
        if(stopDown == false && explodeCollisions('BELOW',bombObject,z) == true){
            stopDown = true;
        }
        if(stopLeft == false && explodeCollisions('LEFT',bombObject,z) == true){
            stopLeft = true;
        }
        if(stopRight == false && explodeCollisions('RIGHT',bombObject,z) == true){
            stopRight = true;
        }
        /////////////////////////
        if( stopUp == false && explodeCollisions('ABOVE',bombObject,z) == false){
            var newFire = new fireUnique(bombObject.x,bombObject.y-(canvasHEIGHTblock*z),bombPower,mapID);
        }
        if(stopDown == false && explodeCollisions('BELOW',bombObject,z) == false){
            var newFire = new fireUnique(bombObject.x,bombObject.y+(canvasHEIGHTblock*z),bombPower,mapID);
        }
        if(stopLeft == false && explodeCollisions('LEFT',bombObject,z) == false){
            var newFire = new fireUnique(bombObject.x-(canvasWIDTHblock*z),bombObject.y,bombPower,mapID);           
        }
        if(stopRight == false &&explodeCollisions('RIGHT',bombObject,z) == false){
            var newFire = new fireUnique(bombObject.x+(canvasWIDTHblock*z),bombObject.y,bombPower,mapID);
            
        }    
    }
}

//this bombexplode is special for RED BOMBS
function bombExplodeRED(bombObject){
    var newFire = new fire(bombObject.x,bombObject.y,bombPower);

    var bombPower = bombObject.power;

    var startingX = (bombObject.x / canvasWIDTHblock) - bombPower;
    var startingY = (bombObject.y / canvasHEIGHTblock) - bombPower;

    var endingX = (bombObject.x / canvasWIDTHblock) + bombPower;
    var endingY = (bombObject.y / canvasHEIGHTblock) + bombPower;

    if( startingX < 2){
        startingX = 2;
    }

    if( startingY < 2){
        startingY = 2;
    }
    if( endingX >= 15){
        endingX = 14;
    }
    if( endingY >= 13){
        endingY = 12;
    }
    
    for(var tempStartingY = startingY; tempStartingY <= endingY; tempStartingY++){
        for(var tempStartingX = startingX; tempStartingX <= endingX; tempStartingX++){
            
            if( bombArray.includes ( objectGrid[tempStartingY][tempStartingX]) ){
                objectGrid[tempStartingY][tempStartingX].timer = 51;
            }
            if( blockArray.includes ( objectGrid[tempStartingY][tempStartingX]) ){
                objectGrid[tempStartingY][tempStartingX].updateTWO();
            }
            if( itemsList.includes ( objectGrid[tempStartingY][tempStartingX]) ){
                objectGrid[tempStartingY][tempStartingX] = 0;
            }
            if( objectGrid[tempStartingY][tempStartingX] == 0 ){
                var newFire = new fire(tempStartingX*canvasWIDTHblock, tempStartingY*canvasHEIGHTblock ,bombPower);
            }
            
        }
    }

}



function drawBomb(bombObject){
    if(bombObject != 0 && bombObject != null && bombObject != false){
     ctx.drawImage(bombObject.bombImage,bombObject.x,bombObject.y,canvasWIDTHblock,canvasHEIGHTblock);
    }
    
}

function drawFire(fireObject){
    if(fireObject != 0 && fireObject != null && fireObject != false){
    ctx.drawImage(fireObject.firePic,fireObject.x,fireObject.y,canvasWIDTHblock,canvasHEIGHTblock);
    }
}




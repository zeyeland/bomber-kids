var bombArray = [];
var fireArray = [];


function droppedBomb(x,y,power){
    
    this.x = x;
    this.y = y;
    this.power = power;
    this.timer = 0;
    this.bombImage = new Image();
    this.bombImage.src = "javascript/fakeBomb.png";
    

    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;
    bombArray.push(this);
    //console.log("bomb was created and dropped at: " + this.y/canvasHEIGHTblock + " " + this.x/canvasWIDTHblock);
    
    this.update = function(){
        
        if(this.timer > 50){
            bombExplode(this);
        }
         //if(this.timer > 100){
          //  unExplode(this);
        //}
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
    this.firePic.src = "javascript/flame_2.png"

    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;
    fireArray.push(this);
    
    this.update = function(){
        if(this.x == player1.x && this.y == player1.y){
            player1.health = 0;
        }
        if(this.timer > 10){
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

/*function unExplode(bombObject){
    
    objectGrid[bombObject.y/canvasHEIGHTblock][bombObject.x/canvasWIDTHblock] = 0;
    var bombPower = bombObject.power;
    var stopUp = false;
    var stopDown = false;
    var stopLeft = false;
    var stopRight = false;
    
    for(var z=1; z<=bombPower; z++ ){
        if(stopUp == false && unexplodeCollisions('ABOVE',bombObject,z) == true){
            stopUp = true;
        }
        if(stopDown == false && unexplodeCollisions('BELOW',bombObject,z) == true){
            stopDown = true;
        }
        if(stopLeft == false && unexplodeCollisions('LEFT',bombObject,z) == true){
            stopLeft = true;
        }
        if(stopRight == false && unexplodeCollisions('RIGHT',bombObject,z) == true){
            stopRight = true;
        }
        /////////////////////////
        if( stopUp == false && unexplodeCollisions('ABOVE',bombObject,z) == false){
            objectGrid[bombObject.y/canvasHEIGHTblock-z][bombObject.x/canvasWIDTHblock] = 0;
        }
        if(stopDown == false && unexplodeCollisions('BELOW',bombObject,z) == false){
            objectGrid[bombObject.y/canvasHEIGHTblock+z][bombObject.x/canvasWIDTHblock] = 0;
        }
        if(stopLeft == false && unexplodeCollisions('LEFT',bombObject,z) == false){
            objectGrid[bombObject.y/canvasHEIGHTblock][bombObject.x/canvasWIDTHblock-z] = 0;
        }
        if(stopRight == false && unexplodeCollisions('RIGHT',bombObject,z) == false){
            objectGrid[bombObject.y/canvasHEIGHTblock][bombObject.x/canvasWIDTHblock+z] = 0;
        }    
    }
} */

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




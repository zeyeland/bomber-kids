var bombGrid = [];


function bomb(){
    this.x = x;
    this.y = y;
    this.power = power;
    this.timer = 0;
    this.Image = new Image();
    this.Image.src = "";

    bombGrid[this.y][this.x] = this;

    this.update = function(){
        if(this.timer > 50){
            bombExplode(this);
            unExplode(this);
            //bombGrid[this.y][this.x] = 0; unexplode takes care of this
        }
    this.timer ++;
    drawBomb();
    }//end of update

}//end of bomb object

function fire(){
    this.x = x;
    this.y = y;
    this.power = power;
    this.timer =0;
}
function bombExplode(bombObject){
    bombGrid[bombObject.y][bombObject.x] = 6;
    let bombPower = bombObject.power;
    let stopUp = false;
    let stopDown = false;
    let stopLeft = false;
    let stopRight = false;

    for(var z=0; z<bombPower; z++ ){
        if(explodeCollisions('up') == true){
            stopUp = true;
        }
        if(explodeCollisions('down') == true){
            stopDown = true;
        }
        if(explodeCollisions('left') == true){
            stopLeft = true;
        }
        if(explodeCollisions('right') == true){
            stopRight = true;
        }
        /////////////////////////
        if(explodeCollisions('up') == false && stopUp == false){
            bombGrid[bombObject.y-z][bombObject.x] = 6;
        }
        if(explodeCollisions('down') == false && stopDown == false){
            bombGrid[bombObject.y+z][bombObject.x] = 6;
        }
        if(explodeCollisions('left') == false && stopLeft == false){
            bombGrid[bombObject.y][bombObject.x-z] = 6;
        }
        if(explodeCollisions('right') == false && stopRight == false){
            bombGrid[bombObject.y][bombObject.x+z] = 6;
        }    
    }

}

function unExplode(bombObject){
    bombGrid[bombObject.y][bombObject.x] = 0;
    let bombPower = bombObject.power;
    let stopUp = false;
    let stopDown = false;
    let stopLeft = false;
    let stopRight = false;

    for(var z=0; z<bombPower; z++ ){
        if(explodeCollisions('up') == true){
            stopUp = true;
        }
        if(explodeCollisions('down') == true){
            stopDown = true;
        }
        if(explodeCollisions('left') == true){
            stopLeft = true;
        }
        if(explodeCollisions('right') == true){
            stopRight = true;
        }
        /////////////////////////
        if(explodeCollisions('up') == false && stopUp == false){
            bombGrid[bombObject.y-z][bombObject.x] = 0;
        }
        if(explodeCollisions('down') == false && stopDown == false){
            bombGrid[bombObject.y+z][bombObject.x] = 0;
        }
        if(explodeCollisions('left') == false && stopLeft == false){
            bombGrid[bombObject.y][bombObject.x-z] = 0;
        }
        if(explodeCollisions('right') == false && stopRight == false){
            bombGrid[bombObject.y][bombObject.x+z] = 0;
        }    
    }

}

function drawBomb(){
    ctx.drawImage();
}

function drawExplosion(){
    ctx.drawImage();
}

function scanBombGrid(){
    for(var y=0; y<??? ; y++){
        for(var x=0; x<??? ; x++){
            if(bombGrid[y][x] == 6){
                drawExplosion();
            }
            if(bombGrid[y][x] == bomb){
                bombGrid[y][x].update();
            }
        }
    }
}



//add this to player update function
if(bombGrid[this.y][this.x] == 6){
    player1.health = 0;
}
///////
//add collision for the bomb

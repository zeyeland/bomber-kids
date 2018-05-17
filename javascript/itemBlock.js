var blockArray = [];

function loadBlocksInObjectGrid(){
    console.log("Map has been loaded");
    for(var y=0; y<15 ; y++){
        for(var x=0; x<17 ; x++){
            if( objectGrid[y][x] == 1){
                var newBlock = new destructibleBlock(x,y);
            }  
        }
    }
}

function destructibleBlock(x,y){
    this.x = x * canvasWIDTHblock;
    this.y = y * canvasHEIGHTblock;
    //this.timerStart = false;
    this.timer = 0;
    this.blockImage = new Image();
    this.blockImage.src = "assets/orc_11.png";

    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;
    blockArray.push(this);

    this.update = function(){
        if(this.timer > 5){
            //this.blockImage.src = "assets/orc_11.png";
            objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = 0;
            this.timer = 0;
        }
        
        if(this.blockImage.src == "https://localhost//bomber-kids-2/javascript/flame_2.png"){
            this.timer++;  
            console.log(this.blockImage.src);
        }
        drawItemBlock(this);
    }

    this.updateTWO = function(){
        this.blockImage.src = "javascript/flame_2.png";
    }
}
function drawItemBlock(blockObject){
    if(blockObject != 0 && blockObject != null && blockObject != false){
    ctx.drawImage(blockObject.blockImage,blockObject.x,blockObject.y,canvasWIDTHblock,canvasHEIGHTblock);
    }
}






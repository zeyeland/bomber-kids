function stageBlock(x,y){
    this.x = x;
    this.y = y;
    this.blockImage = new Image();
    this.blockImage.src = ""
    //this.timer =0;
    this.itemDrop = false;

    this.update = function(){
        drawStageBlock(this);
    }

    this.blockExplode = function(){
        //turn to fire
        //return to nothing
        //drop or not item
    }

}

function drawStageBlock(blockObject){
    ctx.draw();
}
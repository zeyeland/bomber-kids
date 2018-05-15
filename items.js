function droppedItem(x,y){
    this.x = x;
    this.y = y;
    this.itemImage = new Image();
    this.itemImage.src = ""

    this.update = function(){
        if(player1.x == this.x && player1.y == this.y){
            player1.inventory.push(this);
            objectGrid[][] = 0;
        }
        drawItem();
    }
}

function drawItem(itemObject){
    ctx.draw();
}
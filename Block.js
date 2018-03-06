'use strict';
function Block(x,y,id){
	this.x = x;
	this.y = y;
	this.id = id;
	
	this.draw = function(){
		switch (this.id){
			case ID.GRASS: {
				c.fillStyle = 'rgb(25, 155, 0)';
				break;
			}
			case ID.DIRT: {
				c.fillStyle = 'rgb(110, 75, 25)';
				break;
			}
			case ID.STONE: {
				c.fillStyle = 'grey';
				break;
			}
			case ID.ORE: {
				c.fillStyle = 'orange';
				break;
			}
		}
		c.fillRect(this.x,this.y,config.gridSize,config.gridSize);
	}
};
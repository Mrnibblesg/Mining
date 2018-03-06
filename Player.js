let plr = {
	x: config.gridSize * 100,
	y: config.gridSize * 13,
	
	btnUp: false,
	btnDown: false,
	btnLeft: false,
	btnRight: false,
	
	draw: function(){
		gui.clearRect(0,0,W,H);
		let size = config.gridSize * 2;
		gui.fillStyle = 'blue';
		gui.fillRect(this.x,this.y,size,size);
	},
	update: function(){
		if (this.btnUp){
			this.y -= config.gridSize;
		}
		else if(this.btnDown){
			this.y += config.gridSize;
		}
		else if(this.btnLeft){
			this.x -= config.gridSize;
		}
		else if(this.btnRight){
			this.x += config.gridSize;
		}
		this.draw();
	}
};
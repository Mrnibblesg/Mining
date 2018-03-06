addEventListener("keydown",function(e){
	switch (e.keyCode){
		case 87:{
			plr.btnUp = true;
			break;
		}
		case 83:{
			plr.btnDown = true;
			break;
		}
		case 65:{
			plr.btnLeft = true;
			break;
		}
		case 68:{
			plr.btnRight = true;
			break;
		}
	}
	plr.update();
});

addEventListener("keyup",function(e){
	switch (e.keyCode){
		case 87:{
			plr.btnUp = false;
			break;
		}
		case 83:{
			plr.btnDown = false;
			break;
		}
		case 65:{
			plr.btnLeft = false;
			break;
		}
		case 68:{
			plr.btnRight = false;
			break;
		}
	}
});
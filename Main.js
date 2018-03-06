'use strict';
let canvas = document.getElementById('myCanvas');
let canvas2 = document.getElementById('gui');
const W = window.innerWidth;
const H = window.innerHeight;
canvas.width = canvas2.width = W;
canvas.height = canvas2.height = H;

let c = canvas.getContext('2d');
let gui = canvas2.getContext('2d');

let blocks = [];

let blockFitH = Math.ceil(H / config.gridSize);
let blockFitW = Math.ceil(W / config.gridSize);

function generateLand(){
	blocks = [];
	for (let x = 0; x <= blockFitW; x++){
		for (let y = 15; y <= blockFitH; y++){
			let xPos = x * config.gridSize;
			let yPos = y * config.gridSize;
			
			
			
			if (y === 15){
				blocks.push(new Block(xPos,yPos,ID.GRASS));
				continue;
			}
			
			let id;
			//formula for generating stone or dirt
			//In the numerator, the 200 is the point at which the dirt turns to stone. A lower number means it happens sooner.
			//In the denominator, the first number is the size of the layer transition from dirt to stone. Higher is larger.
			//The random number part somewhat extends the layer transition downwards, and is low in amount of dirt.
			
			let stoneChance = (y - 200) / (75 + (Math.random() * 100 - 50));
			
			//Generates random stones/dirt from y=50 to y=300.
			if (Math.random() < 0.003 && y < 300 && y > 50){
				stoneChance *= -1;
			}
			if (Math.random() < 0.0001){
				blocks.push(new Block(xPos,yPos,ID.ORE));
				continue;
			}
			
			if (Math.random() > stoneChance){
				id = ID.DIRT;
			}
			else{
				id = ID.STONE;
			}
			
			blocks.push(new Block(xPos,yPos,id));
		}
	}
}

generateLand();
function drawLand(){
	c.fillStyle = 'lightblue';
	c.fillRect(0,0,W,H);
	for (let block of blocks){
		block.draw();
	}
	plr.draw();
}
drawLand();
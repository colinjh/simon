console.log("hello world")

// Left Arrow Red
// Up Arrow Blue
// Right Yellow
// Down Green
var compMove = [];
var playerMove = [];

var currentPlayer = 

var tapSound = new Audio('sounds/1.ogg');
var snapSound = new Audio('sounds/2.ogg');
var waterSound = new Audio('sounds/3.ogg');
var stapleSound = new Audio('sounds/4.ogg');  


var simon = {
		
		redRepsonse: function() {
			$('#red').css('opacity', 1).delay(500).queue(function(next){
			$('#red').css("opacity", 0.5);
			next();
			tapSound.play();
			})
		},

		blueResponse: function() {	
			$('#blue').css('opacity', 1).delay(500).queue(function(next){
			$('#blue').css("opacity", 0.5);
			next();
			snapSound.play();
			}) 
       	},

       	yellowResponse: function() {
       		$('#yellow').css('opacity', 1).delay(500).queue(function(next){
			$('#yellow').css("opacity", 0.5);
			next();
			waterSound.play();
			})
       	},

       	greenResponse: function() {
       		$('#green').css('opacity', 1).delay(500).queue(function(next){
			$('#green').css("opacity", 0.5);
			next();
			stapleSound.play();
			}) 
       	},	


		keypress: function() {
			$(document).keydown(function(e) {
	    		if(e.which === 37) {
	       			 //Red Left
	       			 simon.redRepsonse();
	       		}else if (e.which === 38) {
	       			//Blue Up
	       			simon.blueResponse();
	       		}else if (e.which === 39) {
	       			//Yellow Right
	       			simon.yellowResponse();
	       		}else if (e.which === 40) {	
	       			//Green Down
	       			simon.greenResponse();
	       		};	 
	    	})
	    },
		compTurn: function() {
			var x = Math.ceil(Math.random()*4);
			compMove.push(x);

			switch ( x ) {
				case 1: this.redRepsonse();
						break;
				case 2: this.blueResponse();
						break;
				case 3: this.yellowResponse();
						break;
				case 4: this.greenResponse();
						break;
			}
		},
		playerTurn: function() {
			$(document).keydown(function(e) {
	    		if(e.which === 37) {
	    			console.log("left push")
	    			var x = 1;
	       			playerMove.push(x);
	     
	       		}else if (e.which === 38) {
	       			var x = 2;
	       			playerMove.push(x);
	       		
	       		}else if (e.which === 39) {
	       			var x = 3;
	       			playerMove.push(x);
	       			
	       		}else if (e.which === 40) {
	       			var x = 4;
	       			playerMove.push(x);	
	       			
	       			
	       		};	 
	    	})
	    },
	    winner: function() {
	    	if (playerMove === compMove) {
	    		playerTurn();
	    	}
	    }

}
$(document).ready(function() { 
		simon.keypress();
		simon.playerTurn();

});





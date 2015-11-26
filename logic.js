console.log("hello world")

// Left Arrow Red
// Up Arrow Blue
// Right Yellow
// Down Green
var compMove = [];
var playerMove = [];
var Rounds = 0;
var highestScore = 0;




//var currentPlayer = ;

var Sound1 = new Audio('sounds/1.ogg');
var Sound2 = new Audio('sounds/2.ogg');
var Sound3 = new Audio('sounds/3.ogg');
var Sound4 = new Audio('sounds/4.ogg');  


var simon = {
		
		redRepsonse: function() {
			$('#red').css('opacity', 1).delay(500).queue(function(next){
				$('#red').css("opacity", 0.5);
				next();
				Sound1.play();
			});
		},

		blueResponse: function() {	
			$('#blue').css('opacity', 1).delay(500).queue(function(next){
				$('#blue').css("opacity", 0.5);
				next();
				Sound2.play();
			});
       	},

       	yellowResponse: function() {
       		$('#yellow').css('opacity', 1).delay(500).queue(function(next){
				$('#yellow').css("opacity", 0.5);
				next();
				Sound3.play();
			});
       	},

       	greenResponse: function() {
       		$('#green').css('opacity', 1).delay(500).queue(function(next){
				$('#green').css("opacity", 0.5);
				next();
				Sound4.play();
			});
       	},	


		playerTurn: function( e ) {

			if ( !e ) { return; }
			var x;
			// $(document).keydown(function(e) {
			
    		if(e.which === 37) {
       			//Red Left
       			simon.redRepsonse();
				x = 1;
       		}else if (e.which === 38) {
       			//Blue Up
       			simon.blueResponse();
       			x = 2;
       		}else if (e.which === 39) {
       			//Yellow Right
       			simon.yellowResponse();
       			x = 3;
	       		}else if (e.which === 40) {	
       			//Green Down
       			simon.greenResponse();
       			x = 4;
       		};	 
       		if ( x ) { 
       			playerMove.push( x ) 
       		};
		    console.log('checking array lengths', playerMove.length, compMove.length);
			if (playerMove.length === compMove.length) {
				console.log("New turn");
				setTimeout(function(){simon.compTurn();}, 1500);
			};
		    	// }
		    	// })
	    },
		compTurn: function() {
			Rounds ++;
			$('h2.score').text('Round:  ' +Rounds);
			if (compMove.toString("") !== playerMove.toString("")){
					console.log('you lose');
					simon.highScore();
					simon.gameOver();
				}else{
					if (compMove.length === 0) {
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
						this.playerTurn();				
					}else{
						var x = Math.ceil(Math.random()*4);
						compMove.push(x);
						this.compReplay();
					}
			}		
		},
	    compReplay: function() {
	    	var that = this;

	    	for (var i = 0; i < compMove.length; i++) {
		    	var x = compMove[i];

		    	// IIFE (Immediately Invoked Function Expression - Closure)

		    	(function (i, x, that) {

		    		window.setTimeout(function () {

				    	switch ( x ) {
							case 1: that.redRepsonse();
									break;
							case 2: that.blueResponse();
									break;
							case 3: that.yellowResponse();
									break;
							case 4: that.greenResponse();
									break;
						}

		    		}, 650 * i );

		    	})(i, x, that);

			}	
			playerMove = [];		
	    },
	    gameOver: function() {
	    	console.log("game over");
	    	$('p').text("GAME OVER");
	    },
	    newgame: function() {
	    	$('#reload').on('click', function(){
	    		console.log("new game");
	    		$('p').empty();
	    		compMove = [];
	    		playerMove = [];
	    		Rounds = 0;
	    		simon.startGame();	
	    	})	
	    },
	    highScore: function() {
	    	if(Rounds > highestScore){
	    		highestScore = Rounds;
	    		console.log("high score");
	    		$('h3').text("High Score:  " +(highestScore-1));
	    	}	
	    },
	    startGame: function() {
	    	$('#start').on('click', function(){
	    		setTimeout(function(){simon.compTurn();}, 2000);
	    	})
	    }
}
$(document).ready(function() { 
		simon.startGame();
		simon.newgame();
	$(document).keydown(function(e) {
		simon.playerTurn( e );
	});
	

});



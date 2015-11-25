console.log("hello world")

// Left Arrow Red
// Up Arrow Blue
// Right Yellow
// Down Green
var compMove = [];
var playerMove = [];

var tapSound = new Audio('sounds/1.ogg');
var snapSound = new Audio('sounds/2.ogg');
var waterSound = new Audio('sounds/3.ogg');
var stapleSound = new Audio('sounds/4.ogg');  


var simon = {
		
		redRepsonse: function


		keypress: function() {
			 $(document).keydown(function(e) {
    		if(e.which === 37) {
       			 //Red Left
       	$('#red').css('opacity', 1).delay(500).queue(function(next){
		$('#red').css("opacity", 0.5);
		next();
		tapSound.play();
	})
			}else if (e.which === 38) {
       			//Blue Up
       			$('#blue').css('opacity', 1).delay(500).queue(function(next){
		$('#blue').css("opacity", 0.5);
		next();
		snapSound.play();
	}) 
       		}else if (e.which === 39) {
       			//Yellow Right
       			$('#yellow').css('opacity', 1).delay(500).queue(function(next){
		$('#yellow').css("opacity", 0.5);
		next();
		waterSound.play();
	})
       		}else if (e.which === 40) {	
       			//Green Down
       			$('#green').css('opacity', 1).delay(500).queue(function(next){
		$('#green').css("opacity", 0.5);
		next();
		stapleSound.play();
	}) 
       		}

			}); 
    
			},
		compMove: function() {
			x = Math.ceil(Math.random()*4);
			compMove.push(x);
		}

}
$(document).ready(function() { 
		simon.keypress();

});





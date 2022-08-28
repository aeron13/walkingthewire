//enemy si muove e punti

//decide destra o sinistra; destra > 0.5
var decidi = 0.6;

//tempo tra un enemy ed un altro
var timer;

var punti = 0;
//dopo quanti punti +e- si perde
var losePoint = 3;

var enemycounter = 0;
//dopo quanti enemy si vince
var victoryPoint = 10;

function randomLeft() {
	if(decidi > 0.5) {
		return Math.random()*10+70;
	} else {
		return Math.random()*10+20;
	}
}

function objmuove() {
		
	// va se il gioco non è fermo
	if(gamePaused == 0) {
		if (enemycounter == victoryPoint) {
			victory();
		} else {
			//var per la barra
			if(punti == -1) {perdi = 1;}
			else if(punti == 1) {perdi = 0;}

			//enemy
			enemycounter = enemycounter + 1;
			var	lastTouchcounter = touchcounter;
			var left = randomLeft();

			//cambia il left
			jQuery("#cont").get(0).style.setProperty("--left", left+"%");

			if(decidi > 0.5) {
				jQuery(".obj").addClass("moveyR")
			jQuery("#cont").addClass("movexR")
			} else {
				jQuery(".obj").addClass("moveyL")
			jQuery("#cont").addClass("movexL")
			}

			//genera un altro decidi
			decidi = Math.random();

			setTimeout(function()  {
				if(punti < losePoint && punti > -losePoint) {
					//punti
					if(lastTouchcounter == touchcounter) {
						punti = punti + 1;
						appenatoccato = 1;
						setTimeout(function() {
							appenatoccato = 0;
						}, 1000)
						updateBarra();
						if(punti == losePoint) {
							jQuery(".obj").removeClass("moveyR").removeClass("moveyL")
							jQuery("#cont").removeClass("movexR").removeClass("movexL")

							gameover();
						}
						console.log(punti);
					}

					//callback
					setTimeout(function() {
						jQuery(".obj").removeClass("moveyR").removeClass("moveyL")
						jQuery("#cont").removeClass("movexR").removeClass("movexL")
						//nuovo tempo prima del prossimo enemy
						if(punti < losePoint) {
							nuovoTimer();
							setTimeout(objmuove, timer)
						}
					}, 1100)

				} else {
					jQuery(".obj").removeClass("moveyR").removeClass("moveyL")
					jQuery("#cont").removeClass("movexR").removeClass("movexL")

					gameover();
				}
			}, 1400)
		}
	}
}

//genera un timer random
function nuovoTimer() {
	timer = Math.floor(Math.random()*15)*500+2000;
}

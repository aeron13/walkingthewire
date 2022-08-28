//victory and gameover functions

//gameover
function gameover() {
	let nero = "<p id='nero' class='reload'> </p>";
	jQuery("body").removeClass("game").append(nero);
	jQuery("#start").fadeIn(0).addClass("bianco");
	lampeggiostart = setInterval(function(){lampeggio(jQuery("#start"))}, 3000);

	if(punti < 0 ) {
		jQuery("#nero").text("You are worrying too much!")
	} else if(punti > 0) {
		jQuery("#nero").text("You can't always dodge problems.")
	}
	onclickReload();
}

//victory
function victory() {
	let bianco = "<p id='bianco' class='reload'>Cheers! You kept the balance</p>";
	//jQuery("#comments").fadeIn();

	let footer = "<p class='myfoot my1'>A game by <br><span id='name'>Margherita Magatti</span></p> <p class='myfoot my2'>Corso di Laurea in<br>Design della Comunicazione<br>Politecnico di Milano</p>"
	jQuery("body").removeClass("game").addClass("vittoria").append(bianco, footer);
	onclickReload();
	jQuery("#cerchio").remove();
}

var primamorte = 0;

function onclickReload() {
	gamePaused = 1;
	jQuery(".player").fadeOut(0);
	jQuery("#cont").fadeOut(0);
	jQuery("#linea").fadeOut(0);
	jQuery(".lose").fadeOut(0).text("");
	jQuery("#barra").fadeOut();
	jQuery("#worry").fadeOut(0);

	objmuove();
}

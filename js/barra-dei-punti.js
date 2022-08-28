var perdi = 2;

function createBarra() {
	var barra = "<div id='barra'><div id='barrasu'></div></div>";
	jQuery("body").append(barra);
}

function updateBarra() {
	jQuery(".lose").text(punti)
	if(punti < 0) {
		jQuery("#barrasu").removeClass("vincic").addClass("perdic")
	} else if(punti > 0) {
		jQuery("#barrasu").removeClass("perdic").addClass("vincic")

	} else if (punti == 0 && perdi == 1) {

		jQuery("#barrasu").addClass("perdic").removeClass("vincic")

	} else if(punti == 0 && perdi == 0 ) {
		jQuery("#barrasu").removeClass("perdic").addClass("vincic")
	}

	//animazione della barra
	jQuery("#barrasu").animate({
		width: Math.abs(punti)*25+"px",
		opacity:  Math.abs(punti)*0.3,
	}, 500)
}

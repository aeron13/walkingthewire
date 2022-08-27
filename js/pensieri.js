var worries = [];

	function onHit() {
		if(punti > -3) {
			var worry = "<div id='worry'</div>";
		jQuery("body").append(worry);

			//rigenera l'array se è esaurito
			nuovoWorries();
			//pesca un worry a caso...
			var numero = Math.floor(Math.random()*worries.length);
jQuery("#worry").fadeIn(0).text(worries[numero]);
			//...e lo elimina
worries.splice(numero, 1);

		setTimeout(function() {
			jQuery("#worry").fadeOut().delay(500).remove();
		}, 1300)
		}
	}

	//rinnova l'array
	function nuovoWorries() {
		if(worries.length == 0) {
			worries = [
		"Love isn't real",
		"There's nothing after death",						 
		"You could die tomorrow",
		"There's always someone better than you",
		"Friends won't always be there",
		"No one will ever understand you",
		"You're just a dot in the universe",
		"Certainty doesn't exist"
	];
		}
	}

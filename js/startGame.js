var obj = "<div id='cont'><div class='obj'></div></div>";

var player = "<div class='player walk'></div>";
var linea = "<div id='linea'></div>";

var triggerzone = "<div id='cerchio'></div>";

var lampeggioplayer;

jQuery("body").append(linea, obj, player, triggerzone).addClass("noSelect")

function startGame() {
    if(gamePaused == 0) {
        console.log("primoClick:"+primoClick)
        jQuery("#title").fadeOut(0);
        jQuery("#start").fadeOut(0);
        clearTimeout(lampeggiostart)
        jQuery("body").addClass("game");
        jQuery(".player").fadeIn(0);
        jQuery("#cont").fadeIn(0);
        jQuery("#linea").fadeIn(0);

        if(primoClick == 0) {

            jQuery("#title").remove();
            detectCollision();
            playerClick();
            createBarra();


            //jQuery("#cerchio").addClass("tutor")
            jQuery(".lose").fadeIn().text("Tap to crouch")
            lampeggioplayer = setInterval(function(){lampeggio(jQuery(".player"))}, 3000);
        }
        
        nuovoWorries();
    }
}
	

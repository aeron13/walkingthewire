//click del player

var controlClick = 0;

var primoClick = 0;

//funzione

function playerClick() {
    if(gamePaused == 0) 
    {
        jQuery("#cerchio").on("click", function() 
        {
            if(gamePaused == 0) {

                if(controlClick == 0) { 
                    
                    controlClick = 1;
                    
                    if(primoClick == 0) {
                        primoClick = 1;
                        clearTimeout(lampeggioplayer);
                        jQuery(".lose").text("") //jQuery("#cerchio").removeClass("tutor");
                        jQuery("#barra").fadeIn();
                        setTimeout(objmuove, 2000);
                    }			
    
                    jQuery("#cerchio").toggleClass("piccolo")
                    jQuery(".player").toggleClass("walk").toggleClass("crouchd")

                    setTimeout(function(){
                        jQuery(".player").toggleClass("walk").toggleClass("crouchd")
                        jQuery("#cerchio").removeClass("piccolo");
                        controlClick = 0;
                    }, 450)
                }
            }
        })
    }
}

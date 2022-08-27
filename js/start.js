var gamePaused = 1;
var statointro = 1;
var lampeggiostart;

function intro() {
        if (statointro == 1 && load == 1) {
        //intro 1
            var introtext = "<p class='reload' id='introtext'>Solution <br><span id='dopo'> lies in balance.</span></p>"

            jQuery("body").append(introtext);
            setTimeout(function() {
                jQuery("#dopo").css({opacity: "1", transition: "0.8s"});
            }, 1000)
            setTimeout(function() {
                statointro = 2;
                intro();
            }, 3500)

    } else if (statointro == 2 ) {
        jQuery("#introtext").remove();

        //titolo
        var title = "<div id='title'></div>";
        var start = "<div id='start'><p> >> &nbsp start &nbsp << </p></div>";

        jQuery("body").append(title, start).addClass("start")

        lampeggiostart = setInterval(function(){lampeggio(jQuery("#start"))}, 3000);

        jQuery("#start").click(function() {
            if(gamePaused == 1) {
                gamePaused = 0;
    jQuery("#barra").fadeIn();
    jQuery(".reload").remove();
    jQuery("#nome1").remove();
    jQuery("#start").removeClass("bianco");
    jQuery("body").removeClass("vittoria start").addClass("game");

        if(primoClick == 1) {
            jQuery(".lose").fadeIn();
            nuovoTimer();
        setTimeout(objmuove, timer)
        } else {
    jQuery("#start").text("")
  }

        //reset delle variabili
        enemycounter = 0;
        punti = 0;
        touchcounter = 0;

        updateBarra();
        startGame();
            }
})
    }
}

intro();

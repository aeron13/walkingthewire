//collision

var touchcounter = 0;
var appenatoccato = 0;

function detectCollision() {
    if(gamePaused == 0) {

        function collision(div1, div2) {
            let x1 = div1.offset().left;
            let y1 = div1.offset().top;
            let h1 = div1.outerHeight(true);
            let w1 = div1.outerWidth(true);
            let b1 = y1 + h1;
            let r1 = x1 + w1;
            let x2 = div2.offset().left;
            let y2 = div2.offset().top;
            let h2 = div2.outerHeight(true);
            let w2 = div2.outerWidth(true);
            let b2 = y2 + h2;
            let r2 = x2 + w2;

            if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {

            } else {
                if(appenatoccato == 0) {
                    //evita il doppio tocco
                    appenatoccato = 1;
                    setTimeout(function() {
                        appenatoccato = 0
                    }, 1000)
                    touchcounter = touchcounter+1;
                    jQuery(".info").fadeOut();
                    punti = punti - 1;
                    updateBarra();
                    console.log(punti)
                    onHit();
                }
            }
        }

        setInterval(function() {
            collision(jQuery('#cerchio'), jQuery('.obj'));
        }, 200);
    }
}

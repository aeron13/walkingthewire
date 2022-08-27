function lampeggio(elem) {
    elem.fadeOut(0);
    setTimeout(function() {
        elem.fadeIn(0)
    }, 200)

    //secondo lampo
    setTimeout(function() {
        elem.fadeOut(0);
    setTimeout(function() {
        elem.fadeIn(0)
    }, 200)
    }, 400)
}

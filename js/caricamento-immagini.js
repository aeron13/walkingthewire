var load = 0;

var imagesSrc = [
	"./assets/sfondostart.svg",
	"./assets/spritebird.svg",
	"./assets/spritebirdL.png",
	"./assets/spritesheet-crouch.png",
	"./assets/spritesheet-walk.png",
	"./assets/Walking_The_Wire.png"
]


imagesSrc.forEach((src) => {
	let img = new Image();
	img.setAttribute("src", src)

	img.onload = function() {
		load++;
		if (load == imagesSrc.length) 
		{
			intro();
		}
	}
	if (img.complete) img.onload();
})
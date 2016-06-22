var canvas = $('#canvas')[0];
var context = canvas.getContext('2d');
var img = document.getElementById("img_address");
var img_width,img_height;
var image = new Image();

image.onload = function() {
	img_width = img.clientWidth;
	img_height = img.clientHeight;
	img.setAttribute('class','hide');
	canvas.removeAttribute('class');
	canvas.setAttribute('width',img_width);
	canvas.setAttribute('height',img_height);
    context.drawImage(image, 0, 0, img_width,img_height);
};
image.crossOrigin = "anonymous";
image.src = $('#img_address').attr('src');

//set all input value to 0
$("input[type='range']").val(0);
//tools edit
$("input[type='range']").change(function(){
	var val_brightness = $('#brightness').val();
	var val_vibrance  =$('#vibrance').val();
	var val_hue =$('#hue').val();
	var val_clip = $('#clip').val();
	var val_Stactblur = $('#stactblur').val();
	var val_contrast = $('#contrast').val();
	var val_saturation = $('#saturation').val();
	var val_exposure = $('#exposure').val();
	var val_sepia = $('#sepia').val();
	var val_Noise= $('#noise').val();
	var val_Sharpen= $('#sharpen').val();
	var clone = canvas.cloneNode(true);
	    // Clone the image stored in the canvas 
	    clone.getContext('2d').drawImage(canvas, 0, 0, img_width, img_height);
	
	    var theParent = $("#photo")[0];
	    theParent.removeChild($('#canvas')[0]);
	    theParent.appendChild(clone);
		Caman(clone, function () {
			
			this.revert();
			this.brightness(val_brightness);
			this.vibrance(val_vibrance);
			this.hue(val_hue);
			this.clip(val_clip);
			this.stackBlur(val_Stactblur);
		  	this.contrast(val_contrast);
		  	this.saturation(val_saturation);
		  	this.exposure(val_exposure);
		  	this.sepia(val_sepia);
		  	this.noise(val_Noise);
		  	this.sharpen(val_Sharpen);
		  	this.render();
		})
		  	
		
});


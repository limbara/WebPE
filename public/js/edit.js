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
$("#gamma").val(1);

//tools edit
$("input[type='range']").change(function(){
	var val_gamma = $('#gamma').val();
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
	// RGB
	var val_red = $('#red').val();
	var val_blue = $('#blue').val();
	var val_green = $('#green').val();
	var clone = canvas.cloneNode(true);
	    // Clone the image stored in the canvas 
	    clone.getContext('2d').drawImage(canvas, 0, 0, img_width, img_height);
	
	    var theParent = $("#photo")[0];
	    theParent.removeChild($('#canvas')[0]);
	    theParent.appendChild(clone);
		Caman(clone, function () {
			
			this.revert();
			this.gamma(val_gamma);
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
		  	this.channels({
			  	red : val_red, 
				blue : val_blue,
				green : val_green
		  	})
		  	this.render(function(){
				var base64 = this.toBase64();
				document.getElementById('base').value = base64;
			  })
		})
		  	
		
});

$('#filter_original').click(function(){
	var clone = canvas.cloneNode(true);
	    // Clone the image stored in the canvas 
	    clone.getContext('2d').drawImage(canvas, 0, 0, img_width, img_height);
	
	    var theParent = $("#photo")[0];
	    theParent.removeChild($('#canvas')[0]);
	    theParent.appendChild(clone);
		Caman(clone, function () {
			this.revert();
			this.brightness(0);
			this.vibrance(0);
			this.hue(0);
			this.clip(0);
			this.stackBlur(0);
		  	this.contrast(0);
		  	this.saturation(0);
		  	this.exposure(0);
		  	this.sepia(0);
		  	this.noise(0);
		  	this.sharpen(0);
		  	this.render(function(){
				var base64 = this.toBase64();
				document.getElementById('base').value = base64;
			  })
		})
})

$('#filter_sepia').click(function(){
	var clone = canvas.cloneNode(true);
	    // Clone the image stored in the canvas 
	    clone.getContext('2d').drawImage(canvas, 0, 0, img_width, img_height);
	
	    var theParent = $("#photo")[0];
	    theParent.removeChild($('#canvas')[0]);
	    theParent.appendChild(clone);
		Caman(clone, function () {
			this.revert();
			this.sepia(50);
			this.render(function(){
				var base64 = this.toBase64();
				document.getElementById('base').value = base64;
			  })
		})
})
		

$('#filter_greyscale').click(function(){
	var clone = canvas.cloneNode(true);
	    // Clone the image stored in the canvas 
	    clone.getContext('2d').drawImage(canvas, 0, 0, img_width, img_height);
	
	    var theParent = $("#photo")[0];
	    theParent.removeChild($('#canvas')[0]);
	    theParent.appendChild(clone);
		Caman(clone, function () {
			this.revert();
			this.greyscale();
			this.render(function(){
				var base64 = this.toBase64();
				document.getElementById('base').value = base64;
			  })
		})
})

$('#filter_vintage').click(function(){
	var clone = canvas.cloneNode(true);
	    // Clone the image stored in the canvas 
	    clone.getContext('2d').drawImage(canvas, 0, 0, img_width, img_height);
	
	    var theParent = $("#photo")[0];
	    theParent.removeChild($('#canvas')[0]);
	    theParent.appendChild(clone);
		Caman(clone, function () {
			this.revert();
			this.brightness(10);
		  	this.saturation(-30);
			this.sepia(20);
			this.render(function(){
				var base64 = this.toBase64();
				document.getElementById('base').value = base64;
			  })
		})
})

$('#filter_sharp').click(function(){
	var clone = canvas.cloneNode(true);
	    // Clone the image stored in the canvas 
	    clone.getContext('2d').drawImage(canvas, 0, 0, img_width, img_height);
	
	    var theParent = $("#photo")[0];
	    theParent.removeChild($('#canvas')[0]);
	    theParent.appendChild(clone);
		Caman(clone, function () {
			this.revert();
		  	this.sharpen(100);
			this.render(function(){
				var base64 = this.toBase64();
				document.getElementById('base').value = base64;
			  })
		})
})

$('#filter_negative').click(function(){
	var clone = canvas.cloneNode(true);
	    // Clone the image stored in the canvas 
	    clone.getContext('2d').drawImage(canvas, 0, 0, img_width, img_height);
	
	    var theParent = $("#photo")[0];
	    theParent.removeChild($('#canvas')[0]);
	    theParent.appendChild(clone);
		Caman(clone, function () {
			this.revert();
		  	this.invert();
			this.render(function(){
				var base64 = this.toBase64();
				document.getElementById('base').value = base64;
			  })
		})
})

$('#filter_colder').click(function(){
	var clone = canvas.cloneNode(true);
	    // Clone the image stored in the canvas 
	    clone.getContext('2d').drawImage(canvas, 0, 0, img_width, img_height);
	
	    var theParent = $("#photo")[0];
	    theParent.removeChild($('#canvas')[0]);
	    theParent.appendChild(clone);
		Caman(clone, function () {
			this.revert();
			this.brightness(5);
		  	this.channels({
				  blue : 25
			  })
			this.render(function(){
				var base64 = this.toBase64();
				document.getElementById('base').value = base64;
			  })
		})
})


$('#filter_matte').click(function(){
	var clone = canvas.cloneNode(true);
	    // Clone the image stored in the canvas 
	    clone.getContext('2d').drawImage(canvas, 0, 0, img_width, img_height);
	
	    var theParent = $("#photo")[0];
	    theParent.removeChild($('#canvas')[0]);
	    theParent.appendChild(clone);
		Caman(clone, function () {
			this.revert();
			this.clip(10);
		  	this.saturation(30);
		  	this.channels({
			  	red : 30, 
				blue : 30,
				green : 30
		  	})
		  	this.render(function(){
				var base64 = this.toBase64();
				document.getElementById('base').value = base64;
			  })
		})
})
		
		

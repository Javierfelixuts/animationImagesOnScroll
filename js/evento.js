
var contentImages = document.querySelectorAll('.content-images');

window.onscroll = function(){
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
		for (var i = 0; i < contentImages.length; i++) {
			if (scroll >= 200 || scroll >= 800) {

    		contentImages[i].classList.remove("down");
    		contentImages[i].classList.add("up");
    	

    		}
    		else{
    		contentImages[i].classList.add("down");
    		contentImages[i].classList.remove("up");
    		}
		}

		

	}
	

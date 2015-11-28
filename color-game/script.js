$(document).ready(function() {
	$("#sixth").click(function() {
		alert("HA! Enjoy this fart noise");
	});
	});


	function play(sound){
	   var audio = document.getElementById("audio");
	    audio.setAttribute('src', sound);
	   audio.play();
	}





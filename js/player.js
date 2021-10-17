function logic() {
	
	document.getElementById("data-player").innerHTML = '<audio id="player-general" autoplay="1"><source src="https://node-01.zeno.fm/6rmcux0kx98uv?rj-ttl=5&amp;rj-tok=AAABfIbDI7UA1Q7A7jU3yWdFQA" type="audio/mpeg"></audio>';
		
	var player = document.getElementById("player-general");
	var mute = false;
	var isplaying = true;
	var lastVolume;
	
	player.volume =  5 / 100;
	
	$("#pp").attr("class", "glyphicon glyphicon-stop");

	$('#vol-control').on('input', function() { player.volume = $(this).val() / 100; });

	$("#mute").click(function() {
		
		if (mute == false) {
		
			lastVolume = player.volume;
			player.volume = 0;
			player.mute = true;
			mute = true;
			
			document.getElementById("vol-control").value = 0;
			
			$("#mute").attr("class", "glyphicon glyphicon-volume-off");
			
		} else {
		
			player.mute = false;
			player.volume = lastVolume;
			mute = false;
			
			document.getElementById("vol-control").value = lastVolume * 100;
			
			$("#mute").attr("class", "glyphicon glyphicon-volume-up");
			
		}
		
	});

	$("#pp").click(function() {
		
		if(isplaying == true) {
			
			isplaying = false;
			$("#pp").attr("class", "glyphicon glyphicon-play");
			player.pause();
			
		} else {
		
			isplaying = true;
			$("#pp").attr("class", "glyphicon glyphicon-stop");
			player.play();
			
		}
		
	});
	
}
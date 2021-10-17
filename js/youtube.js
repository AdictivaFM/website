/*
* Código desarrollado por Arcvalx (Sergio Casares)
* Copyright © Adictiva FM 2021
*
* Lógica para reproducción de stream/video en
* página principal de la radio Adictiva FM©
*/
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var mute = false;
var isplaying = true;
var lastVolume;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('loader', {
		videoId: 'Yd-cg4xQdGE',
		width: '0',
		height: '0',
		playerVars: {
			autoplay: 1,
			controls: 0,
			showinfo: 0,
			modestbranding: 0,
			loop: 0,
			fs: 0,
			cc_load_policty: 0,
			iv_load_policy: 3,
			autohide: 1,
			rel: 0
		},
		events: {
			onReady: logic
		}
	});
}

function logic() {
	player.setVolume(5);
	$('#vol-control').on('input', function() { player.setVolume( $(this).val() ); });
	$("#mute").click(function() {
		if(player.isMuted() == false && player.getPlayerState() == 1 && mute == false) {
			lastVolume = player.getVolume();
			player.setVolume(0);
			player.mute();
			mute = true;
			document.getElementById("vol-control").value = 0;
			$("#mute").attr("class", "glyphicon glyphicon-volume-off");
		} else {
			player.unMute();
			player.setVolume(lastVolume);
			document.getElementById("vol-control").value = lastVolume;
			$("#mute").attr("class", "glyphicon glyphicon-volume-up");
			mute = false;
		}
	});
	
	$("#pp").click(function() {
		if(player.getPlayerState() == 1 && isplaying == true) {
			player.stopVideo();
			$("#pp").attr("class", "glyphicon glyphicon-play");
			isplaying = false;
		} else {
			player.playVideo();
			$("#pp").attr("class", "glyphicon glyphicon-stop");
			isplaying = true;
		}
	});
}
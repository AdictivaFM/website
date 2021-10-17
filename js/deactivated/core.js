var isCtrl = false;

document.onkeyup = function(e) {				
	if (e.which == 17)
		isCtrl = false;
}

document.onkeydown = function(e) {
	if (e.which == 17)
		isCtrl = true;
	if ((e.which == 85) || (e.which == 67) && (isCtrl == true)) {
		return false;
	}
}

var isNS = (navigator.appName == "Netscape") ? 1 : 0;
if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);

function mischandler(){	
	return false;
}

function mousehandler(e){
	var myevent = (isNS) ? e : event;
	var eventbutton = (isNS) ? myevent.which : myevent.button;
	if ((eventbutton==2) || (eventbutton==3)) return false;
}

document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;

document.onkeypress = function (event) {
	event = (event || window.event);
	if (event.keyCode == 123) {
		return false;
	}
}
	
document.onmousedown = function (event) {
	event = (event || window.event);
	if (event.keyCode == 123) {
		return false;
	}
}
	
document.onkeydown = function (event) {
	event = (event || window.event);
	if (event.keyCode == 123) {
		return false;
	}
}

function disableselect(e) {
	return false;
}

function reEnable() {
	return true;
}

document.onselectstart = new Function ("return false");
document.oncontextmenu = new Function ("return false");

if (window.sidebar) {
	document.onmousedown = disableselect;
	document.onclick = reEnable;
}

function rtclickcheck(keyp) {
	if (navigator.appName == "Netscape" && keyp.which == 3) {
		return false;
	}
	if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) {
		return false;
	}
}

document.onmousedown = rtclickcheck;

var player;

if (!window['YT']) { var YT = { loading: 0, loaded: 0 }; }
if (!window['YTConfig']) { var YTConfig = { 'host': 'http://www.youtube.com' }; }
if (!YT.loading) { YT.loading = 1; (function() {
	var l = [];
	YT.ready = function(f) { if (YT.loaded) { f(); } else { l.push(f); } };
	window.onYTReady = function() { YT.loaded = 1; for (var i = 0; i < l.length; i++) { try { l[i](); } catch (e) {} } };
	YT.setConfig = function(c) { for (var k in c) { if (c.hasOwnProperty(k)) { YTConfig[k] = c[k]; } } };
	var a = document.createElement('script');
	a.type = 'text/javascript';
	a.id = 'www-widgetapi-script';
	a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vfllf5xrd/www-widgetapi.js';
	a.async = true;
	var b = document.getElementsByTagName('script')[0];
	b.parentNode.insertBefore(a, b);
})(); }

function onYouTubeIframeAPIReady() {
	player = new YT.Player('loader', {
		//Z8YEKHcMYns
		//lCOF9LN_Zxs «
		videoId: 'lCOF9LN_Zxs',
		width: '0',
		height: '0',
		playerVars: {
			autoplay: 1,
			controls: 1,
			showinfo: 0,
			modestbranding: 1,
			loop: 1,
			fs: 0,
			cc_load_policty: 0,
			iv_load_policy: 3,
			autohide: 0
		},
		events: {
			onReady: initialize,
			onStateChange: state
		}
	});
}

function state() {
	$('#name').text(player.getVideoData().title);
}

function initialize() {
	player.setVolume(5);
	$('#name').text(player.getVideoData().title);
	$('#vol-control').on('input', function() {
		player.setVolume($(this).val());
	});
	$('#timers').text(formatTime(player.getCurrentTime()) + " / " + formatTime(player.getDuration()));
	if (player.getVolume() > 0) {
		$('#vol-range').text("Volume: 5");
	}
	setInterval(function() {
		$('#timers').text(formatTime(player.getCurrentTime()) + " / " + formatTime(player.getDuration()));
	}, 1000);
	actualizar();
}

function formatTime(time) {
	time = Math.round(time);
	var minutes = Math.floor(time / 60), seconds = time - minutes * 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	return minutes + ":" + seconds;
}

function actualizar() {
	setInterval(() => {
		$('#vol-range').text("Volume: "+player.getVolume());
	}, 1);
}
function prev() { player.previousVideo() }
function next() { player.nextVideo() }
// Creado por DJBiokinetix (Sergio Casares)
// Programador de CSS, Html, Java y JavaScript

// Para hacer funcionar este script...
// solo es necesario introducir este codigo html en tu pagina
// en el codigo <head>
// <script type="text/javascript" src="nc.js"></script>

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

if (navigator.appName == "Netscape") {
	document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);
}

function mischandler(){
    return false;
}

function mousehandler(e){
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
	if ((eventbutton==2) || (eventbutton==3)) { 
		return false;
	}
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

function disableselect() {
	return false;
}

function reEnable() {
	return true;
}

document.onselectstart = new Function ("return false");
document.oncontextmenu = new Function ("return false");

if (window.sidebar){
	document.onmousedown = disableselect();
	document.onclick = reEnable();
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
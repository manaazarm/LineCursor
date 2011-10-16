function startManaLine(){
	if($("#lineElement").length>0){return;}
	var line=$("<div id='lineElement'></div>");
	var pageWidth= $("body").css("width");
	line.css("width", pageWidth);
	line.css("height", 1);
	line.css("background-color", "red");
	line.css("position", "absolute");
	line.css("left", 0);
	line.css("top", 100);
	line.css("z-index", 1000000);
	$("body").append(line);
	$("body").bind("mousemove", function(e){
		var x=e.pageX;
		var y=e.pageY;
		line.css("top", y);
	});
	$(document).keyup(function(e){
		if(e.keyCode==27){
			line.remove();
			$("body").unbind("mousemove");
		}
	});
	
	//guide user to get rid of the line
	var cancelNote=$("<div>To cancel hit escape</div>");
	$("body").append(cancelNote);
	cancelNote.css("background-color", "white")
		.css("font-size", "1.6em")
		.css("opacity", 0.5)
		.css("display", "none")
		.css("position", "absolute")
		.css("z-index", 1000000)
		.css("top", 0);
	var length=$("body").width()- cancelNote.width();
	cancelNote.css("left", length);
	cancelNote.show("fast");
	
	var ttt = setTimeout( function() {cancelNote.fadeOut(1000);}, 2000);
	

	
}
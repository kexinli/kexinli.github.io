(function(){
	var elements = "article,aside,figure,figcaption,footer,header,mark,nav,progress,ruby,rt,rp,section,time".split( "," ), 
			   i = elements.length,
		 wrapper = document.getElementsByTagName( "body" )[0];
	
	while( i-- >= 0 ){
		document.createElement( elements[i] );
	}
})();

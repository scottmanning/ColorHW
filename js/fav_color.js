$(


  function(event) {
  	//Start to type below here. Make sure not to delete any "{}" braces. 
  	var favColour = prompt('What is your favourite colour?');

  	if(favColour === 'blue' || favColour === 'red' || favColour === 'yellow' ||  favColour === 'green') {
  		$("body").css("background", favColour);
  	} else {
  		$("body").css("background", "white");
  		$("header h2").html("Try again, colour unavailable.");
  	}


}
);



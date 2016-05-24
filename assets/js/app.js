var countData = new Firebase("https://hangglider1.firebaseio.com/");

// Button to grab information
$("#submitSearch").on("click", function () {

    // Grabs user input
	var newOrigin = $("#orgCount").val().trim();
	var newDest = $("#destCount").val().trim();
    console.log(newOrigin);
    console.log(newDest);
    
    
    
    	var newCount = {
		org: newOrigin,
		dest: newDest
    }

    // Uploads country data to the database
	countData.push(newCount);

	// Logs everything to console
	console.log(newCount.org);
	console.log(newCount.dest);

	// Alert
	alert("Ignore this!");

	// Clears all of the text-boxes
	$("#orgCount").val("");
	$("#destCount").val("");

    return false;

});
	$(document).ready(function(){
    $("#helpButton").click(function(){
        $("#help").modal('toggle');
    });
});

$('#cc').html('<script type="text/javascript">var fm="USD";var ft="EUR";var hb="2D6AB4";var hc="FFFFFF";var bb="F0F0F0";var bo="2D6AB4";var tz="timezone";var wh="200x250";var lg="en";</script>');

$('#cd').html('<script type="text/javascript" src="http://www.fxexchangerate.com/converter.php"></script>');

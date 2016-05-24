var countData = new Firebase("https://hangglider1.firebaseio.com/");

// Button to grab information
$("#submitSearch").on("click", function () {

    // Grabs user input
	var newOrigin = $("#orgCount").val().trim();
	var newDest = $("#destCount").val().trim();
    console.log(newOrigin);
    console.log(newDest);
    $('#glider').html("<h2>Flying High In " + newDest + "</h2>");
 
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
	// alert("Ignore this!");

	// // Clears all of the text-boxes
	// $("#orgCount").val("");
	// $("#destCount").val("");

    return false;

});



	$(document).ready(function(){
    $("#helpButton").click(function(){
        $("#help").modal('toggle');
    });
});


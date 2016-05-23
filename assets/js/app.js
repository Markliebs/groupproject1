var countData = new Firebase("https://trainschedhw.firebaseio.com/");

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

    // Uploads employee data to the database
	countData.push(newCount);

	// Logs everything to console
	console.log(newOrigin.org);
	console.log(newOrigin.dest)

	// Alert
	alert("Train successfully added!");

	// Clears all of the text-boxes
	$("#orgCount").val("");
	$("#destCount").val("");

    return false;

});
	$(document).ready(function(){
    $("#helpButton").click(function(){
        $("#help").modal('toggle');
		
		
		// $('.modalLose').modal('toggle');
    });
});
var countData = new Firebase("https://hangglider1.firebaseio.com/");

// Button to grab information
$("#submitSearch").on("click", function () {

    // Grabs user input
	var newOrigin = $("#orgCount").val().trim();
	var newOrigin2 = $("#orgCount option:selected").text();
	var newDest2 = $("#destCount").val().trim();
	var newDest = $("#destCount option:selected").text();
	var queryURLBase = "http://api.fixer.io/latest?base=" + newOrigin;
    console.log(newOrigin);
	console.log(newOrigin2);
    console.log(newDest);
	console.log(newDest2);
	console.log(queryURLBase);
    $('#glider').html("<h2>Flying High In " + newDest + "</h2>");

	var newCount = {
		org: newOrigin,
		org2: newOrigin2,
		dest: newDest,
		dest2: newDest2
    }
	$.ajax({ url: queryURLBase, method: "GET" })
		.done(function (moneyData) {
			console.log(moneyData.rates[newDest2]);

		})

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



$(document).ready(function () {
    $("#helpButton").click(function () {
        $("#help").modal('toggle');
    });
});


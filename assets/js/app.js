var countData = new Firebase("https://hangglider1.firebaseio.com/");

// Button to grab information
$("#submitSearch").on("click", function () {

    // Grabs user input
	var newOrigin = $("#orgCount").val().trim();
	var newOrigin2 = $("#orgCount option:selected").text();
	var newDest = $("#destCount").val().trim();
	var newDest2 = $("#destCount option:selected").text();
	var queryURLBase = "http://api.fixer.io/latest?base=" + newOrigin;
	var queryURLBase2 = "http://api.fixer.io/latest?base=" + newDest;
    console.log(newOrigin);
	console.log(newOrigin2);
    console.log(newDest);
	console.log(newDest2);

	console.log(queryURLBase);
    $('#glider').html("<h2>Flying High In " + newDest2 + "</h2>");


	var newCount = {
		org: newOrigin,
		org2: newOrigin2,
		dest: newDest,
		dest2: newDest2
    }
	$.ajax({ url: queryURLBase, method: "GET" })
		.done(function (moneyData) {
			console.log(moneyData.rates[newDest]);
			var showdRate = moneyData.rates[newDest];
			$(' #currency1 ').html("<h6>" + newDest2 + "</h6>");
			$(' #currency1a ').html("<h6>" + showdRate + "</h6>");
			
		})

	$.ajax({ url: queryURLBase2, method: "GET" })
		.done(function (moneyData) {
			console.log(moneyData.rates[newOrigin]);
			var showoRate = moneyData.rates[newOrigin];
			$(' #currency2 ').html("<h6>" + newOrigin2 + "</h6>");
			$(' #currency2a ').html("<h6>" + 1.00 + "</h6>")

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


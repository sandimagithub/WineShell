// Pageshow is a specifc jquerymobile event. 
// Fire this event when the page is pulled into the DOM


// Find out what "events" are available under jquerymobile from the 
// website (www.jquerymobile.com) and go under API documentation, then Events.


// We went to populate the mobile site with data from the wine database--
// to access that database, we will be using the AJAX (GET)
alert("Load worked");

$(document).on("pageshow", "#wine-list", function() {
	alert("Worked");
	$.ajax({
		url:"http://daretodiscover.net/wine",
		type:"GET",
		success: function (data){
			console.log(data);
		},
		error: function(data){
			alert ("Something is wrong!");

		}

	});

});
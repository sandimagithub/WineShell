// Pageshow is a specifc jquerymobile event. 
// Fire this event when the page is pulled into the DOM


// Find out what "events" are available under jquerymobile from the 
// website (www.jquerymobile.com) and go under API documentation, then Events.


// We want to populate the mobile site with data from the wine database--
// to access that database, we will be using the AJAX (GET)

// we include .listview("refresh") b/c we want jquerymobile to go back and take another look at the the listview again and put the css classes back in, or else, it loads and the pictures of the wines are HUGE. 

$(document).on("pageshow", "#wine-list", function() {
	
	$.ajax({
		url:"http://daretodiscover.net/wine",
		type:"GET",
		success: function (data){
			// console.log(data);--now we want to instantiate the handlebars upon a success--and create/configuring a template to be rendered.

			var source = $("#wine-list-template").html();
			var template = Handlebars.compile(source);

			var wineHtml = template({
				wines:data

			});

			$("#wine-list-items").html(wineHtml).listview("refresh");
		},
		error: function(data){
			alert ("Something is wrong!");

		}

	});

});

// this is with validation -- which means we are checking to make sure the user fills in info on the form before it will submit using ajax.

// .val() is a jquery that will take the value from the input field. 

$(document).on("click", "#add-wine-button", function(){
		var wineData = {
			name: $("#new-wine-name").val(),
			country: $("#new-wine-country").val(),
			region: $("#new-wine-region").val(),
			grapes: $("#new-wine-grapes").val(),
			year: $("#new-wine-year").val(),
			price:$("#new-wine-price").val(),
			description: $("#new-wine-description").val()
		};

// var key is the temporary variable--use this to validata to make sure the entire page is working. 

// Upon a success, we want the page to refresh

		for(var key in wineData) {
			if (wineData[key] ==="") {
				alert("Please enter all fields");
				return false;
			}

		}
		
		$.ajax({
			url:"http://daretodiscover.net/wine",
			type:"POST",
			data:wineData,

			success:function() {
				$.mobile.changePage("#wine-list");

			},

			error:function(){
				alert("Something went wrong!");
			}
		});

});
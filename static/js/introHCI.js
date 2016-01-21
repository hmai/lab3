'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#submitBtn").click(function(e) {
		var newdesc = $("#description").val();
		var newwidth = $("#width").val();
		var tochange = $($("#project").val());
		tochange.css("width", newwidth );
		$($("#project").val() + " .project-description").text(newdesc);
	});

	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Don't press this button again");
		$(".jumbotron p").toggleClass("active");

	});
	function projectClick(e) {
  		// Cancel the default action, which prevents the page from reloading
    		e.preventDefault();

    		// In an event listener, $(this) is the leement that fired the event
    		var projectTitle = $(this).find("p").text();
    		var jumbotronHeader = $(".jumbotron h1");
    		jumbotronHeader.text(projectTitle);
		var containingProject = $(this).closest(".project");
    		var description = $(containingProject).find(".project-description");
    		if (description.length == 0) {
       			$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    		} else {
			description.fadeOut();
    		}
};

	$("a.thumbnail").click(projectClick);

	

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

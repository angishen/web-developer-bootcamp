// check off todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("done")
});

// delete todos by clicking trashcan
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(300, function(){
		$(this).remove()
	});
	// stops event from bubbling up to parent elements
	e.stopPropagation();
});

// add new to do
$("input[type='text']").on("keypress", function(e){
	
	var liElement = document.createElement("li")
	if (e.which === 13) {
		// getting text from input
		var todoText = $(this).val();
		// create new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");
		// clear input field
		$(this).val("");
	};
});

// toggle form to hide/show when plus icon is clicked
$("#plus-icon").on("click", function(){
	$("input[type='text']").slideToggle(100)
});

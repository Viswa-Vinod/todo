
//strike off (or unstrike) completed to-do
$("ul").on("click", "li",function(){

	
	$(this).toggleClass("done");
});

//delete lis on clicking delete

$("ul").on("click", "span",function(event){

	$(this).parent().fadeOut("slow", function(){

		$(this).remove();

	});
	
	event.stopPropagation();
});

$("input").on("keypress",function(event){
	
	if (event.which===13) {
		var text = $(this).val();
		
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i> </span>" + text + "</li>");
		$(this).val("");

	}
});

$(".fa-pencil-square").on("click", function(){
	

	$("input").fadeToggle();
});


function toggle(element){
	var e = document.getElementById(element);
	if(e.style.display == "block"){
		e.style.display = "none";
	}
		else {
			e.style.display = "block";
		}
			
};

    $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
    });

	$('#navbar').scrollspy();
	$('.typeahead').typeahead();
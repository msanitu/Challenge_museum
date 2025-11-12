$(document).ready(function(){
	// Mostramos y ocultamos submenus
	$(".submenu").click(function(){
		$(this).children(".sub").slideToggle();
	});
	// fin
});
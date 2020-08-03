document.addEventListener('DOMContentLoaded', e =>{
new WOW().init();

		console.log("hola a todos");
	var owl = $("#testimonios");
	owl.owlCarousel({
		items: 2,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
	});
});


document.addEventListener('DOMContentLoaded', () =>{

	var owl = document.getElementById('testimonios');
	console.log(owl);
	owl.owlCarousel({
		items: 2,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
	});
});
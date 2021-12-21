const burger = document.querySelector(".burger");
if (burger) {
	const menuBody = document.querySelector(".header__menu-inner");
	burger.addEventListener("click", function () {
		document.body.classList.toggle("_lock");
		burger.classList.toggle("burger-active");
		menuBody.classList.toggle("_active");
	});
}

$(function () {


	$('.carousel__slider').slick({
		centerMode: true,
		centerPadding: '200px',
		slidesToShow: 3,
		adaptiveHeight: false,
		speed: 800,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});

});

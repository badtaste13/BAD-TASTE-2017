// JavaScript Document


// TO TOP / Kulturbanause
$(document).ready(function(){

	// Der Button wird mit JavaScript erzeugt und vor dem Ende des body eingebunden.
	var back_to_top_button = ['<a href="#mainnav" class="back-to-top"><span class="glyphicon glyphicon-chevron-up"></span></a>'].join("");
	$("body").append(back_to_top_button); // SEMIKOLON???? war ohne...

	// Der Button wird ausgeblendet
	$(".back-to-top").hide();

	// Funktion für das Scroll-Verhalten
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 250) { // Wenn 250 Pixel gescrolled wurde
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});

		$('.back-to-top').click(function () { // Klick auf den Button
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});
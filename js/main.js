// JavaScript Document


// START JS PORTFOLIO https://codepen.io/creotip/pen/dfjeF
$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
		
	});
});

// TOOLTIP / TITLE 
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


////////////////////////////////////////////////////////////////////////////////////


// CAROUSEL / SLIDER 
$('.carousel').carousel({
interval: 5000 //changes the speed
});  // SEMIKOLON???? war ohne...


////////////////////////////////////////////////////////////////////////////////////



// SMOOTH SCROLLING 
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#mainnav']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
}); // SEMIKOLON???? war ohne...


////////////////////////////////////////////////////////////////////////////////////



// MODAL
	$(document).ready(function() {
$('.thumbnail').click(function(){
      $('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
});


////////////////////////////////////////////////////////////////////////////////////


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
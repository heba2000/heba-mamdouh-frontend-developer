window.onload = function(){
    Particles.init({
    selector: '.background',
    color: '#fff',
    maxParticles: 300,
    speed: 0.6,
    })
};

//navbar
$(function() {
    $(document).scroll(function() {
         var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

});

});
$('.navbar a').click(function () {
  let Hrefs = $(this).attr('href');
  console.log(Hrefs);
  $('.navbar .navbar-nav').find('li.active').removeClass('active');
  $(this).parent('li').addClass('active');
  let HrefsOffset = $(Hrefs).offset().top;
  $("body,html").animate({ scrollTop: HrefsOffset }, 1000)
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

//testimonials slider 
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:3,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true
  });
 (function(){
      owl.trigger('play.owl.autoplay',[2000])
  })();
  (function(){
      owl.trigger('stop.owl.autoplay')
  })




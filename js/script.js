
$(document).ready(function(){

// menu
  document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  };

  $('.header__nav-button').click(function(e) {
    e.preventDefault();   
    $('.header__nav').toggleClass('show');
  });
  $('.header__nav-link').click(function(e) {
    e.preventDefault();
    $('.header__nav').toggleClass('show');
  });

  // carousel
  $(".owl-carousel").owlCarousel({
    items:1
  });

  // scroll-to-top

  const scrollBtn = $('.scroll-to-top-btn');
  
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      scrollBtn.fadeIn();
    } else {
      scrollBtn.fadeOut();
    }
  });
  scrollBtn.click(function(){
    $('html, body').animate({ scrollTop: 0 }, 360);
    return false;
  });

  // mixitup
  var mixer = mixitup('.products__row');    
});


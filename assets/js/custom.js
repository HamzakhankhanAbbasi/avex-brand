 //Add Class Sticky On Scroll
 $(window).on('scroll', function (event) {
  var scroll = $(window).scrollTop();
  if (scroll < 20) {
    $("header").removeClass("sticky");
    // $(".navbar .navbar-brand img").attr("src", "assets/front/images/logo.png");
  } 
  else {
    $("header").addClass("sticky");
    // $(".navbar .navbar-brand img").attr("src", "assets/front/images/logo.png");
  }
});

// MOBILE MENU JS
$('.toggle-btn').click(function(){
  $('.main-menu').toggleClass('active');
});

// SERVICES SLIDER JS
$('.service-slider').owlCarousel({
  center: true,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  nav:false,
  dots:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:2
    },
    1000:{
      items:3,
      margin:25
    }
  }
});

// PACKAGES SLIDER JS
$('.packages-slider').owlCarousel({
  center: true,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  nav:false,
  dots:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:2
    },
    1000:{
      items:3,
      margin:25
    }
  }
});

// TESTIMONIALS SLIDER JS
$('.testimonails-slider').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  nav:false,
  dots:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
});

// Parallax-Img
var scene = document.getElementById('js-parallax-scene1');
var parallax = new Parallax(scene);
var scene = document.getElementById('js-parallax-scene2');
var parallax = new Parallax(scene);

// GET IN TOUCH MODAL JS
const popup = document.getElementById('popup-wrapper');
const btn = document.querySelectorAll(".popup-btn");

btn.forEach((e)=>{
  e.addEventListener('click',function(){
    popup.classList.add('show');
  })
})
const span = document.getElementById("close");
if(span){
  span.addEventListener('click', () => {
    popup.classList.remove('show');
  });
}
window.onclick = function(event) {
  if (event.target == popup) {
    popup.classList.remove('show');
  }
}
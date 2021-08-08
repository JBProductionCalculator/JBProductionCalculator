$('.anchor a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 500,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});


$('.zustandsorientiert_slider').owlCarousel({
	
  responsive: {
    0:{
      items:1,
      dots: false,
      nav: true,      
      navText: ['<img src="img/arrow.png" alt="" class="productsentiert_navigation-prev">', '<img src="img/arrow.png" alt="" class="productsentiert_navigation-next">']
    },
    768:{
     items:4.5,
      nav: false,
      dots: false,
    }
  }

})

$('.el_blog_slider').owlCarousel({
  responsive: {
    0:{
      items:1,
      dots: false,
      nav: true,
      navText: ['<img src="img/arrow.png" alt="" class="productsentiert_navigation-prev">', '<img src="img/arrow.png" alt="" class="productsentiert_navigation-next">']
    },
    768:{
     items:4.5,
      nav: false,
      dots: false,
    }
  }
})

$('.beliebteste_slider').owlCarousel({
	

  responsive: {
    0:{
      items:1,
      dots: false,
      nav: true,      
      navText: ['<img src="img/arrow.png" alt="" class="productsentiert_navigation-prev">', '<img src="img/arrow.png" alt="" class="productsentiert_navigation-next">']
    },
    768:{
       nav: false,
       dots: false,
       items:2.2
    }
  }
})


let fractionTotal = document.querySelector('.home_fraction-total')
fractionTotal.innerHTML = document.querySelectorAll('.home_slider-slide').length


const swiperHome = new Swiper('.home', {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.home_navigation-next',
    prevEl: '.home_navigation-prev',
  },

 pagination: {
    el: '.home_navigation-progressbar',
    type: 'progressbar',
  },

});



let fractionCurrent = document.querySelector('.home_fraction-current')

curentSlideInHomeSlider()
swiperHome.on('slideChange', () => {
	curentSlideInHomeSlider()
})

function curentSlideInHomeSlider(argument) {
	let currentSlide = ++swiperHome.realIndex
	fractionCurrent.innerHTML = currentSlide
}


const swiper = new Swiper('.testimonials_container', {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.testimonials_buttons-next',
    prevEl: '.testimonials_buttons-prev',
  },

});


const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {

  

  $('.productsentiert_container').owlCarousel({
    items:1,
    nav: true,
    navText: ['<img src="img/arrow.png" alt="" class="productsentiert_navigation-prev">', '<img src="img/arrow.png" alt="" class="productsentiert_navigation-next">']

  })

  $('.answer_content').owlCarousel({
    items:1,
    nav: true,
    dots: false,
    navText: ['<img src="img/arrow.png" alt="" class="productsentiert_navigation-prev">', '<img src="img/arrow.png" alt="" class="productsentiert_navigation-next">']

  })

 
}
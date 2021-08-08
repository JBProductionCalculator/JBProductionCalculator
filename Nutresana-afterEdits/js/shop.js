// shopHeader

const swiperBottom = new Swiper('.yourProducts_container', {
  loop: true,
  slidesPerView: 1.1,  
  spaceBetween: 50,  

  centeredSlides: true,
  hashNavigation: true,

  navigation: {
    nextEl: '.yourProducts_buttons-next',
    prevEl: '.yourProducts_buttons-prev',
  },

   pagination: {
    el: '.yourProducts_slide-number',
    type: 'fraction',
  },

  breakpoints: {
      768: {
         slidesPerView: 1.5,  
         spaceBetween: 150,  
      }   
  },

  on: {
    init: () => {
      let activeElement = document.querySelector('.swiper-slide-active').getBoundingClientRect()
      document.querySelector('.yourProducts_header').style.paddingRight = activeElement.left + 'px'


      const mediaQuery = window.matchMedia('(max-width: 768px)')
      if (mediaQuery.matches) {
          let activeElementMobile = document.querySelector('.swiper-slide-active').getBoundingClientRect()
          document.querySelector('.yourProducts_header').style.paddingRight = activeElementMobile.left + 20 + 'px'
          document.querySelector('.yourProducts_header').style.paddingLeft = activeElementMobile.left + 20 + 'px'
      }


    }
  }

});



const swiper = new Swiper('.shopHeader', {
  loop: true,

  navigation: {
    nextEl: '.shopHeader_next',
    prevEl: '.shopHeader_prev',
  },

   pagination: {
    el: '.shopHeader_number',
    type: 'fraction',
  },

 breakpoints: {
    0: {
      spaceBetween: 50,  
    },
    768: {
       // slidesPerView: 1.5,  
       spaceBetween: 0,  
    }   
},


});

sendBackgroundUrl()
function sendBackgroundUrl(){
  let element = document.querySelector('.backgroundUrl')
  element.style.backgroundImage = `url(${element.dataset.backgroundurl})`
  console.log(element)
  console.log()
}

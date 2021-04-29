// home


if (window.matchMedia("(min-width:768px)").matches) {
	myMasonry()
}

function  myMasonry() {
	const myMasonry = document.querySelector('.mymasonry')
	const myMasonryItems = document.querySelectorAll('.mymasonry-item')

	let oneColumn = createNewElement('div', 'mymasonry-column')
	let twoColumn = createNewElement('div', 'mymasonry-column')

	myMasonryItems.forEach((item, index) => {
		if (index % 2) {
			twoColumn.appendChild(item)
		}else{
			oneColumn.appendChild(item)
		}
	})

	myMasonry.appendChild(oneColumn)
	myMasonry.appendChild(twoColumn)
}


function createNewElement(tag,className){
	let element = document.createElement(tag)
	element.classList.add(className)
	return element
}



mainSlider()


function mainSlider() {
	const swiper = new Swiper('.home_slider', {
	  // direction: 'vertical',
	  loop: true,

	  pagination: {
	    el: '.swiper-pagination',
	  },

	  navigation: {
	    nextEl: '.swiper-button-next',
	  },

	  // And if we need scrollbar
	  // scrollbar: {
	  //   el: '.swiper-scrollbar',
	  // },
	});


}


// slideText()

// function slideText(){
// 	let allSlideText = document.querySelectorAll('.home_slide-text')
// 	allSlideText.forEach(item => {
// 		item.style.bottom = item.clientHeight / 2 * -1 + 'px'
// 	})
// }



// document.querySelector('.home_slider-decoration').style.height = document.querySelector('.home_slide-picture').clientHeight + 'px'



// home
scrollBlock('.aboutMe','.home_scroll')
scrollBlock('.aboutMe','.home_scroll.mob')
function scrollBlock(block,button){
	let home = document.querySelector(block)
	let btn = document.querySelector(button)

	function ddd(){
		home.scrollIntoView({
		   behavior: "smooth",
		   block:    "start" 
		});
	}
	btn.addEventListener('click', ddd)
}



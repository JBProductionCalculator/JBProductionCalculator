
navigationMenu()
function navigationMenu(){
	$('.menu_header').on('click',() => {
		$('.menu_header').addClass('none')
		$('.menu_body').removeClass('none')
		
		// $('.menu_body').slideToggle()
	})

	$('.menu_body li:first-child').on('click',() => {
		$('.menu_header').removeClass('none')
		$('.menu_body').addClass('none')
		// $('.menu_body').slideToggle()
	})

}


// Компонет ourTeam функции слайдера по ползунку
ourTeamRange()
function ourTeamRange() {
	let container = document.querySelector('.cart_container')
	let range = document.querySelector('.ourTeam_controller-range input')

	if (range != null) {
		range.max = container.scrollWidth - container.clientWidth

		range.addEventListener('input', () =>{
			container.style.marginLeft = -(range.value) + 'px'
		})	
	}
	
}


// выравнивание  по самому маленькому блоку в родителе. Да в css такой возможности нет
function smallestAlignment(child,direction){
	let size = document.querySelector(child)

	if (size) {

		arguments[2].forEach((item) => {
			let element = document.querySelector(item)
			if (direction == 'width') {
				element.style.width = size.clientWidth +  "px"
			}else{
				element.style.height = size.clientHeight +  "px"
			}

		})
	}
}
smallestAlignment('.footer_support-info .footer_heading p', 'width' ,['.footer_support-info .footer_additionaly'])


// календарь на старнице aboutUs
historycalCalendar()
function historycalCalendar() {
	let dates = document.querySelectorAll('.history_calendar-dates .date')
	let events = document.querySelectorAll('.history_calendar-events .event')

	startCalendar(dates,'date-active')
	startCalendar(events,'event-active')


	function startCalendar(data,addingClass){
		let amount = data.length - 3
		data.forEach((item, index) => {
			item.classList.add('none')

			if (index === amount) {
				item.classList.add(addingClass)
			}

			if (index <= amount + 2 && index >= amount - 1 ) {
				item.classList.remove('none')
			}
		})

		navigationCalendar(data,addingClass)
	}

	function navigationCalendar(data,activeClass){
		let prev = document.querySelector('.history_calendar-navigation .arrow:first-child')
		let next = document.querySelector('.history_calendar-navigation .arrow:last-child')

		let amountElements = data.length


		if (prev != null && next != null) {
		

			prev.addEventListener('click', () => {
					let count
					data.forEach((item,index) => {
						item.classList.add('none')

						if (item.classList.contains(activeClass)) {
							count = index - 1
							if (count >= 0) {
								item.classList.remove(activeClass)
							}else{
								count = index
							}
						}

					})

					data.forEach((item,index) => {
					

						if (count === index) {
							item.classList.add(activeClass)
							item.classList.remove('none')
						}

						if (index <= count + 2 && index >= count - 1 ) {
							item.classList.remove('none')
						}

					})
			})

			next.addEventListener('click', () => {
					let count
					data.forEach((item,index) => {
						item.classList.add('none')

						if (item.classList.contains(activeClass)) {
							count = index + 1

							if (count < amountElements) {
								item.classList.remove(activeClass)
							}else{
								count = index
							}
						}
					})	

					data.forEach((item,index) => {
						if (index <= count + 1 && index >= count - 2 ) {
							item.classList.remove('none')
						}

						if (count === index) {
							item.classList.add(activeClass)
							item.classList.remove('none')
						}
					})
			})

		}


	}
}



// pop up 
popUp()
function popUp(){
	let popUp =  document.querySelector('.popUp')
	let open = document.querySelector('header .reception_logo')
	let close = document.querySelector('.popUp_close')

	if ( popUp != null && open != null && close != null) {
		open.addEventListener('click', function(){
			popUp.classList.remove('none')
		})

		close.addEventListener('click', function(){
			popUp.classList.add('none')
		})
	}
}


// слайдер на странице portfolio

slider()
function slider(){
	let box = document.querySelector('.portfolio_slider > div')
	if (box) {
		$('.portfolio_slider > div').owlCarousel({
		    items:1,
		    loop:true,
		    margin:10,
		    dots:true,
		    nav:true,
		    navText: ['<div><img src="img/arrowBlack.svg" alt=""></div>','<div><img src="img/arrowBlack.svg" alt=""></div>'],
		})
	}
	
}

sliderMobile()
function sliderMobile(){
	let box = document.querySelector('.homeServices_mobile')
	if (box) {
		$('.homeServices_mobile').owlCarousel({
		    items:1.1,
		    loop:true,
		    margin:0,
		    dots:false,
		    nav:false,
		})
	}

	let top =  $('.homeServices_mobile').height() / 2
	$('.homeServices_mobile').css('top', -top)
	
}

sliderMobileServices()
function sliderMobileServices(){
	let box = document.querySelector('#mobileGeneralPlanning_container')
	if (box) {
		$('#mobileGeneralPlanning_container').owlCarousel({
		    items:1.2,
		    loop:true,
		    margin:0,
		    dots:false,
		    nav:false,
		})
	}

	let carts = $('#mobileGeneralPlanning_container .generalPlanning_container-item')
	let allSize = []
	$.each(carts,function(index,cart){
		allSize.push($(cart).height())
	})
	var maxIndex = allSize.indexOf( Math.max.apply(null, allSize));

	
	$.each(carts,function(index,cart){
		$(cart).height(allSize[maxIndex])
	})

}



         
scrolling('.scrolling_box')

// якорь
function scrolling(calassBox){
	$(calassBox).on("click","a", function () {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	    top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 500);
	 });
}


bookingDate()
// планирование даты
function bookingDate(){
	let inputDate = document.querySelector('.booking_date')

	let today = new Date()
	let dd = String(today.getDate()).padStart(2, '0')
	let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
	let yyyy = today.getFullYear()

	today = `${yyyy}-${mm}-${dd}`
	maxData = `${yyyy+1}-${mm}-${dd}`

	inputDate.min = today
	inputDate.max = maxData
}


// console.log(window.location.port)

// mobile menu
document.querySelector('.menu_mobile-icon').addEventListener('click', function(){
	document.querySelector('.menu_mobile-libs').classList.remove('none')
})



validationForm('#footer_form')
validationForm('#form_popUp')
function validationForm(idForm){
	$(idForm).validate({
		rules: {
			name: {
				required: true,
			},
			phone: {
				required: true,
				digits: true
			},
			email: {
				required: true,
				email: true
			},
			additionalText : {
				required: true,
			},
			date : {
				required: true,
			}
		},

		messages: {
			name: {
				required: 'Dieses Feld wird benötigt.',
			},
			phone: {
				required: 'Dieses Feld wird benötigt.',
				digits: 'Bitte gib nur Ziffern ein.',
			},
			email: {
				required: 'Dieses Feld wird benötigt.',
				email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
			},
			additionalText : {
				required: 'Dieses Feld wird benötigt.',
			}
		}

	})

}




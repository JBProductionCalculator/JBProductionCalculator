
paymentCheck()
function paymentCheck() {
	let allPaymentSystems = document.querySelectorAll('.payment_systems li')
	let allPaymetContainer = document.querySelectorAll('.payment_content > div')
	console.log(allPaymetContainer);

	allPaymentSystems.forEach((system, indexButton) => {

		system.addEventListener('click', () => {
			allPaymentSystems.forEach(systemTwo => {
				systemTwo.classList.remove('payment_systems-active')
			})

			allPaymetContainer.forEach((container, indexContainer) => {
				if (indexButton == indexContainer) {
					container.classList.remove('none')
				}else{
					container.classList.add('none')
				}
			})

			system.classList.add('payment_systems-active')
		})
	})
}


const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {
	mobileShowProducteAnimation()
}

function mobileShowProducteAnimation(){
	$('.cart_show_container').slideUp()

	$('#show_cart .cart_navigation-order').on('click', () => {
		$('.cart_show_container').slideToggle()
	})

	$('#hide_cart .cart_navigation-order').on('click', () => {
		$('.cart_show_container').slideUp()
	})
}


choiceCountry()
function choiceCountry(){
	jQuery(($) => {
	    $('.select').on('click', '.select__head', function () {
	        if ($(this).hasClass('open')) {
	            $(this).removeClass('open');
	            $(this).next().fadeOut();
	        } else {
	            $('.select__head ').removeClass('open');
	            $('.select__list').fadeOut();
	            $(this).addClass('open');
	            $(this).next().fadeIn();
	        }
	    });

	    $('.select').on('click', '.select__item', function () {

	        $('.select__head ').removeClass('open');
	        $(this).parent().fadeOut();
	        $(this).parent().prev().find('span').text($(this).text());
	        $(this).parent().prev().prev().val($(this).text());

	    });

	    $(document).click(function (e) {
	        if (!$(e.target).closest('.select').length) {
	            $('.select__head ').removeClass('open');
	            $('.select__list').fadeOut();
	        }
	    });
	});
}
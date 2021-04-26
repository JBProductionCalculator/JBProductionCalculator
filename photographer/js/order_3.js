// order 3
choisedPaymentMethod()
function choisedPaymentMethod() {
	let formCredit = document.querySelector('#order_pay_creditCard')
	let formTransfer = document.querySelector('#order_pay_bankTransfer')

	let buttonCredit = document.querySelector('#creditCard')
	let buttonTransfer  = document.querySelector('#bankTransfer')
	
	buttonTransfer.addEventListener('click', () => {
		buttonTransfer.classList.add('blue')
		buttonCredit.classList.remove('blue')

		formTransfer.classList.remove('none')
		formCredit.classList.add('none')
	})	

	buttonCredit.addEventListener('click', () => {


		buttonTransfer.classList.remove('blue')
		buttonCredit.classList.add('blue')
		
		formTransfer.classList.add('none')
		formCredit.classList.remove('none')
	})	
}


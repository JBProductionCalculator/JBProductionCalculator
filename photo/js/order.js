// order
order()
function order(){
	let boxCart = document.querySelector('.oreder_body-catr')
	boxCart.style.height = 0   + 'px'

	let boxForm = document.querySelector('.oreder_body-form') 

	boxCart.style.height = boxForm.clientHeight   + 'px'
	boxCart.style.overflowY = 'scroll'
}


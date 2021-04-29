
// bodyHeight()
// function bodyHeight(){
// 	const headerHeight =document.querySelector('.header')
// 	console.log(headerHeight)
// 	console.log(headerHeight.clientHeight)
// 	console.log(headerHeight.offsetHeight)
// 	console.log(headerHeight.scrollHeight)
// 	document.querySelector('body').paddingTop = headerHeight + 'px'
// }


openPopUp('#logIn','.open_logIn','#contactMe')
openPopUp('#contactMe','.open_contactMe','#logIn')

function openPopUp(box,buttons,twoBox){
	let popUp = document.querySelector(box)
	let popUpTwo = document.querySelector(twoBox)
	let open = document.querySelectorAll(buttons);
	let close = popUp.querySelector('.close')

	open.forEach((item) => {

		item.addEventListener('click', () => {

			popUp.classList.remove('p-shadow')
			popUp.classList.add('p-show')

			if (popUpTwo.classList.contains('p-show')) {
				popUpTwo.classList.remove('p-show')
				popUpTwo.classList.add('p-shadow')	
			}
			
		})
	})

	close.addEventListener('click', () => {
		popUp.classList.remove('p-show')
		popUp.classList.add('p-shadow')
	})
}




opentCart()
function opentCart(){
	let cart = document.querySelector('#cart')
	let open = document.querySelectorAll('.open_cart');

	let count = 0

	document.addEventListener('click', () => {
		if (event.target.closest('.cart') || event.target.closest('.header') || event.target.closest('.header_up')) {

		}else{
			if (cart.classList.contains('c-show')) {
				count++
			}
			cart.classList.remove('c-show')
			cart.classList.add('c-shadow')
		}
	})


	open.forEach((item) => {
		item.addEventListener('click', () => {
		
			cart.classList.remove('none')

			count++
			if (count % 2) {
				cart.classList.remove('c-shadow')
				cart.classList.add('c-show')
			}else{
				cart.classList.remove('c-show')
				cart.classList.add('c-shadow')
			}

		})
	})
}





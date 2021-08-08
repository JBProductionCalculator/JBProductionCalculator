productsDescriptionTabs(0, 2)
function productsDescriptionTabs(activeSLide, activeSLideMobile) {
    let tabs = document.querySelectorAll('.description_header-item')
    let blocks = document.querySelectorAll('.description_content-item')


    blocks.forEach((block, index) => {
    	if (index !== activeSLide) {
    		block.classList.add('none')
    	}
    })

    tabs.forEach((tab, indexTab) => {
        
        const mediaQuery = window.matchMedia('(max-width: 768px)')
        if (mediaQuery.matches) {
            if (indexTab == activeSLideMobile) {
                tab.classList.add('description_header-disable')
            }
        }else{
            if (indexTab == activeSLide) {
                tab.classList.add('description_header-disable')
            }
        }


    	

    	tab.addEventListener('click', () => {
    		tabs.forEach((tabTwo, indexTab) => {
    			tabTwo.classList.remove('description_header-disable')
    		})
    		tab.classList.add('description_header-disable')

    		 blocks.forEach((block, indexBlok) => {
		    	if (indexTab !== indexBlok) {
		    		block.classList.add('none')
		    	}else{
		    		block.classList.remove('none')
		    	}
		    	
		    })
    	})
    })

}




const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {
    // products

    $('.products').owlCarousel({
          items:1,
          dots: false,
          nav: true,      
          navText: ['<img src="img/arrow.png" alt="" class="productsentiert_navigation-prev">', '<img src="img/arrow.png" alt="" class="productsentiert_navigation-next">']
    })
}
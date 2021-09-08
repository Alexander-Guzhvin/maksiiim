function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

function ibg(){
    let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 
      'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
   }
  }    
ibg();
function ibg(){
    let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 
      'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
   }
  }    
ibg();
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null){
    let delay = 500;//задержка
    let body=document.querySelector("body");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", (e) => {
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
    });
};
function menu_close(){
    let iconMenu = document.querySelector(".icon-menu");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
}




// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
			let iconMenu = document.querySelector(".icon-menu");
			let menuBody = document.querySelector(".menu__body");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
			window.scrollTo({
				
				top: gotoBlockValue,
				behavior: "smooth"
			});
			
			e.preventDefault();
			
		}
	}
}

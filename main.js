(function (){
	var menuItem = document.querySelectorAll('.menu-item');
	var menuOpen = document.querySelector('.menu-list');

	var menuMobile = document.querySelector('.menu-mobile');
	var fecharMenu = document.querySelector('.fechar-menu');

	var formOpen = document.getElementById('div-form');
	var formClose = document.getElementById('div-form');
	

	var boxProducts = document.getElementById('OurProducts-Inside');
	var boxProducts1 = document.getElementById('OurProducts-Inside-2');
	var boxProducts2 = document.getElementById('OurProducts-Inside-3');


	document.getElementById('menu-mobile').addEventListener("click", openMenu);
	document.getElementById('fechar-menu').addEventListener("click", openMenu); 
  	document.getElementById('menu-item').addEventListener("click", closeMenu);
	document.getElementById('menu-item1').addEventListener("click", closeMenu);
	document.getElementById('menu-item2').addEventListener("click", closeMenu);

	document.getElementById('btnForm').addEventListener("click", openForm);
	document.getElementById('close-form').addEventListener("click", closeForm);

	document.getElementById('box-product').addEventListener("click", openProducts);
	document.getElementById('box-product1').addEventListener("click", openProducts);
	document.getElementById('box-product2').addEventListener("click", openProducts);

	document.getElementById('box-product').addEventListener("click", closeProduct);
	document.getElementById('box-product1').addEventListener("click", closeProduct);
	document.getElementById('box-product2').addEventListener("click", closeProduct);

// 	Menu

	function openMenu() {
		menuOpen.classList.toggle('--menuOpen');
		menuMobile.classList.toggle('--menuMobile');
		fecharMenu.classList.toggle('--menuClose');
		menuItem.forEach((element) => {
      element.classList.add('--openItem')
    });
	}

	function closeMenu() {
		menuOpen.classList.remove('--isOpen');
	}

	//  Form
	function openForm() {
		formOpen.classList.toggle('--isOpen');
	}

	function closeForm() {
		formClose.classList.remove('--isOpen');
	}

	function openProducts() {
		console.log('oioioi')
		boxProducts.classList.toggle('-show');
		boxProducts1.classList.toggle('-show');
		boxProducts2.classList.toggle('-show');
	}

	function closeProduct() {
		boxProducts.classList.remove('-show');
		boxProducts1.classList.remove('-show');
		boxProducts2.classList.remove('-show');
	}
	

})();
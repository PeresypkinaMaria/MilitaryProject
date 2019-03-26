/* Открытие основного меню */
document.querySelector(".header__menu-icon").onclick = function (){
	this.classList.toggle("active");
	document.querySelector(".aside__menu").classList.toggle("active");
}
/* Открытие поиска */
document.querySelector(".header__find-icon").onclick = function (){
	document.querySelector(".aside-search").classList.toggle("active");
}


/* Работа с вкладками */
var vkladka = document.querySelectorAll('.main-form__tab-item'),
	vkladki = document.querySelectorAll('.main-form__tab-link');

vkladki.forEach(function(itm, i, items) {
	itm.addEventListener('click', function() {
		
		document.querySelector('.main-form__tab-link.active').classList.remove('active');
		this.classList.add('active');
		
		var el = document.querySelector(this.getAttribute('href'));
		document.querySelector('.main-form__tab-item.active').classList.remove('active');
		el.classList.add('active');

		event.preventDefault();
	});
});

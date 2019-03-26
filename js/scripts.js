/* Открытие основного меню */
document.querySelector(".header__menu-icon").onclick = function (){
	this.classList.toggle("active");
	document.querySelector(".aside__menu").classList.toggle("active");
}
/* Открытие поиска */
document.querySelector(".header__find-icon").onclick = function (){
	document.querySelector(".aside-search").classList.toggle("active");
}

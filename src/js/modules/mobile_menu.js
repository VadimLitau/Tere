const btn_menu_open = document.querySelector(".header_mobile_menu_btn");
const btn_menu_close = document.querySelector(".mobile_menu_item-cross");
const mobile_menu = document.querySelector(".mobile_menu-wrap");

function open_menu() {
	mobile_menu.classList.toggle("mobile_menu-wrap-active");
}

btn_menu_open.addEventListener("click", open_menu);
btn_menu_close.addEventListener("click", open_menu);

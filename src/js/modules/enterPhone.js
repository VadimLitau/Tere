const enter_phone_input = document.querySelector("#enterPhone");
const enter_phone_btn = document.querySelector("#apply_to_drive");

enter_phone_btn.addEventListener("click", () => {
	alert(enter_phone_input.value);
});

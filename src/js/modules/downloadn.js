const google_play_btn = document.querySelector("#google_play");
const app_store_btn = document.querySelector("#app_store");
google_play_btn.addEventListener("click", () => {
	alert("Скачать приложение с Google Play");
});

app_store_btn.addEventListener("click", () => {
	alert("Скачать приложение с App Store");
});

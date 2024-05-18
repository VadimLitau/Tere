// Default theme
import "@splidejs/splide/css";

// // or other themes
// import "@splidejs/splide/css/skyblue";
// import "@splidejs/splide/css/sea-green";

// or only core styles
import "@splidejs/splide/css/core";
import Splide from "@splidejs/splide";

new Splide(".splide", {
	rewindByDrag: true,
	// autoWidth: true,
	// autoHeight: true,
	arrows: false,
	classes: {
		pagination: "splide__pagination",
	},
}).mount();

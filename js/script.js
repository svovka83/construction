// burger-menu

const menuBtn = document.querySelector(".burger-menu");
const menuList = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
	menuList.classList.toggle("active");
});

// page location highlight text

const links = document.querySelectorAll(".menu .menu__item > a");

links.forEach((link) => {
	if (link.href === window.location.href) {
		link.classList.add("active-link");
	}
});

// hero-slider

new Swiper(".hero-swiper", {
	slidePerView: 1,
	pagination: {
		el: ".hero-slider-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<span style="font-family: Ubuntu; font-weight: 700; font-size: 28px; line-height: 150%;" class="' +
				className +
				'">' +
				"0" +
				(index + 1) +
				"</span>"
			);
		},
	},
	navigation: {
		nextEl: ".hero-slider-next",
		prevEl: ".hero-slider-prev",
	},
});

// portfolio-slider

new Swiper(".portfolio__slider", {
	spaceBetween: 30,
	centeredSlides: true,
	initialSlide: 1,
	speed: 800,

	navigation: {
		nextEl: ".portfolio-slider-button-next",
		prevEl: ".portfolio-slider-button-prev",
	},

	breakpoints: {
		375: {
			slidesPerView: 0.9,
		},
		420: {
			slidesPerView: 1,
		},
		500: {
			slidesPerView: 1.2,
		},
		600: {
			slidesPerView: 1.4,
		},
		650: {
			slidesPerView: 1.5,
		},
		768: {
			slidesPerView: 1.8,
		},
		880: {
			slidesPerView: 2.1,
		},
		990: {
			slidesPerView: 2.3,
		},
		1080: {
			slidesPerView: 2.5,
		},
		1180: {
			slidesPerView: 2.8,
		},
		1280: {
			slidesPerView: 3,
		},
	},
});

// testimonials-slider

new Swiper(".testimonials-slider", {
	slidePerView: 1,
	navigation: {
		nextEl: ".testimonials-button-next",
		prevEl: ".testimonials-button-prev",
	},
});

// gallery-slider main and mini (two sliders work together)

const thumbs = new Swiper(".gallery-slider-thumbs", {
	spaceBetween: 20,
	slidesPerView: 3,
	speed: 500,
	watchSlidesProgress: true,
	breakpoints: {
		375: {
			slidesPerView: 3,
		},
		501: {
			slidesPerView: 4,
		},
		611: {
			slidesPerView: 5,
		},
		721: {
			slidesPerView: 6,
		},
	},
});

new Swiper(".gallery-slider-main", {
	spaceBetween: 10,
	speed: 500,
	thumbs: {
		swiper: thumbs,
	},
	navigation: {
		nextEl: ".gallery-button-next",
		prevEl: ".gallery-button-prev",
	},
});

// history vertical and main (two sliders work together)

const textHistory = new Swiper(".text-slider-history", {
	direction: "vertical",
	slidesPerView: 9,
	spaceBetween: 20,
	speed: 500,
	watchSlidesProgress: true,
	// slideToClickedSlide: true,
});

new Swiper(".image-slider-history", {
	spaceBetween: 10,
	speed: 500,
	thumbs: {
		swiper: textHistory,
	},
	navigation: {
		nextEl: ".history-button-next",
		prevEl: ".history-button-prev",
	},
});

// accordion

const trigger = document.querySelectorAll(".accordion__title");

trigger.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.parentElement.classList.toggle("text-hidden");
		btn.querySelector(".accordion__plus").classList.toggle("plus");
	});
});

// modal

const subscribeBtn = document.getElementById("modal-subscribe");
const sendBtn = document.getElementById("modal-send");

const subscribeModal = document.querySelector(".modal-subscribe");
const sendModal = document.querySelector(".modal-send");

const cloeseBtn = document.querySelectorAll(".modal__close");

subscribeBtn.addEventListener("click", () => {
	subscribeModal.style.display = "block";
});
sendBtn.addEventListener("click", () => {
	sendModal.style.display = "block";
});

cloeseBtn[0].addEventListener("click", () => {
	subscribeModal.style.display = "none";
});
cloeseBtn[1].addEventListener("click", () => {
	sendModal.style.display = "none";
});

// libphonenumber-js

// const { parsePhoneNumberFromString } = require("libphonenumber-js");

// const input = document.getElementById("phone");
// const result = document.getElementById("result");

// input.addEventListener("input", () => {
// 	const value = input.value;

// 	const phone = parsePhoneNumberFromString(value);

// 	if (phone && phone.isValid()) {
// 		result.innerHTML = `
//       ✅ Valid number <br>
//       Country: ${phone.country} <br>
//       Country calling code: +${phone.countryCallingCode} <br>
//       International: ${phone.formatInternational()}
//     `;
// 	} else {
// 		result.innerHTML = "❌ Invalid number";
// 	}
// });

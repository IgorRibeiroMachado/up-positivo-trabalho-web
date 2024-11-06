const leftArrow = document.querySelector(".carrousel .left-arrow");
const rightArrow = document.querySelector(".carrousel .right-arrow");

let currentIndex = 0;
const cards = document.querySelectorAll("#card");

leftArrow.addEventListener("click", backImage);
rightArrow.addEventListener("click", nextImage);

function nextImage() {
	if (currentIndex < cards.length - 1) {
		cards[currentIndex].classList.remove("active-card");
		currentIndex++;
		cards[currentIndex].classList.add("active-card");
	}
}

function backImage() {
	if (currentIndex > 0) {
		cards[currentIndex].classList.remove("active-card");
		currentIndex--;
		cards[currentIndex].classList.add("active-card");
	}
}

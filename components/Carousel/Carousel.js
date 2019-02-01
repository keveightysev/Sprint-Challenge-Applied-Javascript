class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.left = carousel.querySelector('.left-button');
        this.right = carousel.querySelector('.righ-button');
        this.images = carousel.querySelectorAll('img');
        this.index = 0;
        this.images[this.index].style.display = "block";
        this.left.addEventListener('click', () => this.moveLeft());
        this.right.addEventListener('click', () => this.moveRight());
        this.imgList = Array.from(this.images).map(image => new Slide(image));
    }


}

class Slide {
    constructor(image) {
        this.image = image;
        this.index = image.dataset.image;
        this.slide = document.querySelector(`div[data-image="${this.index}"]`);
    }

    active() {
        this.slide.style.display = "block";
    }

    inactive() {
        this.card.style.display = "none";
    }
}

let carousel = document.querySelectorAll('.carousel');
carousel.forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
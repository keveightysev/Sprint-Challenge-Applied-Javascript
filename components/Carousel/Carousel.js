class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.left = this.carousel.querySelector('.left-button');
        this.right = this.carousel.querySelector('.right-button');
        this.images = this.carousel.querySelectorAll('img');
        this.index = 0;
        this.images[this.index].style.display = "block";
        debugger
        this.left.addEventListener('click', () => this.moveLeft());
        this.right.addEventListener('click', () => this.moveRight());
        this.imgList = Array.from(this.images).map(image => new Slide(image));
    }

    moveLeft() {
        this.images[this.index].style.display = "none";
        if (this.index === 0) {
            this.index = this.images.length - 1;
        } else {
            this.index--;
        }
        this.images[this.index].style.display = "block";
        this.imgList.forEach((image, index) => {
            if (index !== this.index) {
                image.inactive();
            }
        });
        this.imgList[this.index].active();
    }

    moveRight() {
        this.images[this.index].style.display = "none";
        if (this.index === this.images.length - 1) {
            this.index = 0;
        } else {
            this.index++;
        }
        this.images[this.index].style.display = "block";
        this.imgList.forEach((slide, index) => {
            if (index !== this.index) {
                slide.inactive();
            }
        });
        this.imgList[this.index].active();
    }
}

class Slide {
    constructor(image) {
        this.image = image;
        this.val = this.image.dataset.image;
        this.slide = document.querySelector(`div[data-image="${this.val}"]`);
    }

    active() {
        this.slide.style.display = "block";
    }

    inactive() {
        this.card.style.display = "none";
    }
}

let carouselList = document.querySelectorAll('.carousel');
carouselList.forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
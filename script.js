// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
let slideInterval;

function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    resetSlideInterval();
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Initialize carousel
function initCarousel() {
    showSlide(0);
    resetSlideInterval();
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetSlideInterval();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetSlideInterval();
        }
    });
}

// Start carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const timeLeft = endOfDay - now;
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Jewelry Items Data
const traditionalItems = [
    {
        name: "Royal Necklace",
        description: "Exquisite traditional necklace with intricate gold work",
        image: "images/traditional1.jpg"
    },
    {
        name: "Bridal Set",
        description: "Complete bridal jewelry set with matching pieces",
        image: "images/traditional2.jpg"
    },
    {
        name: "Temple Jewelry",
        description: "Antique-inspired temple jewelry collection",
        image: "images/traditional3.jpg"
    },
    {
        name: "Polki Set",
        description: "Uncut diamond jewelry with traditional motifs",
        image: "images/traditional4.jpg"
    },
    {
        name: "Kundan Necklace",
        description: "Luxurious kundan work with precious stones",
        image: "images/traditional5.jpg"
    }
];

const westernItems = [
    {
        name: "Diamond Pendant",
        description: "Modern diamond pendant with minimalist design",
        image: "images/western1.jpg"
    },
    {
        name: "Gold Chain",
        description: "Contemporary gold chain with unique pattern",
        image: "images/western2.jpg"
    },
    {
        name: "Stack Rings",
        description: "Trendy stackable rings collection",
        image: "images/western3.jpg"
    }
];

// Populate Jewelry Items
function createJewelryItem(item) {
    return `
        <div class="jewelry-item fade-in">
            <img src="${item.image}" alt="${item.name}">
            <div class="jewelry-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <a href="https://wa.me/1234567890?text=I'm interested in ${item.name}" class="order-button" target="_blank">Order Now</a>
            </div>
        </div>
    `;
}

document.querySelector('#traditional .jewelry-grid').innerHTML = 
    traditionalItems.map(createJewelryItem).join('');

document.querySelector('#western .jewelry-grid').innerHTML = 
    westernItems.map(createJewelryItem).join('');

// Reviews Data
const reviews = [
    {
        name: "Sarah Johnson",
        image: "images/reviewer1.jpg",
        rating: 5,
        text: "The craftsmanship is exceptional. I'm in love with my new necklace!"
    },
    {
        name: "Michael Chen",
        image: "images/reviewer2.jpg",
        rating: 5,
        text: "Best jewelry shopping experience. The quality is outstanding."
    },
    {
        name: "Priya Patel",
        image: "images/reviewer3.jpg",
        rating: 5,
        text: "Beautiful traditional pieces that exceeded my expectations."
    },
    {
        name: "Emma Wilson",
        image: "images/reviewer4.jpg",
        rating: 5,
        text: "The attention to detail is remarkable. Highly recommended!"
    }
];

// Populate Reviews
function createReviewCard(review) {
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    return `
        <div class="review-card fade-in">
            <img src="${review.image}" alt="${review.name}" class="reviewer-image">
            <h3>${review.name}</h3>
            <div class="stars">${stars}</div>
            <p>${review.text}</p>
        </div>
    `;
}

let currentReview = 0;
const reviewsSlider = document.querySelector('.reviews-slider');

function showReview(index) {
    reviewsSlider.innerHTML = createReviewCard(reviews[index]);
}

function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
}

// Show first review and start auto-rotation
showReview(0);
setInterval(nextReview, 5000);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.jewelry-item, .review-card').forEach(element => {
    observer.observe(element);
}); 
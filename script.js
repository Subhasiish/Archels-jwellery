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
let offerCountdownEnd = Date.now() + 2 * 60 * 60 * 1000; // 2 hours from now

function updateCountdown() {
    const now = new Date();
    const timeLeft = offerCountdownEnd - now;
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // Optionally, stop at zero
    if (timeLeft <= 0) {
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        clearInterval(offerCountdownInterval);
    }
}

const offerCountdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Scroll Animations
function handleScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Image lazy loading
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Parallax effect for hero section
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Jewelry items hover effects
function initJewelryHoverEffects() {
    const jewelryItems = document.querySelectorAll('.jewelry-item');
    
    jewelryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Gallery lightbox functionality
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <button class="lightbox-close">&times;</button>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            
            // Close lightbox
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                    document.body.removeChild(lightbox);
                }
            });
        });
    });
}

// Add lightbox styles
function addLightboxStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .lightbox-content img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }
        
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 40px;
            height: 40px;
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        @media (max-width: 768px) {
            .nav-links.active {
                display: flex;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(20px);
                padding: 1rem 0;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                box-shadow: var(--shadow-medium);
                border-top: 1px solid rgba(212, 175, 55, 0.1);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initMobileMenu();
    initSmoothScrolling();
    initLazyLoading();
    initParallax();
    initJewelryHoverEffects();
    initGalleryLightbox();
    addLightboxStyles();
    
    // Add scroll event listeners
    window.addEventListener('scroll', () => {
        handleScrollAnimations();
        handleNavbarScroll();
    });
    
    // Initial call for elements already in view
    handleScrollAnimations();
    handleNavbarScroll();

    // --- Reviews Slider Logic ---
    startReviewSlider();
    const prevBtn = document.querySelector('.reviews-control.prev');
    const nextBtn = document.querySelector('.reviews-control.next');
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            showPrevReview();
            startReviewSlider();
        });
        nextBtn.addEventListener('click', () => {
            showNextReview();
            startReviewSlider();
        });
    }

    // Modern reviews carousel after contact
    if (document.querySelector('.modern-reviews-slider')) {
        startModernReviewSlider();
        const prevBtn = document.querySelector('.modern-reviews-control.prev');
        const nextBtn = document.querySelector('.modern-reviews-control.next');
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                showModernPrevReview();
                startModernReviewSlider();
            });
            nextBtn.addEventListener('click', () => {
                showModernNextReview();
                startModernReviewSlider();
            });
        }
    }

    // Modern Reviews Carousel Sliding Logic
    function scrollModernReviews(direction) {
        const track = document.querySelector('.modern-reviews-carousel-track');
        if (!track) return;
        const card = track.querySelector('.review-card');
        if (!card) return;
        const cardWidth = card.offsetWidth + 24; // card width + gap
        if (direction === 'left') {
            track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        const leftArrow = document.querySelector('.modern-reviews-arrow.left');
        const rightArrow = document.querySelector('.modern-reviews-arrow.right');
        if (leftArrow && rightArrow) {
            leftArrow.addEventListener('click', () => scrollModernReviews('left'));
            rightArrow.addEventListener('click', () => scrollModernReviews('right'));
        }
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    handleScrollAnimations();
    handleNavbarScroll();
}, 16)); // ~60fps

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--background-color);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    }
    
    .loading.hidden {
        opacity: 0;
        pointer-events: none;
    }
    
    .loading-spinner {
        width: 50px;
        height: 50px;
        border: 3px solid var(--primary-color);
        border-top: 3px solid transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(loadingStyle);


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

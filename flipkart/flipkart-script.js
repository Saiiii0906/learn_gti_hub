// Banner slide functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');

function showSlide(n) {
    const slides = document.querySelectorAll('.banner-slide');
    
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
    }
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

// Auto-change banner every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Product card click handler
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log('Product clicked:', card.querySelector('h3').textContent);
            // You can add more functionality here, like redirecting to product details page
        });
    });

    // Category item click handler
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.querySelector('p').textContent;
            console.log('Category selected:', category);
            // You can add filtering logic here
        });
    });

    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-bar input');
    
    searchBtn.addEventListener('click', () => {
        const searchQuery = searchInput.value;
        if (searchQuery.trim()) {
            console.log('Search for:', searchQuery);
            // You can add search logic here
        }
    });

    // Allow search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    // Navigation items click handler
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const action = item.querySelector('span').textContent;
            console.log('Nav action:', action);
            // You can add navigation logic here
        });
    });
});

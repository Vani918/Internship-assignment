//fadein effect
window.onload = function () {
    const title = document.querySelector('.navbar-title');
    title.style.animation = 'fadeIn 2s';
};



//searchicon
document.querySelector('.search-icon').addEventListener('click', function() {
    const searchBox = document.getElementById('search-box');
    searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
    document.getElementById('search-input').focus(); // Focus on input field
});

//functionality to search within the page
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = this.value.toLowerCase();
        const bodyText = document.body.innerText.toLowerCase();
        if (bodyText.includes(query)) {
            alert(`Found "${query}" on the page!`);
        } else {
            alert(`"${query}" not found.`);
        }
    }
});


/* caraousal item*/
// Select all carousel items
const items = document.querySelectorAll('.carousal-item');
let currentIndex = 0; // Track the current index

// Function to update the carousel display
function updateCarousel() {
    items.forEach((item, index) => {
        item.style.display = index === currentIndex ? 'block' : 'none'; // Show current item, hide others
    });
}

// Event listeners for buttons
document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Move to next index
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Move to previous index
    updateCarousel();
});

// Initialize carousel display
updateCarousel();

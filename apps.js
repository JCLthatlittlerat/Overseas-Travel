let slideIndex = 1; // Start from the first slide
let slideInterval;

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let preview = document.querySelector('.preview');

    // Ensure slideIndex is within bounds
    if (n > slides.length) { slideIndex = 1; } 
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex - 1].style.display = "block";
    
    // Change the background image
    let bgImage = slides[slideIndex - 1].getAttribute('data-bg');
    preview.style.backgroundImage = `url(${bgImage})`;
}

function moveSlides(n) {
    clearInterval(slideInterval); // Clear the interval to stop automatic sliding
    slideIndex += n;
    showSlides(slideIndex);
    slideInterval = setInterval(() => { slideIndex++; showSlides(slideIndex); }, 5000); // Restart the automatic sliding
}

// Initialize the slideshow
showSlides(slideIndex);
slideInterval = setInterval(() => { slideIndex++; showSlides(slideIndex); }, 5000);

// Attach event listeners to the arrow buttons
document.querySelector('.leftArrow').addEventListener('click', () => moveSlides(-1));
document.querySelector('.rightArrow').addEventListener('click', () => moveSlides(1));

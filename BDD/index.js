
// Mise à jour du compteur d'images
const carousel = document.getElementById('phpCarousel');
const currentImageSpan = document.getElementById('currentImage');

carousel.addEventListener('slide.bs.carousel', function (e) {
    currentImageSpan.textContent = e.to + 1;
});

// Gestion du modal pour l'affichage plein écran
const imageModal = document.getElementById('imageModal');
const modalImage = imageModal.querySelector('.modal-fullscreen-image');

imageModal.addEventListener('show.bs.modal', function (e) {
    const imageSrc = e.relatedTarget.getAttribute('data-bs-image');
    modalImage.src = imageSrc;
});

// Navigation au clavier
document.addEventListener('keydown', function(e) {
    const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
    
    if (e.key === 'ArrowLeft') {
        carouselInstance.prev();
    } else if (e.key === 'ArrowRight') {
        carouselInstance.next();
    } else if (e.key === 'Escape') {
        // Fermer le modal si ouvert, sinon retourner au portfolio
        const modalInstance = bootstrap.Modal.getInstance(imageModal);
        if (modalInstance) {
            modalInstance.hide();
        } else {
            window.location.href = 'index.html';
        }
    }
});

// Pause au survol
carousel.addEventListener('mouseenter', function() {
    bootstrap.Carousel.getInstance(this).pause();
});

carousel.addEventListener('mouseleave', function() {
    bootstrap.Carousel.getInstance(this).cycle();
});

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const items = Array.from(document.querySelectorAll('.gallery-item'));
    let currentIndex = 2; // Initial main image index

    function updateGallery() {
        items.forEach((item, index) => {
            item.classList.remove('main', 'next', 'prev', 'next-next', 'prev-prev');
            item.style.zIndex = '0'; // Reset z-index

            if (index === currentIndex) {
                item.classList.add('main');
                item.style.transform = 'translateX(0)';
                item.style.zIndex = '3'; // Bring main image to the front
            } else if (index === currentIndex - 1) {
                item.classList.add('prev');
                item.style.transform = 'translateX(-110%)';
                item.style.zIndex = '2'; // Layer prev images slightly behind the main image
            } else if (index === currentIndex - 2) {
                item.classList.add('prev-prev');
                item.style.transform = 'translateX(-220%)';
                item.style.zIndex = '1'; // Layer prev-prev images further behind
            } else if (index === currentIndex + 1) {
                item.classList.add('next');
                item.style.transform = 'translateX(110%)';
                item.style.zIndex = '2'; // Layer next images slightly behind the main image
            } else if (index === currentIndex + 2) {
                item.classList.add('next-next');
                item.style.transform = 'translateX(220%)';
                item.style.zIndex = '1'; // Layer next-next images further behind
            } else {
                item.style.transform = 'translateX(0)'; // Hide other images
            }
        });
    }

    gallery.addEventListener('mouseover', (event) => {
        if (event.target.closest('.gallery-item')) {
            const hoveredItem = event.target.closest('.gallery-item');
            const hoveredIndex = items.indexOf(hoveredItem);
            if (hoveredIndex !== currentIndex) {
                currentIndex = hoveredIndex;
                updateGallery();
            }
        }
    });

    updateGallery();
});

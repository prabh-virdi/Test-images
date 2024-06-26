document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const items = Array.from(document.querySelectorAll('.gallery-item'));
    let currentIndex = 2; // Initial main image index

    function updateGallery() {
        items.forEach((item, index) => {
            item.classList.remove('main', 'next', 'prev', 'next-next', 'prev-prev');
            if (index === currentIndex) {
                item.classList.add('main');
            } else if (index === currentIndex - 1) {
                item.classList.add('prev');
            } else if (index === currentIndex - 2) {
                item.classList.add('prev-prev');
            } else if (index === currentIndex + 1) {
                item.classList.add('next');
            } else if (index === currentIndex + 2) {
                item.classList.add('next-next');
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0)';
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

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    let currentIndex = 2;

    function updateGallery() {
        const items = document.querySelectorAll('.gallery-item');
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
            }
        });
    }

    gallery.addEventListener('mouseover', (event) => {
        if (event.target.closest('.gallery-item')) {
            const items = Array.from(document.querySelectorAll('.gallery-item'));
            const hoveredIndex = items.indexOf(event.target.closest('.gallery-item'));
            if (hoveredIndex !== currentIndex) {
                currentIndex = hoveredIndex;
                updateGallery();
            }
        }
    });

    updateGallery();
});

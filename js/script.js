document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const gallery = document.querySelector('.gallery');
    let isFullscreenOpen = false;

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            if (isFullscreenOpen) return;
            isFullscreenOpen = true;

            // Use requestAnimationFrame to delay the style changes for smoother animations
            requestAnimationFrame(() => {
                const rect = item.getBoundingClientRect();
                const fullscreen = document.createElement('div');
                fullscreen.classList.add('fullscreen');
                
                // Add will-change property to hint to the browser about future changes
                fullscreen.style.will-change = 'background';
                
                const img = document.createElement('img');
                img.src = item.src;
                img.style.position = 'absolute';
                img.style.top = `${rect.top}px`;
                img.style.left = `${rect.left}px`;
                img.style.width = `${rect.width}px`;
                img.style.height = `${rect.height}px`;
                img.style.transition = 'all 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)'; // Use a smoother cubic-bezier
                img.style.will-change = 'transform, width, height, top, left'; // Apply will-change to img
                
                fullscreen.appendChild(img);
                document.body.appendChild(fullscreen);

                requestAnimationFrame(() => {
                    // Move these changes inside requestAnimationFrame for better synchronization
                    fullscreen.style.transition = 'background 0.5s ease';
                    fullscreen.style.background = 'rgba(0, 0, 0, 0.8)';
                    img.style.top = '50%';
                    img.style.left = '50%';
                    img.style.transform = 'translate(-50%, -50%)';
                    img.style.width = '90%';
                    img.style.height = 'auto';
                    if (img.offsetHeight > window.innerHeight * 0.8) {
                        img.style.height = '80%';
                        img.style.width = 'auto';
                    }
                });

                fullscreen.addEventListener('click', () => {
                    // Use requestAnimationFrame to ensure smooth animation on close
                    requestAnimationFrame(() => {
                        img.style.width = `${rect.width}px`;
                        img.style.height = `${rect.height}px`;
                        img.style.top = `${rect.top}px`;
                        img.style.left = `${rect.left}px`;
                        img.style.transform = 'translate(0, 0)';
                        fullscreen.style.background = 'rgba(0, 0, 0, 0)';
                    });

                    img.addEventListener('transitionend', () => {
                        fullscreen.remove();
                        isFullscreenOpen = false;
                    });

                    gallery.classList.remove('blur-background');
                });

                gallery.classList.add('blur-background');
            });
        });
    });
});

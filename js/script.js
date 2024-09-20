document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let isFullscreenOpen = false;

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            if (isFullscreenOpen) return;
            isFullscreenOpen = true;

            // Create fullscreen container
            const fullscreen = document.createElement('div');
            fullscreen.classList.add('fullscreen');

            // Create img element with necessary attributes and styles
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt || 'Fullscreen Image';
            
            // Append the img to the fullscreen container
            fullscreen.appendChild(img);
            document.body.appendChild(fullscreen);

            // Animate fullscreen opening
            requestAnimationFrame(() => {
                fullscreen.style.background = 'rgba(0, 0, 0, 0.8)'; // Fade-in background
                img.style.transform = 'scale(1)'; // Scale image to fullscreen
            });

            // Close fullscreen on click
            fullscreen.addEventListener('click', () => {
                fullscreen.style.background = 'rgba(0, 0, 0, 0)'; // Fade-out background
                img.style.transform = 'scale(0.1)'; // Scale image back to original size
                
                // Listen for the end of transition to remove the element
                img.addEventListener('transitionend', () => {
                    fullscreen.remove();
                    isFullscreenOpen = false;
                }, { once: true }); // Ensure the event listener runs only once
            });
        });
    });
});

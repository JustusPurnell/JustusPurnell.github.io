const images = document.querySelectorAll('.artist-gallery img');
    let currentImageIndex = 0;

    function spotlightEffect() {

        images.forEach((img, index) => {
            img.style.opacity = index === currentImageIndex ? '1' : '0.5';
            img.style.transform = index === currentImageIndex ? 'scale(1.1)' : 'scale(1)';
        });


        currentImageIndex = (currentImageIndex + 1) % images.length;
    }


    setInterval(spotlightEffect, 3000);


    spotlightEffect();
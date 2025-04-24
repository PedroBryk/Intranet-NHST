let index = 0;
    const slides = document.querySelectorAll('.slide');
    const indicatorsContainer = document.querySelector('.indicators');

    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('indicator');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('onclick', `goToSlide(${i})`);
        indicatorsContainer.appendChild(dot);
    });

    const indicators = document.querySelectorAll('.indicator');

    function updateSlides() {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            indicators[i].classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        updateSlides();
    }

    function goToSlide(n) {
        index = n;
        updateSlides();
    }

    setInterval(nextSlide, 10000);
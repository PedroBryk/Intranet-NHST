const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav .menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav .menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    function abrirLink() {
      
      window.open("https://novohsthml.sistemasalutem.com.br:9094/hospitalar/#/login", "_blank");
      
    };
const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav .menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    function abrirLink() {
      // Abre o link em uma nova aba/janela
      window.open("https://novohst.sistemasalutem.com.br:9004/hospitalar/#/login", "_blank");
    };
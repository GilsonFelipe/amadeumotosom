// Código jQuery
$(document).ready(function () {
    // Inicializa o carrossel Slick
    var slickSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    var slickInstance = $('.gallery').slick(slickSettings);

    // Adiciona classe quando o carrossel está sendo arrastado
    $('.gallery').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.gallery').addClass('dragging');
    });

    // Remove classe quando o arrastar é concluído
    $('.gallery').on('afterChange', function (event, slick, currentSlide) {
        $('.gallery').removeClass('dragging');
    });

    // Verifica se há vídeos reproduzindo
    function checkForPlayingVideos() {
        var videos = $('.slide video');
        var isVideoPlaying = false;

        videos.each(function () {
            if (!this.paused && !this.ended && this.readyState > 2) {
                isVideoPlaying = true;
                return false; // Sai do loop se um vídeo estiver reproduzindo
            }
        });

        return isVideoPlaying;
    }

    // Pausa ou inicia o carrossel com base no estado do vídeo
    function toggleCarouselPlay() {
        if (checkForPlayingVideos()) {
            slickInstance.slick('slickPause'); // Pausa o carrossel
        } else {
            slickInstance.slick('slickPlay'); // Inicia o carrossel
        }
    }

    // Adiciona eventos de pausa e reprodução para os vídeos
    $('.slide video').on('play pause ended', function () {
        toggleCarouselPlay();
    });
});

// Código JavaScript puro
document.addEventListener('DOMContentLoaded', function () {
    function toggleMobileMenu() {
        const menu = document.querySelector('.menu');
        const isMobile = window.innerWidth <= 800;

        if (isMobile) {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }
    }

    function closeMobileMenu() {
        const menu = document.querySelector('.menu');
        const isMobile = window.innerWidth <= 800;

        if (isMobile) {
            menu.style.display = 'none';
        }
    }

    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    document.querySelector('.mobile-menu-icon').addEventListener('click', toggleMobileMenu);

    // Adiciona um ouvinte de redimensionamento da janela
    window.addEventListener('resize', function () {
        const isMobile = window.innerWidth <= 800;

        // Fecha o menu em dispositivos móveis quando a tela é redimensionada para desktop
        if (!isMobile) {
            closeMobileMenu();
        }
    });
});

// Código JavaScript puro
document.addEventListener('DOMContentLoaded', function () {
    // Função para redirecionar para o link de contato e orçamento
    function redirectToWhatsApp() {
        window.open('https://wa.me/5531993626044?text=Ol%C3%A1%2C+vim+pelo+site.+Gostaria+de+fazer+um+or%C3%A7amento');
    }

    // Adiciona um ouvinte de clique ao botão de contato
    document.getElementById('Contato').addEventListener('click', redirectToWhatsApp);

    // Adiciona um ouvinte de clique ao botão de orçamento
    document.querySelector('.whatsapp-button').addEventListener('click', redirectToWhatsApp);
});

// Código JavaScript puro
document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const audio = item.querySelector('.audio');
        const indicator = document.createElement('div');
        indicator.classList.add('indicator', 'pause-indicator');
        item.appendChild(indicator);

        const legenda = document.createElement('div');
        legenda.classList.add('legenda');
        legenda.textContent = 'Clique na imagem para Escutar';
        item.appendChild(legenda);

        item.addEventListener('click', function () {
            toggleAudio(this);
        });

        audio.volume = 0.2;

        audio.addEventListener('play', function () {
            indicator.classList.remove('pause-indicator');
            indicator.classList.add('play-indicator');
            legenda.textContent = 'Clique na imagem para Pausar';
        });

        audio.addEventListener('pause', function () {
            indicator.classList.remove('play-indicator');
            indicator.classList.add('pause-indicator');
            legenda.textContent = 'Clique na imagem para Escutar';
        });
    });

    function toggleAudio(clickedItem) {
        const audio = clickedItem.querySelector('.audio');

        if (audio.paused) {
            pauseAllAudios();
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    function pauseAllAudios() {
        items.forEach(item => {
            const audio = item.querySelector('.audio');

            if (!audio.paused) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    }
});

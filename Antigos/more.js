// Função para aplicar a animação de fade-in
function applyFadeInAnimation() {
    // Seleciona todos os elementos que precisam da animação
    const elementsToFade = document.querySelectorAll('.row, .service, #servicos');

    // Cria um IntersectionObserver para monitorar a visibilidade dos elementos
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Adiciona a classe show para animação
                observer.unobserve(entry.target); // Para de observar após a primeira vez
            }
        });
    });

    // Adiciona a classe fade-in inicialmente e começa a observar os elementos
    elementsToFade.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Execute a animação ao carregar e ao rolar
window.addEventListener('scroll', applyFadeInAnimation);
window.addEventListener('load', applyFadeInAnimation);

// Ajusta a cor da topbar com base na rolagem da página
function adjustTopbar() {
    const topbar = document.querySelector('header');
    const scrollPosition = window.scrollY;

    // Modifique o estilo da topbar com base na posição de rolagem
    if (scrollPosition > 50) {
        topbar.classList.add('scrolled'); // Adiciona uma classe quando rolar a página
    } else {
        topbar.classList.remove('scrolled'); // Remove a classe se estiver no topo
    }
}

// Adiciona o ouvinte de evento para rolagem
window.addEventListener('scroll', adjustTopbar);

// Configura o estado inicial da topbar
adjustTopbar();

document.querySelectorAll('nav a[href^="#"], a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const iconBoxes = document.querySelectorAll('.icon-box');
    const imgBoxes = document.querySelectorAll('.img-box');
    const initialLayout = Array.from(imgBoxes).map((imgBox, index) => ({
        parent: imgBox.parentNode,
        nextSibling: imgBox.nextSibling,
    }));

    function adjustLayout() {
        if (window.innerWidth < 768) {
            iconBoxes.forEach((box, index) => {
                if (imgBoxes[index]) {
                    box.parentNode.appendChild(imgBoxes[index]);
                }
            });
        } else {
            restoreInitialLayout();
        }
    }

    function restoreInitialLayout() {
        imgBoxes.forEach((imgBox, index) => {
            const { parent, nextSibling } = initialLayout[index];
            if (nextSibling) {
                parent.insertBefore(imgBox, nextSibling);
            } else {
                parent.appendChild(imgBox);
            }
        });
    }

    adjustLayout(); // Chama a função no carregamento da página
    window.addEventListener('resize', adjustLayout);
});


const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');
const body = document.body;

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('toggle');
        navMenu.classList.toggle('nav-active');
    });
});

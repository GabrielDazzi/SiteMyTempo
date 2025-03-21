// Função para ajustar a cor da topbar com base na rolagem da página
function adjustTopbar() {
    const topbar = document.querySelector('header');
    const navMenu = document.querySelector('.nav-menu');
    const burgerMenu = document.querySelector('.burger-menu'); // Seleciona o menu hambúrguer
    const scrollPosition = window.scrollY;
    const isMobile = window.innerWidth <= 768;

    if (topbar) {
        if (scrollPosition === 0) {
            // Quando no topo, aplica a cor
            topbar.style.backgroundColor = isMobile ? "#3C8DBC" : "transparent"; // Cor sólida em dispositivos móveis

            if (isMobile && navMenu) {
                navMenu.style.backgroundColor = "#3C8DBC"; // Mantém a cor sólida no mobile
            }
        } else {
            // Rolando para baixo, muda para a cor desejada
            topbar.style.backgroundColor = "#3C8DBC"; // Cor atual quando rola a página

            if (isMobile && navMenu) {
                navMenu.style.backgroundColor = "#3C8DBC"; // A mesma cor para o menu no mobile
            }
        }
    }
}

// Configura o estado inicial da topbar
window.addEventListener('load', adjustTopbar);
window.addEventListener('scroll', adjustTopbar);

// Função para rolar até uma seção específica
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Função para verificar se o elemento está visível na janela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom >= 0 &&
        rect.left < window.innerWidth &&
        rect.right >= 0
    );
}

// Função para aplicar a classe 'show' aos elementos visíveis
function checkVisibility() {
    const services = document.querySelectorAll('.service');
    const servicosTitle = document.getElementById('servicos'); // Seleciona o título "Nossos Serviços"

    services.forEach(service => {
        if (isElementInViewport(service)) {
            service.classList.add('show');
        }
    });

    // Verifica a visibilidade do título "Nossos Serviços"
    if (servicosTitle && isElementInViewport(servicosTitle)) {
        servicosTitle.classList.add('show');
    }
}

// Verifica a visibilidade ao carregar e ao rolar a página
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Função para aplicar a animação de fade-in
function applyFadeInAnimation() {
    const elementsToFade = document.querySelectorAll('.content1, .contents, .container, .sectiono, #tutorial, .Modalidades');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Para observar apenas uma vez
            }
        });
    });

    elementsToFade.forEach(el => {
        el.classList.add('fade-in'); // Adiciona a classe fade-in
        observer.observe(el); // Observa cada elemento
    });
}

document.addEventListener('DOMContentLoaded', applyFadeInAnimation);

// Configura rolagem suave para âncoras
document.querySelectorAll('nav a[href^="#"], a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Menu hambúrguer
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

const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

function showImage(index) {
    const offset = -index * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
});

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});
const modalidadesContainer = document.querySelector('.Modalidades-P');
const items = Array.from(modalidadesContainer.children);

// Função para duplicar os itens no final do container
function duplicateItems() {
    items.forEach(item => {
        const clone = item.cloneNode(true);
        modalidadesContainer.appendChild(clone);
    });
}

// Monitora a posição de rolagem para saber quando duplicar
modalidadesContainer.addEventListener('scroll', () => {
    const scrollPosition = modalidadesContainer.scrollLeft;
    const maxScrollPosition = modalidadesContainer.scrollWidth - modalidadesContainer.clientWidth;

    // Quando chega ao final do container, duplicar os itens
    if (scrollPosition >= maxScrollPosition - 1) {
        duplicateItems();
    }
});

// Função para alternar o estado de pausa
function togglePause() {
    const modalidadesContainer = document.querySelector('.Modalidades-P');

    // Alterna a classe 'pausada' para pausar ou retomar a animação
    modalidadesContainer.classList.toggle('pausada');

    // Muda o texto do botão conforme o estado
    if (modalidadesContainer.classList.contains('pausada')) {
        pauseButton.textContent = "play_arrow"; // Ícone de play
    } else {
        pauseButton.textContent = "pause"; // Ícone de pause
    }
}

// Função para aplicar a animação de fade-in
function applyFadeInAnimation() {
    // Seleciona todos os elementos com a classe .row
    const elementsToFade = document.querySelectorAll('.text2, .text, .img2, .img3, .img1');
    // Cria um IntersectionObserver para monitorar a visibilidade dos elementos
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento estiver visível na viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Aplica a classe show
                observer.unobserve(entry.target); // Para de observar o elemento
            }
        });
    });

    // Para cada elemento .row, adiciona a classe fade-in e começa a observar
    elementsToFade.forEach(el => {
        el.classList.add('fade-in'); // Adiciona a classe fade-in inicialmente
        observer.observe(el); // Observa o elemento
    });
}

// Execute a animação ao carregar e ao rolar
window.addEventListener('scroll', applyFadeInAnimation);
window.addEventListener('load', applyFadeInAnimation);



// document.addEventListener("DOMContentLoaded", function () {
//     const iconBoxes = document.querySelectorAll('.text');
//     const imgBoxes = document.querySelectorAll('.img-text');
//     const initialLayout = Array.from(imgBoxes).map((imgBox, index) => ({
//         parent: imgBox.parentNode,
//         nextSibling: imgBox.nextSibling,
//     }));

//     function adjustLayout() {
//         if (window.innerWidth < 768) {
//             iconBoxes.forEach((box, index) => {
//                 if (imgBoxes[index]) {
//                     box.parentNode.appendChild(imgBoxes[index]);
//                 }
//             });
//         } else {
//             restoreInitialLayout();
//         }
//     }

//     function restoreInitialLayout() {
//         imgBoxes.forEach((imgBox, index) => {
//             const { parent, nextSibling } = initialLayout[index];
//             if (nextSibling) {
//                 parent.insertBefore(imgBox, nextSibling);
//             } else {
//                 parent.appendChild(imgBox);
//             }
//         });
//     }

//     adjustLayout(); // Chama a função no carregamento da página
//     window.addEventListener('resize', adjustLayout);
// });
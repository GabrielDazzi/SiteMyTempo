function abrirImagem(src) {
    const modal = document.getElementById('modal');
    const img = document.getElementById('imagem-grande');

    if (!modal || !img) return; // Verifica se os elementos existem

    img.src = src; // Define a imagem no modal
    modal.classList.add('show'); // Exibe o modal
    document.body.classList.add('modal-open'); // Bloqueia o scroll do fundo
}

function fecharImagem() {
    const modal = document.getElementById('modal');
    if (!modal) return; // Verifica se o modal existe

    modal.classList.remove('show'); // Esconde o modal
    document.body.classList.remove('modal-open'); // Libera o scroll do fundo
}

// Permite fechar o modal com "Esc" ou clicando fora da imagem
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') fecharImagem();
});

document.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) fecharImagem(); // Fecha ao clicar fora da imagem
});

// Aplica animações de fade-in aos elementos visíveis ao carregar a página
window.addEventListener('load', observeElementsForFadeIn);

function observeElementsForFadeIn() {
    const elementsToFade = document.querySelectorAll('.number-section, .instruction-section, .chip-section, .kit-contents, .real-illustration, .load');

    if (elementsToFade.length === 0) return; // Sai se não houver elementos para animar

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Adiciona a classe de animação
                observer.unobserve(entry.target);  // Para de observar o elemento
            }
        });
    });

    elementsToFade.forEach(el => {
        el.classList.add('fade-in'); // Inicializa com a classe "fade-in"
        observer.observe(el); // Observa a visibilidade do elemento
    });
}



// function abrirImagem(src) {
//     const modal = document.getElementById('modal');
//     const img = document.getElementById('imagem-grande');

//     img.src = src;
//     modal.classList.add('show');  // Adiciona a classe "show" para exibir a modal
//     document.body.classList.add('modal-open');
// }

// function fecharImagem() {
//     const modal = document.getElementById('modal');

//     modal.classList.remove('show');  // Remove a classe "show" para iniciar o fade-out
//     document.body.classList.remove('modal-open');
// }

// window.addEventListener('load', applyFadeInAnimation); // Aplica ao carregar a página

// // Função para aplicar a animação de fade-in
// function applyFadeInAnimation() {
//     const elementsToFade = document.querySelectorAll('.number-section, .instruction-section, .chip-section, .kit-contents, .real-illustration, .load');
// ===============================================================================================================================================================
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('show');
//                 observer.unobserve(entry.target);
//             }
//         });
//     });

//     elementsToFade.forEach(el => {
//         el.classList.add('fade-in'); // Adiciona a classe fade-in inicialmente
//         observer.observe(el); // Observa cada elemento
//     });
// }

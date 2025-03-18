// Este arquivo pode ser utilizado para implementar interações dinâmicas no site.
// Exemplo de uma interação simples: mudar a cor do botão "Ver Mais" ao clicar.

document.querySelector('.btn').addEventListener('click', function() {
    this.style.backgroundColor = '#ff4500';
    this.textContent = 'Obrigado por visitar!';
});
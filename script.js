var stylesheet = document.getElementById('estilos-link');

function trocarEstilo() {
    if (stylesheet.getAttribute('href') === 'style_escuro.css') {
        stylesheet.setAttribute('href', 'style_claro.css');
    } else {
        stylesheet.setAttribute('href', 'style_escuro.css');
    }
}

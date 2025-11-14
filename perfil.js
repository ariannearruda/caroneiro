// Mostra mensagem de boas-vindas no console
window.addEventListener('DOMContentLoaded', () => {
  console.log("Página de perfil carregada!");
});

// Função para simular edição de perfil
function editarPerfil() {
  alert("Função de edição de perfil será ativada em breve!");
}

// Permite clicar no nome para simular edição
document.querySelector('.nome').addEventListener('click', editarPerfil);

// Função para destacar estatísticas ao passar o mouse
const estatisticas = document.querySelectorAll('.estatisticas div');
estatisticas.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.backgroundColor = "#f0f0f0";
  });
  item.addEventListener('mouseleave', () => {
    item.style.backgroundColor = "transparent";
  });
});

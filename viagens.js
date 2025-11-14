// Mensagem de boas-vindas no console
window.addEventListener('DOMContentLoaded', () => {
  console.log("Página de viagens carregada com sucesso!");
});

// Função de busca simulada
function buscarDestino() {
  const input = document.querySelector('.busca input');
  const destino = input.value.trim();

  if (destino !== "") {
    alert(`Procurando viagens para: ${destino}...`);
  } else {
    alert("Digite um destino antes de buscar.");
  }
}

// Conecta o botão de busca à função
document.querySelector('.busca button').addEventListener('click', buscarDestino);

// Função para destacar o destino clicado
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    alert(`Você selecionou: ${card.querySelector('h4').textContent}`);
  });
});

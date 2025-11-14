// Mensagem de boas-vindas no console
window.addEventListener('DOMContentLoaded', () => {
  console.log("Página de viajantes carregada!");
});

// Função de filtros simulados
function filtrar(tipo) {
  alert("Filtro '" + tipo + "' ainda não está disponível.");
}

// Função de busca simulada
document.querySelector(".busca button").addEventListener("click", function () {
  const termo = document.querySelector(".busca input").value.trim();
  if (termo !== "") {
    alert("Procurando viajante: " + termo);
  } else {
    alert("Digite um nome antes de buscar.");
  }
});

// Clique em viajante mostra detalhes
const viajantes = document.querySelectorAll(".viajante");
viajantes.forEach(v => {
  v.addEventListener("click", () => {
    const nome = v.querySelector("h4").textContent;
    alert("Você selecionou o viajante: " + nome);
  });
});

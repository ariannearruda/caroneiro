// Mensagem de boas-vindas no console
window.addEventListener('DOMContentLoaded', () => {
  console.log("Página de criação de grupo carregada!");
});

// Função simulada para escolher imagem
function escolherImagem() {
  alert("Função de escolher imagem será ativada em breve!");
}

// Função simulada para adicionar participantes
function adicionarParticipante() {
  alert("Função de adicionar participantes será ativada em breve!");
}

// Validação e criação de grupo
document.getElementById("formGrupo").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nomeGrupo").value.trim();
  if (nome === "") {
    alert("Por favor, insira o nome do grupo.");
    return;
  }
  alert("Grupo '" + nome + "' criado com sucesso!");
  // Depois de criar, pode redirecionar para a lista de grupos
  irGrupos();
});

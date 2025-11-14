// Mensagem de boas-vindas no console
window.addEventListener('DOMContentLoaded', () => {
  console.log("Página de grupos carregada!");
});

// Função para abrir detalhes de um grupo
function abrirGrupo(nome) {
  alert("Abrindo detalhes do grupo: " + nome);
  // Aqui futuramente pode redirecionar para chat.html ou página de detalhes
  // Exemplo: irChat();
}

// Função para criar grupo (já redireciona via navegação.js)
function irCriarGrupo() {
  irPara('criarGrupo.html');
}

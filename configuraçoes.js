// Mensagem de boas-vindas no console
window.addEventListener('DOMContentLoaded', () => {
  console.log("Página de configurações carregada!");
});

// Alternar notificações
function alternarNotificacoes() {
  const botao = document.querySelector(".switch");
  botao.classList.toggle("ativo");
  if (botao.classList.contains("ativo")) {
    alert("Notificações ativadas!");
  } else {
    alert("Notificações desativadas!");
  }
}

// Alternar tema claro/escuro
function alternarTema() {
  const body = document.body;
  const temaSpan = document.querySelector("#temaValor");

  if (body.classList.contains("tema-claro")) {
    body.classList.remove("tema-claro");
    body.classList.add("tema-escuro");
    temaSpan.textContent = "Escuro";
    alert("Tema escuro ativado!");
  } else {
    body.classList.remove("tema-escuro");
    body.classList.add("tema-claro");
    temaSpan.textContent = "Claro";
    alert("Tema claro ativado!");
  }
}

// Gerenciar conta
function gerenciarConta() {
  alert("Função de gerenciamento de conta será ativada em breve.");
}

// Sair da conta
function sairConta() {
  alert("Você saiu da conta.");
  // Redireciona para login
  irLogin();
}

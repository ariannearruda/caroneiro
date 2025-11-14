// Mensagem de boas-vindas no console
window.addEventListener('DOMContentLoaded', () => {
  console.log("Página de pagamento carregada!");
});

// Selecionar método de pagamento
function selecionarMetodo(metodo) {
  const todos = document.querySelectorAll(".metodo");
  todos.forEach(el => el.classList.remove("selecionado"));

  const escolhido = document.querySelector(`.metodo[onclick*="${metodo}"]`);
  escolhido.classList.add("selecionado");

  alert("Método selecionado: " + escolhido.textContent.trim());
}

// Inserir código de desconto
function inserirCodigoDesconto() {
  const codigo = prompt("Digite seu código de desconto:");
  if (codigo && codigo.trim() !== "") {
    alert("Código '" + codigo + "' aplicado!");
  } else {
    alert("Nenhum código inserido.");
  }
}

// Confirmar pagamento
function confirmarPagamento() {
  const selecionado = document.querySelector(".metodo.selecionado");
  if (!selecionado) {
    alert("Selecione um método de pagamento.");
    return;
  }
  alert("Pagamento confirmado com " + selecionado.textContent.trim() + "!");
  // Depois de confirmar, pode redirecionar para viagens
  irViagens();
}

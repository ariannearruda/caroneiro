// Mensagem de boas-vindas no console
window.addEventListener('DOMContentLoaded', () => {
  console.log("Página de chat carregada!");
});

// Função simulada para envio de imagem
function escolherImagem() {
  alert("Função de envio de imagem será ativada em breve.");
}

// Envio de mensagens
document.getElementById("formChat").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("mensagemInput");
  const texto = input.value.trim();
  if (texto === "") return;

  const novaMsg = document.createElement("div");
  novaMsg.classList.add("mensagem", "enviada");

  const avatar = document.createElement("div");
  avatar.classList.add("avatar-msg", "avatar-carlos");

  const textoMsg = document.createElement("div");
  textoMsg.classList.add("texto-msg");
  textoMsg.textContent = texto;

  novaMsg.appendChild(avatar);
  novaMsg.appendChild(textoMsg);

  document.querySelector(".chat-area").appendChild(novaMsg);
  input.value = "";
});

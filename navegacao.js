// Função genérica para navegar entre páginas
function irPara(pagina) {
  window.location.href = pagina;
}

// Atalhos para páginas principais (se quiser usar nomes diretos)
function irLogin() {
  irPara('index.html');
}

function irViagens() {
  irPara('viagens.html');
}

function irPerfil() {
  irPara('perfil.html');
}

function irViajantes() {
  irPara('viajantes.html');
}

function irCriarGrupo() {
  irPara('criarGrupo.html');
}

function irGrupos() {
  irPara('grupos.html');
}

function irChat() {
  irPara('chat.html');
}

function irConfig() {
  irPara('configuraçoes.html');
}

function irPagamento() {
  irPara('pagamento.html');
}

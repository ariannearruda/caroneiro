document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = e.target.email.value.trim();
  const senha = e.target.senha.value.trim();

  // Verifica se os campos foram preenchidos
  if (email !== "" && senha !== "") {
    alert('Login realizado!');
    window.location.href = 'viagens.html'; // leva para destinos
  } else {
    alert('Por favor, preencha email e senha antes de continuar.');
  }
});

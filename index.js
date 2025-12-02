function entrar() {
  // Redireciona diretamente para a próxima página
  location.href = "trasicao.html";
}

// Adiciona evento de tecla Enter para o botão
document.addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
    entrar();
  }
});

// Foco automático no botão (opcional)
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('button');
  button.focus();
});
// No final do seu index.js atual, adicione:

// Verifica se há usuário logado ao carregar a página
window.onload = function() {
  const usuarioLogado = localStorage.getItem('usuarioLogado');
  if (usuarioLogado) {
    // Se já estiver logado, vai direto para transição
    window.location.href = 'transicao.html';
  }
  
  // Configura botão de cadastro
  document.querySelector('.btn-cadastro').addEventListener('click', function() {
    window.location.href = 'cadastro.html';
  });
};
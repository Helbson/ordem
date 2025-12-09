// Login e senha pré-definidos (apenas para demonstração)
const USUARIO_CORRETO = 'admin';
const SENHA_CORRETA   = '123456';

function entrar(event) {
  event.preventDefault();                 // evita reload da página

  const login = document.getElementById('login').value.trim();
  const senha = document.getElementById('senha').value;
  const msgErro = document.getElementById('msgErro');

  if (login === USUARIO_CORRETO && senha === SENHA_CORRETA) {
    // Autenticação OK → redireciona para o sistema
    window.location.href = 'trasicao.html';   // ou qualquer página interna
  } else {
    msgErro.textContent = 'Usuário ou senha incorretos.';
  }
}
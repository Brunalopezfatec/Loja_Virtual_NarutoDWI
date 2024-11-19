function listaUsuarios() {
  return [
    { id: 1, login: "Bruna", password: "1234@", email: "bruna@gmail.com" },
    { id: 2, login: "Renata", password: "1234@", email: "Renata@gmail.com" },
    { id: 3, login: "Ana", password: "1234@", email: "Ana@gmail.com" },
    { id: 4, login: "Barbara", password: "1234@", email: "Barbara@gmail.com" },
    { id: 5, login: "Thais", password: "1234@", email: "Thais@gmail.com" },
    { id: 6, login: "Bruno", password: "1234@", email: "Bruno@gmail.com" },
  ];
}

const todosUsuarios = listaUsuarios();

function login() {
  // Obtendo os valores do inputs pelo seletor id
  const emailLogin = document.getElementById("emailLogin").value;
  const passwordLogin = document.getElementById("passwordLogin").value;

  // Resolução com laço de repetição para verificação de toda lista de usuários
  const findUserByEmail = todosUsuarios.find((user) => user.email === emailLogin);

  if (!findUserByEmail) {
    alert("Credenciais inválidas");
    return; // Se não encontrar o email, sai da função
  }

  if (findUserByEmail.password === passwordLogin) {
    alert("Login efetuado com sucesso!");
    // Redireciona para home.html após login bem-sucedido
    window.location.href = "home.html";
  } else {
    alert("Credenciais inválidas");
  }
}
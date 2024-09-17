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
  
    //Resolução com laço de repetição para verificação de toda lista de usuários
    const findUserByEmail = todosUsuarios.find(
      (user) => user.email === emailLogin
    );
  
    if (!findUserByEmail) return alert("Credenciais inválidas");
  
    if (findUserByEmail.password === passwordLogin)
      return alert("login efetuado com sucesso!");
  
    // Final de implementação com laço de repetição
  
    if (
      emailLogin != todosUsuarios[0].email &&
      passwordLogin != todosUsuarios[0].password
    )
      return alert("Credenciais do usuário são inválidas!");
  
    return alert("login efetuado com sucesso!");
  }
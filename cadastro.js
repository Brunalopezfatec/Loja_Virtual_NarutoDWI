// Array para armazenar os usuários
let users = JSON.parse(localStorage.getItem("users")) || [];

// Função de cadastro
function register(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Obtém os valores do formulário de cadastro
    const emailRegister = document.getElementById("emailRegister").value;
    const passwordRegister = document.getElementById("passwordRegister").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validação de senha
    if (passwordRegister !== confirmPassword) {
        alert("As senhas não coincidem. Tente novamente.");
        return;
    }

    // Verifica se o e-mail já está cadastrado
    const userExists = users.some((user) => user.email === emailRegister);
    if (userExists) {
        alert("Este e-mail já está cadastrado. Faça login.");
        return;
    }

    // Adiciona o novo usuário
    users.push({ email: emailRegister, password: passwordRegister });

    // Salva os usuários no localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Cadastro realizado com sucesso! Você será redirecionado para a página de login.");

    // Redireciona para a página de login
    window.location.href = "./logins.html";
}

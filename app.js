// Simulando um banco de dados com JSON para credenciais
const users = [
    { email: "usuario1@example.com", password: "senha123" },
    { email: "usuario2@example.com", password: "senha456" },
];

// Função de login
function login(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Obtém os valores do formulário
    const emailInput = document.getElementById("emailLogin").value;
    const passwordInput = document.getElementById("passwordLogin").value;

    // Verifica se o email e a senha estão corretos
    const user = users.find(
        (user) => user.email === emailInput && user.password === passwordInput
    );

    if (user) {
        // Redireciona para a página index.html
        alert("Login bem-sucedido! Redirecionando...");
        window.location.href = "./index.html";
    } else {
        // Exibe mensagem de erro
        alert("Credenciais inválidas. Tente novamente.");
    }
}
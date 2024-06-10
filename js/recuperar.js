function validateAndSend() {
    var email = document.getElementById('email').value;
    var messageContainer = document.getElementById('message-container');
    var loginContainer = document.querySelector('.login-container');
    
    // Verificar se o campo de e-mail contém '@'
    if (email.includes('@')) {
        // Simulando o envio do e-mail de recuperação de senha
        // Normalmente, aqui você chamaria uma API para enviar o e-mail

        // Exibindo a mensagem de confirmação
        messageContainer.style.display = 'block';
        // Ajustando a altura do contêiner principal
        loginContainer.style.minHeight = '300px'; // Ajuste conforme necessário
    } else {
        alert('Por favor, insira um endereço de e-mail válido.');
    }
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos campos
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Realiza a validação dos campos
    if (name.trim() === '' || name.length > 50) {
        alert('Por favor, insira um nome válido (até 50 caracteres).');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    if (subject.trim() === '' || subject.length > 50) {
        alert('Por favor, insira um assunto válido (até 50 caracteres).');
        return;
    }

    if (message.trim() === '' || message.length > 300) {
        alert('Por favor, insira uma mensagem válida (até 300 caracteres).');
        return;
    }

    // Se todos os campos estiverem válidos, o formulário pode ser enviado
    alert('Formulário enviado com sucesso!');
});

// Função para validar o formato do email
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

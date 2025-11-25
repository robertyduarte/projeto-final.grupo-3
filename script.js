// Script simples para navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// EmailJS initialization
(function() {
    emailjs.init("UkncjuyeeZQccX5II"); // Substitua pelo seu Public Key do EmailJS
})();

// Adiciona elementos ao formulário e configura nomes
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.id = 'contact-form';

    // Adiciona campo oculto para o destinatário
    const hidden = document.createElement('input');
    hidden.type = 'hidden';
    hidden.name = 'mensagenstrabalho45@gmail.com';
    hidden.value = 'contato@salaoelegance.com.br';
    form.appendChild(hidden);

    // Define nomes para os campos
    const inputs = form.querySelectorAll('input, textarea');
    if (inputs.length >= 3) {
        inputs[0].name = '{{name}}'; // Campo de texto (nome)
        inputs[1].name = '{{email}}'; // Campo de email
        inputs[2].name = '{{title}}'; // Campo de textarea
    }
});

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_6vqupua', 'template_zo1q5tf', this)
            .then(() => {
                alert('Mensagem enviada com sucesso!');
                document.getElementById('contact-form').reset();
            }, (error) => {
                alert('Erro ao enviar mensagem: ' + JSON.stringify(error));
            });
    });
});

// TESTE NATHAN HEADER
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
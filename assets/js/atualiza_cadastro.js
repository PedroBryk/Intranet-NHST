document.getElementById('whatsapp').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // remove tudo que não for número

    if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

    if (value.length >= 2 && value.length <= 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 6 && value.length <= 10) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    } else if (value.length > 10) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    }

    e.target.value = value;
  });

  document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // remove tudo que não for número

    if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

    if (value.length > 9) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
      value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (value.length > 3) {
      value = value.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }

    e.target.value = value;
  });


//Fetch no Google Planilhas

const scriptURL = 'https://script.google.com/macros/s/AKfycbwGpIIk5CrYwjKQC_rxEl9zeMuFXZhXoSLi7IQQqdMkSMcIeg-4Z4a1cYLE5-F9L4AQ/exec';
const form = document.getElementById('cadastro_form');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Desativa o botão e altera o texto
  submitButton.disabled = true;
  const originalText = submitButton.textContent;
  submitButton.textContent = "Enviando...";

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    body: new FormData(form)
  })
  .then(() => {
    alert("Formulário enviado com sucesso!");
    form.reset(); // Limpa os campos do formulário
  })
  .catch(error => {
    alert("Erro ao enviar o formulário!");
    console.error('Erro:', error);
  })
  .finally(() => {
    // Reativa o botão e restaura o texto
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  });
});

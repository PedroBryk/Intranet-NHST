

//Fetch no Google Planilhas

const scriptURL = 'https://script.google.com/macros/s/AKfycbwP1VcnWK8R7F3CPXur55JjSblTklI4qd3gf-UqqCu5pGlRqHfdCLW_N_1tKBmZnbeXJg/exec';
const form = document.getElementById('notificacao_form');
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

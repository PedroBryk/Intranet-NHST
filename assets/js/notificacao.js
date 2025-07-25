const radios = document.querySelectorAll('input[type="radio"][name="tipo_evento"]');
    const lesaoInput = document.getElementById('lesao_input');
    const outrosInput = document.getElementById('outros_input');

    // Quando digitar em "lesão" ou "outros", desmarcar os rádios e limpar o outro campo
    [lesaoInput, outrosInput].forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.trim() !== "") {
                radios.forEach(r => r.checked = false);
                // Limpa o outro campo de texto
                if (input === lesaoInput) {
                    outrosInput.value = "";
                } else {
                    lesaoInput.value = "";
                }
            }
        });
    });

    // Quando um radio for marcado, limpar os campos de texto
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            lesaoInput.value = "";
            outrosInput.value = "";
        });
    });


//Fetch no Google Planilhas

const scriptURL = 'https://script.google.com/macros/s/AKfycbzx9Emc7vBN6D8ZRibZv0Kn-ZI5lmswniGCt7In7yT_6NM1x_DUOj-YNPEfdSC7WvvbUQ/exec';
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

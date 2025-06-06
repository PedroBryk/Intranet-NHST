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

const scriptURL = 'https://script.google.com/macros/s/AKfycbwpeGBvf9tGAmnbbcLpObFaR7cW566D-GRzcI20JOQUHobWmHHGZGoFN9rnplXwIE51/exec';
    const form = document.getElementById('notificacao_form');

    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: new FormData(form)
      })
      .then(() => alert("Formulário enviado com sucesso!"))
      .catch(error => alert("Erro ao enviar o formulário!"));
    });

document.getElementById('whatsapp').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');

  if (value.length > 11) value = value.slice(0, 11);

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
  let value = e.target.value.replace(/\D/g, '');

  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 9) {
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  } else if (value.length > 6) {
    value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
  } else if (value.length > 3) {
    value = value.replace(/(\d{3})(\d{1,3})/, '$1.$2');
  }

  e.target.value = value;
});

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.charAt(10));
}

function validarWhatsApp(whats) {
  const numeros = whats.replace(/\D/g, '');
  return numeros.length === 11;
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwGpIIk5CrYwjKQC_rxEl9zeMuFXZhXoSLi7IQQqdMkSMcIeg-4Z4a1cYLE5-F9L4AQ/exec';
const form = document.getElementById('cadastro_form');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', e => {
  e.preventDefault();

  const cpf = document.getElementById('cpf').value;
  const whatsapp = document.getElementById('whatsapp').value;

  const erros = [];
  if (!validarCPF(cpf)) erros.push("CPF inválido.");
  if (!validarWhatsApp(whatsapp)) erros.push("WhatsApp inválido. Use o formato com DDD e 9 dígitos.");

  if (erros.length > 0) {
    alert(erros.join("\n"));
    return;
  }

  submitButton.disabled = true;
  const originalText = submitButton.textContent;
  submitButton.textContent = "Enviando...";

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    body: new FormData(form)
  });

  // Mostra a mensagem de sucesso direto
  alert("Formulário enviado com sucesso!");
  form.reset();
  submitButton.disabled = false;
  submitButton.textContent = originalText;
});


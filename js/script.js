// =============================================
// PORTFOLIO JRS - JavaScript
// Accordion, Validação de Formulário, Menu Mobile
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // ACCORDION - HABILIDADES
  // =============================================

  const cards = document.querySelectorAll('.habili-card');

  cards.forEach(card => {
    const header = card.querySelector('.habili-header');

    header.addEventListener('click', () => {
      const isActive = card.classList.contains('active');

      // Fecha todos os cards
      cards.forEach(c => c.classList.remove('active'));

      // Abre o card clicado (se não estava ativo)
      if (!isActive) {
        card.classList.add('active');
      }
    });
  });

  // =============================================
  // MENU HAMBURGER
  // =============================================

  const menuBtn = document.getElementById('menuHamburger');
  const menuNav = document.querySelector('.menu-desktop');
  const menuOverlay = document.getElementById('menuOverlay');

  if (menuBtn && menuNav && menuOverlay) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      menuNav.classList.toggle('active');
      menuOverlay.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    menuOverlay.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      menuNav.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    });

    // Fecha o menu ao clicar em um link
    menuNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        menuNav.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // =============================================
  // VALIDAÇÃO DO FORMULÁRIO
  // =============================================

  const form = document.getElementById('contactForm');
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const telefone = document.getElementById('telefone');
  const mensagem = document.getElementById('mensagem');
  const successMsg = document.getElementById('successMsg');

  // Exibe mensagem de erro
  function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorSpan = formGroup.querySelector('.error-msg');
    input.classList.remove('input-success');
    input.classList.add('input-error');
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
  }

  // Exibe estado de sucesso
  function showSuccess(input) {
    const formGroup = input.closest('.form-group');
    const errorSpan = formGroup.querySelector('.error-msg');
    input.classList.remove('input-error');
    input.classList.add('input-success');
    errorSpan.textContent = '';
    errorSpan.style.display = 'none';
  }

  // Limpa validação
  function clearValidation(input) {
    const formGroup = input.closest('.form-group');
    const errorSpan = formGroup.querySelector('.error-msg');
    input.classList.remove('input-error', 'input-success');
    errorSpan.textContent = '';
    errorSpan.style.display = 'none';
  }

  // Valida nome: obrigatório, mínimo 3 caracteres, apenas letras
  function validateNome() {
    const value = nome.value.trim();
    if (value === '') {
      showError(nome, 'O nome é obrigatório.');
      return false;
    }
    if (value.length < 3) {
      showError(nome, 'O nome deve ter pelo menos 3 caracteres.');
      return false;
    }
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) {
      showError(nome, 'O nome deve conter apenas letras.');
      return false;
    }
    showSuccess(nome);
    return true;
  }

  // Valida e-mail: obrigatório, formato válido
  function validateEmail() {
    const value = email.value.trim();
    if (value === '') {
      showError(email, 'O e-mail é obrigatório.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      showError(email, 'Digite um e-mail válido.');
      return false;
    }
    showSuccess(email);
    return true;
  }

  // Valida telefone: opcional, mas se preenchido precisa do formato correto
  function validateTelefone() {
    const value = telefone.value.trim();
    if (value === '') {
      clearValidation(telefone);
      return true;
    }
    const digits = value.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 11) {
      showError(telefone, 'Telefone inválido. Use (XX) XXXXX-XXXX.');
      return false;
    }
    showSuccess(telefone);
    return true;
  }

  // Valida mensagem: obrigatória, mínimo 10 caracteres
  function validateMensagem() {
    const value = mensagem.value.trim();
    if (value === '') {
      showError(mensagem, 'A mensagem é obrigatória.');
      return false;
    }
    if (value.length < 10) {
      showError(mensagem, 'A mensagem deve ter pelo menos 10 caracteres.');
      return false;
    }
    showSuccess(mensagem);
    return true;
  }

  // =============================================
  // MÁSCARA DE TELEFONE (XX) XXXXX-XXXX
  // =============================================

  telefone.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 0) {
      value = '(' + value;
    }
    if (value.length > 3) {
      value = value.slice(0, 3) + ') ' + value.slice(3);
    }
    if (value.length > 10) {
      value = value.slice(0, 10) + '-' + value.slice(10);
    }

    e.target.value = value;
  });

  // =============================================
  // EVENTOS DE VALIDAÇÃO (BLUR)
  // =============================================

  nome.addEventListener('blur', validateNome);
  email.addEventListener('blur', validateEmail);
  telefone.addEventListener('blur', validateTelefone);
  mensagem.addEventListener('blur', validateMensagem);

  // =============================================
  // SUBMIT DO FORMULÁRIO
  // =============================================

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNomeValid = validateNome();
    const isEmailValid = validateEmail();
    const isTelefoneValid = validateTelefone();
    const isMensagemValid = validateMensagem();

    if (isNomeValid && isEmailValid && isTelefoneValid && isMensagemValid) {
      // Exibe mensagem de sucesso
      successMsg.classList.add('active');

      // Reseta o formulário
      form.reset();
      [nome, email, telefone, mensagem].forEach(clearValidation);

      // Esconde a mensagem após 4 segundos
      setTimeout(() => {
        successMsg.classList.remove('active');
      }, 4000);
    }
  });

});

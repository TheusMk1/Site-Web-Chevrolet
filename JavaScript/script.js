document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.mobile-menu');
  const links = document.querySelector('.nav-links');
  const dropdown = document.querySelector('.nav-dropdown-toggle-item');

  if (menu) {
    menu.setAttribute('aria-expanded', 'false');
  }

  menu?.addEventListener('click', () => {
    links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(links.classList.contains('open')));
  });

  links?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      menu?.setAttribute('aria-expanded', 'false');
    });
  });

  dropdown?.addEventListener('click', event => {
    if (window.innerWidth > 850) {
      event.preventDefault();
      dropdown.classList.toggle('open');
    }
  });

  document.addEventListener('click', event => {
    if (dropdown && !dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
    }
  });

  document.querySelectorAll('[data-interest-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      form.querySelector('.form-feedback').textContent =
        'Obrigado! Recebemos seus dados e em breve entraremos em contato.';
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.catalog-menu [data-category]');
  const categories = document.querySelectorAll('.catalog-content .category');

  function showCategory(id) {
    const target = document.getElementById(id);
    if (!target) return;
    buttons.forEach(button => {
      const selected = button.dataset.category === id;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    categories.forEach(category => category.classList.toggle('active', category === target));
    history.replaceState(null, '', `#${id}`);
  }

  buttons.forEach(button => button.addEventListener('click', () => showCategory(button.dataset.category)));
  const initial = location.hash.slice(1);
  if (initial && document.getElementById(initial)) showCategory(initial);
});

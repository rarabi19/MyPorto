  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      const description = card.querySelector('.description');

      document.querySelectorAll('.description').forEach(desc => {
        if (desc !== description) {
          desc.classList.remove('expanded');
        }
      });

      document.querySelectorAll('.read-more').forEach(btn => {
        if (btn !== button) {
          btn.textContent = 'read more...';
        }
      });

      const isExpanded = description.classList.toggle('expanded');
      button.textContent = isExpanded ? 'read less...' : 'read more...';
    });
  });

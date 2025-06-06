    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelectorAll('.card').forEach(card => {
                if (card !== this.closest('.card')) {
                    card.classList.remove('expanded');
                }
            });

            const card = this.closest('.card');
            card.classList.toggle('expanded');
        });
    });

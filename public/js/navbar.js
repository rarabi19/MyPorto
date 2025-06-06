document.addEventListener('DOMContentLoaded', () => {
    fetch('public/components/navbar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav-btn');

        navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

        const hamburger = document.getElementById('hamburger');
        const sidebar = document.querySelector('.sidebar');

        if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    } else {
        console.warn('Hamburger atau sidebar tidak ditemukan di DOM');
    }
    })
    .catch(error => {
        console.error('Gagal memuat navbar:', error);
        document.getElementById('navbar-placeholder').innerHTML = '<p>Navbar gagal dimuat.</p>';
    });
});

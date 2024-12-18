const menuBtn = document.querySelector('.menu-btn');
        const drawer = document.querySelector('.drawer');
        const overlay = document.getElementById('loginOverlay');

        menuBtn.addEventListener('click', () => {
            drawer.classList.toggle('open');
        });

        function showLogin() {
            overlay.classList.add('show');
        }

        function hideLogin() {
            overlay.classList.remove('show');
        }

        // Gestion du menu utilisateur mobile
        document.querySelector('.user-avatar').addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                const dropdownContent = document.querySelector('.dropdown-content');
                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
                e.stopPropagation();
            }
        });

        document.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                document.querySelector('.dropdown-content').style.display = 'none';
            }
        });

        // Exemple de fonction pour charger les offres personnalisées
        function loadPersonalizedOffers() {
            // Ici vous pouvez ajouter votre logique pour charger les offres
            console.log('Chargement des offres personnalisées...');
        }

        // Charger les offres au chargement de la page
        window.addEventListener('load', loadPersonalizedOffers);
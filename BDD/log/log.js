
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Réinitialiser les messages d'erreur
            document.querySelectorAll('.error-message').forEach(error => {
                error.style.display = 'none';
            });

            // Récupérer les valeurs
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;

            // Validation simple
            let isValid = true;

            if (!email.includes('@')) {
                document.getElementById('emailError').textContent = 'Email invalide';
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }

            if (password.length < 6) {
                document.getElementById('passwordError').textContent = 'Le mot de passe doit contenir au moins 6 caractères';
                document.getElementById('passwordError').style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                // Ici vous pouvez ajouter votre logique d'authentification
                console.log('Formulaire soumis avec:', {
                    email,
                    password,
                    remember
                });
            }
        });

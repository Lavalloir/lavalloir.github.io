
        const form = document.getElementById('signupForm');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const email = document.getElementById('email');

        // Validation en temps réel du mot de passe
        password.addEventListener('input', function() {
            const value = this.value;
            
            // Vérification des critères
            document.getElementById('lengthReq').classList.toggle('valid', value.length >= 8);
            document.getElementById('upperReq').classList.toggle('valid', /[A-Z]/.test(value));
            document.getElementById('lowerReq').classList.toggle('valid', /[a-z]/.test(value));
            document.getElementById('numberReq').classList.toggle('valid', /[0-9]/.test(value));
        });

        // Validation du formulaire
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // Réinitialiser les messages d'erreur
            document.querySelectorAll('.error-message').forEach(error => {
                error.style.display = 'none';
            });

            // Validation de l'email
            if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                document.getElementById('emailError').textContent = 'Email invalide';
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }

            // Validation du mot de passe
            if (password.value.length < 8 || 
                !/[A-Z]/.test(password.value) || 
                !/[a-z]/.test(password.value) || 
                !/[0-9]/.test(password.value)) {
                document.getElementById('passwordError').textContent = 'Le mot de passe ne respecte pas les critères';
                document.getElementById('passwordError').style.display = 'block';
                isValid = false;
            }

            // Validation de la confirmation du mot de passe
            if (password.value !== confirmPassword.value) {
                document.getElementById('confirmPasswordError').textContent = 'Les mots de passe ne correspondent pas';
                document.getElementById('confirmPasswordError').style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                // Ici vous pouvez ajouter votre logique d'inscription
                console.log('Formulaire d\'inscription soumis avec:', {
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    email: email.value,
                    password: password.value,
                    terms: document.getElementById('terms').checked
                });
            }
        });

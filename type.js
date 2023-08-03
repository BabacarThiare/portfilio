document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.logo');
    const navMenu = document.querySelector('nav ul');

    menuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
});

// Récupérer le formulaire
const form = document.querySelector('form');

// Écouter l'événement "submit" du formulaire
form.addEventListener('submit', function (event) {
    // Empêcher l'envoi du formulaire par défaut
    event.preventDefault();

    // Récupérer les valeurs des champs du formulaire
    const nom = form.elements['nom'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    // Validation du formulaire avant l'envoi
    if (nom.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Veuillez remplir tous les champs.');
    } else {
        alert('Votre message a été envoyé avec succès !');
        form.reset(); // Réinitialiser le formulaire après l'envoi
    }
});

const form = document.getElementById('passwordForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const password = document.getElementById('password').value;
  const correctPassword = 'Plop123'; // Remplace avec le mot de passe correct
  
  if (password === correctPassword) {
    //message.textContent = 'Bravo, vous avez gagné ! Ton cadeau se trouve : dans ton cul.';
    //message.style.color = 'green';
	// Redirection vers une nouvelle page si le mot de passe est correct
    window.location.href = 'Bravo.html'; // Remplace avec le nom de ta nouvelle page
  } else {
    // Liste de messages d'erreur prédéfinis
    const errorMessages = [
      'Avez-vous appelé ?',
      'Bande de quiches !',
	  'Observez attentivement, quelqu\'un pourrait vouloir vous aider !',
      'C\'est sans doute un peu tôt...',
      'Râté !'
    ];

    // Choix aléatoire d'un message d'erreur dans la liste
    const randomIndex = Math.floor(Math.random() * errorMessages.length);
    const randomErrorMessage = errorMessages[randomIndex];

    message.textContent = randomErrorMessage;
    message.style.color = 'red';
  }
});


//Si besoin de décrocher vers une autre page
//const form = document.getElementById('passwordForm');
//const message = document.getElementById('message');

//form.addEventListener('submit', function(event) {
//  event.preventDefault();
  
//  const password = document.getElementById('password').value;
//  const correctPassword = 'MotDePasse'; // Remplace avec le mot de passe correct
  
//  if (password === correctPassword) {
//    // Redirection vers une nouvelle page si le mot de passe est correct
//    window.location.href = 'nouvelle_page.html'; // Remplace avec le nom de ta nouvelle page
//  } else {
//    message.textContent = 'Essaie encore';
//    message.style.color = 'red';
//  }
//});
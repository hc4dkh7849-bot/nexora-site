function sendForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('status');
  if(!name || !email || !message){status.textContent='Merci de remplir tous les champs.';return;}
  const subject=encodeURIComponent('Nouveau projet — NEXORA Studio');
  const body=encodeURIComponent(`Bonjour NEXORA,\n\nNom / entreprise : ${name}\nE-mail : ${email}\n\nProjet :\n${message}`);
  window.location.href=`mailto:contact@nexora.fr?subject=${subject}&body=${body}`;
  status.textContent='Ouverture de votre messagerie…';
}

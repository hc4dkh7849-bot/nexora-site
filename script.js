function sendForm(e){
 e.preventDefault();
 const n=document.getElementById('name').value.trim(), m=document.getElementById('message').value.trim(), mail=document.getElementById('email').value.trim(), s=document.getElementById('status');
 if(!n||!m||!mail){s.textContent='Merci de remplir tous les champs.';return;}
 const subject=encodeURIComponent('Projet de site — NEXORA Studio');
 const body=encodeURIComponent(`Bonjour NEXORA,\n\nNom / entreprise : ${n}\nE-mail : ${mail}\n\nProjet :\n${m}`);
 window.location.href=`mailto:nexora.creation.fr@gmail.com?subject=${subject}&body=${body}`;
 s.textContent='Ouverture de votre messagerie…';
}
function toggleMenu(){
  const menu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.menu-toggle');
  if (!menu) return;
  const open = menu.classList.toggle('open');
  if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

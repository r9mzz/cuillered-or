(function(){
  var INSTA = 'ziana_so_chic';
  var entete = document.getElementById('entete');
  var nav = document.getElementById('nav');
  var menu = document.getElementById('menu-btn');

  function surDefilement(){ entete.classList.toggle('defile', window.scrollY > 40); }
  window.addEventListener('scroll', surDefilement, {passive:true}); surDefilement();

  menu.addEventListener('click', function(){
    var o = nav.classList.toggle('ouvert');
    menu.setAttribute('aria-expanded', o); menu.textContent = o ? 'Fermer' : 'Menu';
  });
  nav.addEventListener('click', function(e){
    if (e.target.tagName === 'A'){ nav.classList.remove('ouvert'); menu.setAttribute('aria-expanded', false); menu.textContent = 'Menu'; }
  });

  // Visionneuse
  var vis = document.getElementById('visionneuse'), visImg = vis.querySelector('img');
  document.querySelectorAll('.tenue').forEach(function(b){
    b.addEventListener('click', function(){
      visImg.src = b.dataset.src; visImg.alt = b.querySelector('img').alt;
      vis.showModal();
    });
  });
  vis.addEventListener('click', function(){ vis.close(); });

  // Mentions légales
  var men = document.getElementById('mentions');
  document.getElementById('ouvrir-mentions').addEventListener('click', function(){ men.showModal(); });
  document.getElementById('fermer-mentions').addEventListener('click', function(){ men.close(); });

  // Formulaire : prépare le message, le copie, ouvre la conversation Instagram
  var f = document.getElementById('formulaire'), aide = document.getElementById('aide');
  f.addEventListener('submit', function(e){
    e.preventDefault();
    var ok = true;
    ['prenom','date'].forEach(function(n){
      var el = f.elements[n], vide = !el.value.trim();
      el.classList.toggle('erreur', vide); if (vide && ok){ el.focus(); ok = false; }
    });
    if (!ok) return;
    var d = f.elements.date.value, dateTxt = d;
    try { dateTxt = new Date(d + 'T12:00').toLocaleDateString('fr-FR', {day:'numeric', month:'long', year:'numeric'}); } catch(_){}
    var envies = Array.prototype.map.call(f.querySelectorAll('input[name=envie]:checked'), function(i){ return i.value; });
    var t = 'Bonjour, je suis ' + f.elements.prenom.value.trim() + '. Mon mariage est le ' + dateTxt;
    if (f.elements.ville.value.trim()) t += ', à ' + f.elements.ville.value.trim();
    t += '.';
    if (envies.length) t += ' Je suis intéressée par : ' + envies.join(', ').toLowerCase() + '.';
    if (f.elements.message.value.trim()) t += ' ' + f.elements.message.value.trim();
    t += ' (message envoyé depuis votre site)';
    var ouvrir = function(){ aide.classList.add('visible'); window.open('https://ig.me/m/' + INSTA, '_blank', 'noopener'); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(ouvrir, ouvrir); else ouvrir();
  });
})();

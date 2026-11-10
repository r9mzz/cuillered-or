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

  // Téléphone : 4 écrans séparés (Accueil, Tenues, Négafa, Ma date), changés par les onglets du bas
  var tel = window.matchMedia('(max-width:640px)');
  var racine = document.documentElement;
  var onglets = document.querySelectorAll('.onglets a');
  var ECRANS = ['haut','tenues','negafa','contact'];
  function ecranDepuisHash(){ var h = location.hash.replace('#',''); return ECRANS.indexOf(h) >= 0 ? h : 'haut'; }
  function montrer(e, defiler){
    racine.setAttribute('data-ecran', e);
    onglets.forEach(function(a){ var on = a.getAttribute('href') === '#' + e; a.classList.toggle('actif', on); if (on) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
    if (defiler) window.scrollTo(0, 0);
  }
  function appliquer(){
    if (tel.matches){ racine.classList.add('app'); montrer(ecranDepuisHash(), false); }
    else { racine.classList.remove('app'); racine.removeAttribute('data-ecran'); }
  }
  document.addEventListener('click', function(ev){
    var a = ev.target.closest && ev.target.closest('a[href^="#"]');
    if (!a || !tel.matches) return;
    var e = a.getAttribute('href').slice(1);
    if (ECRANS.indexOf(e) < 0) return;
    ev.preventDefault();
    if (location.hash !== '#' + e) history.pushState(null, '', '#' + e);
    montrer(e, true);
  });
  window.addEventListener('popstate', function(){ if (tel.matches) montrer(ecranDepuisHash(), true); });
  if (tel.addEventListener) tel.addEventListener('change', appliquer);
  appliquer();

  // Points sous les carrousels (téléphone) : montrent qu'on peut faire glisser
  document.querySelectorAll('.points').forEach(function(p){
    var piste = document.querySelector('.' + p.dataset.pour);
    if (!piste) return;
    var items = piste.children, pts = [];
    for (var i = 0; i < items.length; i++){ var s = document.createElement('span'); p.appendChild(s); pts.push(s); }
    function maj(){
      var max = piste.scrollWidth - piste.clientWidth;
      var k = max > 0 ? Math.round(piste.scrollLeft / max * (items.length - 1)) : 0;
      pts.forEach(function(s, i){ s.classList.toggle('on', i === k); });
    }
    piste.addEventListener('scroll', maj, {passive:true}); maj();
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
        t += '.';
    if (envies.length) t += ' Je suis intéressée par : ' + envies.join(', ').toLowerCase() + '.';
    if (f.elements.message.value.trim()) t += ' ' + f.elements.message.value.trim();
    t += ' (message envoyé depuis votre site)';
    var ouvrir = function(){ aide.classList.add('visible'); window.open('https://ig.me/m/' + INSTA, '_blank', 'noopener'); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(ouvrir, ouvrir); else ouvrir();
  });
})();

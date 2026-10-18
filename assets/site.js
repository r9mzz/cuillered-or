// La Cuillère d'Or : carte, horaires et comportements communs à toutes les pages.
const CARTE = [
  {id:'orient', titre:'Plats d\'Orient', groupes:[
    {titre:'Tajines', plats:[
      ['Tajine kefta & œuf','15','Boulettes de kefta fondantes, mijotées dans une sauce tomate aux épices, surmontées d\'un œuf.'],
      ['Tajine de poulet','15','Poulet aux olives et au citron confit, accompagné de frites.'],
      ['Tajine viande & pruneaux','18,90','Veau ou agneau au choix, mijoté aux épices, avec des pruneaux fondants.']]},
    {titre:'Couscous', note:'Supplément viande : +3,50 €', plats:[
      ['Végétarien','13,50','Semoule, légumes frais de saison.'],
      ['Poulet','15','Semoule, poulet et légumes frais de saison.'],
      ['Viande','18','Semoule, veau ou agneau et légumes frais de saison.'],
      ['Royal','19','Semoule, poulet, merguez, boulettes de viande hachée et légumes de saison.']]},
    {titre:'Pastilla', plats:[
      ['Pastilla de la cheffe','13','Poulet parfumé, amandes et fines notes sucrées salées dans un feuilleté croustillant, avec une salade.']]}
  ]},
  {id:'entrees', titre:'Entrées', groupes:[
    {titre:'Salades', plats:[
      ['Salade fraîcheur','','Concombres, tomates, pommes de terre et crudités selon les arrivages du jour.'],
      ['Chakchouka','','Poivrons, oignons, tomates et épices orientales.']]},
    {titre:'Soupe', plats:[
      ['Harira','','Soupe traditionnelle marocaine aux lentilles, avec une petite chabakia.']]},
    {titre:'Bricks', plats:[
      ['Bricks poulet','','2 pièces.'],
      ['Bricks viande hachée','','2 pièces.'],
      ['Assortiment','','5 pièces au choix.'],
      ['Brick Annabi','','Grande brick croustillante, écrasé de pommes de terre, thon et œuf coulant.']]}
  ]},
  {id:'assiettes', titre:'Grillades', groupes:[
    {titre:'Grillades', note:'Avec pâtes ou frites, salade et chakchouka. Supplément viande : +3,50 €', plats:[
      ['Brochettes de poulet','','3 pièces.'],
      ['Côtelettes d\'agneau','','3 pièces.'],
      ['Assiette de la cheffe','','Brochette de poulet, merguez, kefta et côtelette.'],
      ['Assiette signature','','Entrecôte de bœuf de 300 g.']]},
    {titre:'Mijoté', plats:[
      ['Souris d\'agneau','','Confite et fondante, pommes de terre grenailles rôties et salade fraîche.']]},
    {titre:'Menu enfant', plats:[
      ['Pizza kids ou nuggets frites','','Avec un diabolo grenadine et un yaourt à boire.']]}
  ]},
  {id:'pizzas', titre:'Pizzas', groupes:[
    {titre:'Base tomate', note:'Base crème : +1 €', plats:[
      ['Margherita','9,50','Tomate, mozzarella, basilic, huile d\'olive.'],
      ['Reine','','Tomate, mozzarella, jambon, champignons, origan.'],
      ['Orientale','','Tomate, mozzarella, merguez, poivrons, olives, origan.'],
      ['Vega','','Tomate, mozzarella, légumes, origan.'],
      ['Napolitaine','','Tomate, mozzarella, anchois, câpres, tomates cerises, origan.']]},
    {titre:'Base tomate (suite)', plats:[
      ['Buffalina','','Tomate, mozzarella, roquette, parmesan, burrata, tomates cerises.'],
      ['4 fromages','','Tomate, mozzarella, chèvre, roquefort, parmigiano, origan.'],
      ['La Cuillère d\'Or','','Tomate, mozzarella, charcuterie fine, roquette, parmesan.'],
      ['Chicken','','Tomate, mozzarella, poulet mariné, champignons, origan.']]},
    {titre:'Base crème fraîche', plats:[
      ['Chèvre-miel','','Crème, mozzarella, chèvre, noix, miel, persil.'],
      ['Raclette','','Crème, mozzarella, jambon, pommes de terre, raclette.'],
      ['Saumon','','Crème, mozzarella, saumon, origan.']]}
  ]},
  {id:'panuozzo', titre:'Panuozzo & pâtes', groupes:[
    {titre:'Panuozzo', note:'Pain cuit minute, pesto verde ou pesto rosso au choix', plats:[
      ['Il Verde (végétarien)','7,90','Légumes confits maison, roquette, stracciatella, réduction balsamique.'],
      ['Il Tacchino','9,50','Jambon de dinde, légumes confits, roquette, stracciatella, réduction balsamique.'],
      ['Il Robusto','11','Poitrine de bœuf grillée et chorizo séché, légumes confits, roquette, stracciatella.']]},
    {titre:'Pâtes', plats:[
      ['Penne bolognaise','13',''],
      ['Penne forestière','13',''],
      ['Penne crème & saumon','13','']]}
  ]}
];
const EXTRAS = [
  ['h','À la carte'],
  ['Harira','5','Soupe marocaine aux lentilles, petite chabakia.'],['Harcha avocat & saumon','7,50','Fromage frais, avocat, saumon fumé, petite salade.'],
  ['Egg muffin','4,50',''],['Smoothie maison','4,90','Avocat & amandes, ou banane, miel & dattes.'],
  ['h','Boissons chaudes'],
  ['Thé à la menthe','2',''],['Espresso','1,90',''],['Café classique','2',''],['Café long','2,50',''],
  ['Double espresso','2,50',''],['Café au lait / café crème','3',''],['Cappuccino','3',''],['Chocolat chaud','2,50',''],['Latte macchiato','3,50','']
];

// Horaires, en minutes depuis minuit (0 = dimanche)
const MIDI_SOIR = [[510, 870], [1110, 1350]];
const HORAIRES = [
  ['Dimanche', 'Brunch 10h – 18h30', [[600, 1110]]],
  ['Lundi', '8h30 – 14h30 · 18h30 – 22h30', MIDI_SOIR],
  ['Mardi', '8h30 – 14h30 · 18h30 – 22h30', MIDI_SOIR],
  ['Mercredi', 'Fermé', []],
  ['Jeudi', '8h30 – 14h30 · 18h30 – 22h30', MIDI_SOIR],
  ['Vendredi', '8h30 – 14h30 · 18h30 – 22h30', MIDI_SOIR],
  ['Samedi', '8h30 – 14h30 · 18h30 – 22h30', MIDI_SOIR]
];

const ligne = ([nom, px, desc]) => `<div class="plat-ligne"><span class="nom">${nom}</span><span class="px${px ? '' : ' vide'}">${px ? px + ' €' : 'prix à venir'}</span>${desc ? `<span class="desc">${desc}</span>` : ''}</div>`;

const $ = id => document.getElementById(id);

// Lentille de verre qui glisse sous l'élément actif (menu, onglets, barre du téléphone)
function lentille(boite, el) {
  const l = boite && boite.querySelector('.lentille'); if (!l) return;
  if (!el || !el.offsetWidth) { l.style.opacity = 0; return; }
  l.style.opacity = 1; l.style.width = el.offsetWidth + 'px'; l.style.transform = `translateX(${el.offsetLeft}px)`;
}
const page = document.body.dataset.page;
document.querySelectorAll(`[data-page="${page}"]`).forEach(a => a !== document.body && a.classList.add('actif'));
const menus = () => { lentille($('liens'), $('liens').querySelector('a.actif')); lentille($('appel-mobile'), $('appel-mobile').querySelector('a.actif')); };

// Carte en onglets
const onglets = $('onglets');
if (onglets) {
  const panneaux = $('panneaux');
  CARTE.forEach((c, i) => {
    onglets.insertAdjacentHTML('beforeend', `<button role="tab" id="t-${c.id}" aria-controls="p-${c.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${c.titre}</button>`);
    panneaux.insertAdjacentHTML('beforeend', `<div class="panneau" role="tabpanel" id="p-${c.id}" aria-labelledby="t-${c.id}"${i ? ' hidden' : ''}>${c.groupes.map(g => `<div class="groupe"><h3>${g.titre}</h3>${g.note ? `<p class="note">${g.note}</p>` : ''}${g.plats.map(ligne).join('')}</div>`).join('')}</div>`);
  });
  const boutons = [...onglets.querySelectorAll('button')];
  const placer = () => lentille(onglets, onglets.querySelector('[aria-selected="true"]'));
  function choisir(b) {
    boutons.forEach(x => {
      const on = x === b; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
      const p = $(x.getAttribute('aria-controls')); p.hidden = !on; p.classList.toggle('entre', on);
    });
    placer(); b.scrollIntoView({block: 'nearest', inline: 'nearest', behavior: 'smooth'});
  }
  onglets.addEventListener('click', e => { const b = e.target.closest('button'); if (b) choisir(b); });
  onglets.addEventListener('keydown', e => {
    const i = boutons.indexOf(document.activeElement); if (i < 0) return;
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (d) { const n = boutons[(i + d + boutons.length) % boutons.length]; n.focus(); choisir(n); }
  });
  // Arrivée depuis un lien « carte.html#pizzas »
  const voulu = boutons.find(b => b.id === 't-' + location.hash.slice(1));
  if (voulu) choisir(voulu);
  addEventListener('resize', placer); (document.fonts ? document.fonts.ready : Promise.resolve()).then(placer); placer();
}

// Brunch : à la carte et boissons
const extras = $('extras');
if (extras) {
  const g = [];
  EXTRAS.forEach(x => x[0] === 'h' ? g.push({t: x[1], l: []}) : g.at(-1).l.push(x));
  extras.innerHTML = g.map(x => `<div class="extra"><h4>${x.t}</h4>${x.l.map(ligne).join('')}</div>`).join('') +
    `<div class="extra"><h4>En exclusivité</h4>${ligne(['Frappuccino amlou', '4,90', ''])}</div>`;
}

// Horaires et état d'ouverture
const now = new Date(), jour = now.getDay(), min = now.getHours() * 60 + now.getMinutes();
const ouvert = HORAIRES[jour][2].some(([a, b]) => min >= a && min < b);
if ($('horaires')) $('horaires').innerHTML = [1, 2, 3, 4, 5, 6, 0].map(j =>
  `<li class="${j === jour ? 'auj' : ''}"><span>${HORAIRES[j][0]}</span><span>${HORAIRES[j][1].replace(' · ', '<br>')}</span></li>`).join('');
document.querySelectorAll('.etat').forEach(e => { e.classList.toggle('ouvert', ouvert); e.querySelector('span').textContent = ouvert ? 'Ouvert en ce moment' : 'Fermé en ce moment'; });

// Le manifeste s'allume mot à mot ; les mots entre * sont en or
const man = $('manifeste'); let mots = [];
if (man) {
  man.innerHTML = man.textContent.trim().split(/\s+/).map(w => w.startsWith('*') ? `<span class="m or">${w.replace(/\*/g, '')}</span>` : `<span class="m">${w}</span>`).join(' ');
  mots = [...man.querySelectorAll('.m')];
}
function allumer() {
  if (!man) return;
  const r = man.getBoundingClientRect(), p = Math.min(1, Math.max(0, (innerHeight * .85 - r.top) / (r.height + innerHeight * .35)));
  const n = Math.round(p * mots.length);
  mots.forEach((m, i) => { m.style.opacity = i < n ? 1 : .18; });
}

// Ouverture : la photo descend plus lentement que la page, le texte s'efface
const fond = $('hero-fond'), texte = $('hero-texte');
function parallaxe() {
  if (!fond) return;
  const y = scrollY, h = innerHeight; if (y > h * 1.2) return;
  fond.style.transform = `translateY(${y * .35}px)`;
  texte.style.transform = `translateY(${y * .15}px)`; texte.style.opacity = Math.max(0, 1 - y / (h * .7));
}

// Grandes photos : léger zoom arrière quand elles arrivent
const zoom = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vue'); zoom.unobserve(e.target); } }), {threshold: .25});
document.querySelectorAll('.tuile.photo').forEach(t => zoom.observe(t));

// Flèches de la galerie
const gal = $('galerie');
if (gal) {
  const prec = $('prec'), suiv = $('suiv'), pas = () => gal.querySelector('.plat').offsetWidth + 20;
  prec.onclick = () => gal.scrollBy({left: -pas(), behavior: 'smooth'});
  suiv.onclick = () => gal.scrollBy({left: pas(), behavior: 'smooth'});
  const bornes = () => { prec.disabled = gal.scrollLeft < 8; suiv.disabled = gal.scrollLeft > gal.scrollWidth - gal.clientWidth - 8; };
  gal.addEventListener('scroll', bornes, {passive: true}); bornes();
}

// Apparitions au défilement
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.remove('cache'); io.unobserve(e.target); } }), {rootMargin: '0px 0px -6% 0px'});
document.querySelectorAll('.vient').forEach(el => { if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('cache'); io.observe(el); } });

let attente = false;
const tout = () => { attente = false; allumer(); parallaxe(); };
addEventListener('scroll', () => { if (!attente) { attente = true; requestAnimationFrame(tout); } }, {passive: true});
addEventListener('resize', () => { menus(); tout(); });
(document.fonts ? document.fonts.ready : Promise.resolve()).then(menus);
menus(); tout();

// La Cuillère d'Or : carte, horaires et comportements communs à toutes les pages.
const CARTE = [
  {id:'orient', titre:'Plats d\'Orient', court:'Orient', groupes:[
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
  {id:'entrees', titre:'Entrées', court:'Entrées', groupes:[
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
  {id:'assiettes', titre:'Grillades', court:'Grillades', groupes:[
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
  {id:'pizzas', titre:'Pizzas', court:'Pizzas', groupes:[
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
  {id:'panuozzo', titre:'Panuozzo & pâtes', court:'Pâtes', groupes:[
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


const ligne = ([nom, px, desc]) => `<div class="ligne"><span class="nom">${nom}</span><span class="px">${px ? px + ' €' : ''}</span>${desc ? `<span class="desc">${desc}</span>` : ''}</div>`;
const $ = id => document.getElementById(id);

// Reflet de verre qui glisse sous l'élément actif (menu et sélecteur de la carte)
function lentille(boite, el) {
  const l = boite && boite.querySelector('.lentille'); if (!l) return;
  if (!el || !el.offsetWidth) { l.style.opacity = 0; return; }
  l.style.opacity = 1; l.style.width = el.offsetWidth + 'px'; l.style.transform = `translateX(${el.offsetLeft}px)`;
}

// Page active
const page = document.body.dataset.page;
document.querySelectorAll(`a[data-page="${page}"]`).forEach(a => a.classList.add('actif'));
const placerMenu = () => lentille($('liens'), $('liens').querySelector('a.actif'));

// Menu plein écran du téléphone
const menuBtn = $('menu-btn'), menu = $('menu');
function basculer(ouvrir) {
  menuBtn.setAttribute('aria-expanded', ouvrir); menu.classList.toggle('ouvert', ouvrir);
  menu.inert = !ouvrir; document.body.style.overflow = ouvrir ? 'hidden' : '';
}
menu.inert = true;
menuBtn.addEventListener('click', () => basculer(menuBtn.getAttribute('aria-expanded') !== 'true'));
menu.addEventListener('click', e => { if (e.target.closest('a')) basculer(false); });
addEventListener('keydown', e => { if (e.key === 'Escape') basculer(false); });

// Carte : sélecteur segmenté
const segment = $('segment');
if (segment) {
  const volets = $('volets');
  CARTE.forEach((c, i) => {
    segment.insertAdjacentHTML('beforeend', `<button role="tab" id="t-${c.id}" aria-controls="v-${c.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}"><span class="long">${c.titre}</span><span class="court">${c.court}</span></button>`);
    volets.insertAdjacentHTML('beforeend', `<div class="volet" role="tabpanel" id="v-${c.id}" aria-labelledby="t-${c.id}"${i ? ' hidden' : ''}>${c.groupes.map(g => `<div class="groupe"><h3>${g.titre}</h3>${g.note ? `<p class="note">${g.note}</p>` : ''}${g.plats.map(ligne).join('')}</div>`).join('')}</div>`);
  });
  const boutons = [...segment.querySelectorAll('button')];
  const placer = () => lentille(segment, segment.querySelector('[aria-selected="true"]'));
  function choisir(b, defiler) {
    boutons.forEach(x => {
      const on = x === b; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
      const v = $(x.getAttribute('aria-controls')); v.hidden = !on; v.classList.toggle('entre', on);
    });
    placer();
    // Ramène le haut de la carte sous le sélecteur si on a déjà défilé plus bas
    const haut = volets.getBoundingClientRect().top + scrollY - segment.offsetHeight - 110;
    if (defiler && scrollY > haut) scrollTo({top: haut});
  }
  segment.addEventListener('click', e => { const b = e.target.closest('button'); if (b) choisir(b, true); });
  segment.addEventListener('keydown', e => {
    const i = boutons.indexOf(document.activeElement); if (i < 0) return;
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (d) { const n = boutons[(i + d + boutons.length) % boutons.length]; n.focus(); choisir(n, true); }
  });
  // Arrivée depuis un lien « carte.html#pizzas »
  const voulu = boutons.find(b => b.id === 't-' + location.hash.slice(1));
  if (voulu) choisir(voulu, false);
  addEventListener('resize', placer); (document.fonts ? document.fonts.ready : Promise.resolve()).then(placer); placer();
}

// Brunch : à la carte et boissons
const extras = $('extras');
if (extras) {
  const g = [];
  EXTRAS.forEach(x => x[0] === 'h' ? g.push({t: x[1], l: []}) : g.at(-1).l.push(x));
  g.push({t: 'En exclusivité', l: [['Frappuccino amlou', '4,90', '']]});
  extras.innerHTML = g.map(x => `<div class="groupe vient"><h3>${x.t}</h3>${x.l.map(ligne).join('')}</div>`).join('');
}

// Horaires et état d'ouverture
const now = new Date(), jour = now.getDay(), min = now.getHours() * 60 + now.getMinutes();
const ouvert = HORAIRES[jour][2].some(([a, b]) => min >= a && min < b);
if ($('horaires')) $('horaires').innerHTML = [1, 2, 3, 4, 5, 6, 0].map(j =>
  `<li class="${j === jour ? 'auj' : ''}"><span>${HORAIRES[j][0]}</span><span>${HORAIRES[j][1]}</span></li>`).join('');
document.querySelectorAll('.etat').forEach(e => { e.classList.toggle('ouvert', ouvert); e.textContent = ouvert ? 'Ouvert en ce moment' : 'Fermé en ce moment'; });

// Apparition douce des blocs
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vu'); io.unobserve(e.target); } }), {rootMargin: '0px 0px -8% 0px'});
document.querySelectorAll('.vient').forEach(el => io.observe(el));

addEventListener('resize', placerMenu);
(document.fonts ? document.fonts.ready : Promise.resolve()).then(placerMenu);
placerMenu();

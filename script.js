/* ============================================================
   VZ CONNECT — configuração central
   ============================================================ */

/* Links oficiais */
/* O formulário fica em vzconnect.com.br/formulario e sempre abre em uma nova aba. */
const LEAD_FORM_URL     = "formulario/";
const INSTAGRAM_URL     = "https://www.instagram.com/vz.connect/";
const FACEBOOK_URL      = "https://www.facebook.com/Vze.connect/";
const LINKEDIN_URL      = "https://www.linkedin.com/company/vz-connect/about/?viewAsMember=true";
const WHATSAPP_URL      = "https://wa.me/5527998431267";
const WHATSAPP_BASE_URL = "https://wa.me/5527998431267";

function createWhatsAppUrl(message) {
  return WHATSAPP_BASE_URL + "?text=" + encodeURIComponent(message);
}

/* Mensagens do WhatsApp por interesse */
const WHATSAPP_MESSAGES = {
  general:
    "Olá! Vim pelo site da VZ Connect e quero entender qual solução faz mais sentido para a minha empresa.",
  social:
    "Olá! Vim pelo site da VZ Connect e quero saber mais sobre a gestão das redes sociais.",
  start:
    "Olá! Vim pelo site da VZ Connect e quero conhecer a Linha Start e receber informações e valores.",
  premium:
    "Olá! Vim pelo site da VZ Connect e quero conhecer a Linha Premium e receber informações e valores.",
  landingPage:
    "Olá! Vim pelo site da VZ Connect e quero saber mais sobre Landing Pages e valores.",
  businessSite:
    "Olá! Vim pelo site da VZ Connect e quero saber mais sobre Site Empresarial e valores.",
  onlineStore:
    "Olá! Vim pelo site da VZ Connect e quero saber mais sobre Loja Online e valores.",
  integrated:
    "Olá! Vim pelo site da VZ Connect e quero entender como funciona a solução integrada de gestão das redes sociais e site.",
  results:
    "Olá! Vim pelo site da VZ Connect, vi os resultados e quero conversar sobre um projeto para a minha empresa."
};

/* CTA persistente: frase, rótulo e destino por bloco */
const DOCK_CONTEXTS = {
  top:        { phrase: "Conecte sua marca",                     label: "Encontrar solução", type: "form" },
  gestao:     { phrase: "Conecte-se com seu público",            label: "Falar sobre gestão", type: "whatsapp", message: WHATSAPP_MESSAGES.social },
  sites:      { phrase: "Conecte sua empresa a novos caminhos",  label: "Falar sobre sites",  type: "whatsapp", message: WHATSAPP_MESSAGES.businessSite },
  resultados: { phrase: "Conecte presença e resultado",          label: "Quero conversar",    type: "whatsapp", message: WHATSAPP_MESSAGES.results },
  processo:   { phrase: "Conecte estratégia e execução",         label: "Encontrar solução",  type: "form" },
  duvidas:    { phrase: "Sua próxima conexão começa aqui",       label: "Falar com a VZ",     type: "whatsapp", message: WHATSAPP_MESSAGES.general }
};

/* Números institucionais (aparecem uma única vez, no bloco de resultados) */
const PROOF = [
  { n: "+100 milhões", k: "Visualizações em conteúdos produzidos", big: true },
  { n: "+50",          k: "Marcas atendidas" },
  { n: "+3 mil",       k: "Vídeos produzidos" },
  { n: "+20",          k: "Nichos de mercado" }
];

/* Conteúdos em destaque.
   cover: opcional — caminho de uma capa local dentro de img/.
   Sem cover, o card usa a capa gráfica montada em HTML/CSS. */
const FEATURED_CONTENT = [
  {
    client: "Gabriel Zanette",
    category: "Conteúdo orgânico",
    title: "Alerta para quem viaja de ônibus",
    url: "https://www.instagram.com/p/DYUd6KnKkYW/",
    featured: true,
    metric: "10,5 milhões de visualizações",
    secondaryMetrics: ["575,7 mil curtidas","13,7 mil comentários","32,2 mil republicações"],
    description: "Conteúdo informativo produzido para transformar uma orientação de segurança em uma narrativa fácil de entender e compartilhar."
  },
  {
    client: "Cerimonial Nona Lú",
    category: "Conteúdo de entretenimento",
    title: "Entrada das madrinhas ao som de Arco-Íris",
    url: "https://www.instagram.com/reel/DUqsER1kbfB/",
    featured: false,
    metric: "2,2 milhões de visualizações",
    secondaryMetrics: ["138 mil curtidas","5.661 comentários"],
    description: "Projeto realizado anteriormente pela VZ Connect.",
    previousProject: true
  },
  {
    client: "Dra. Juliana Ferrari",
    category: "Conteúdo jurídico",
    title: "Cuidado com a mala de desconhecidos no aeroporto",
    url: "https://www.instagram.com/reel/DXuqNDFJR8J/",
    featured: false,
    metric: "71,6 mil curtidas",
    secondaryMetrics: ["1.604 comentários","4.201 republicações"],
    description: "Conteúdo jurídico transformado em uma situação prática e fácil de compartilhar."
  },
  {
    client: "Flynita Viagens",
    category: "Conteúdo educativo",
    title: "O erro financeiro que brasileiros cometem na Europa",
    url: "https://www.instagram.com/reel/DZz8p7aB06C/",
    featured: false,
    metric: "4.934 curtidas",
    secondaryMetrics: ["104 comentários","94 republicações"],
    description: "Conteúdo educativo sobre viagens, feito para informar e fortalecer o posicionamento da marca."
  },
  {
    client: "Gabriel Zanette",
    category: "Produção publicitária",
    title: "Conteúdo publicitário para Renault Boreal",
    url: "https://www.instagram.com/p/DVuQMFsDXsn/",
    featured: false,
    metric: "Projeto publicitário",
    secondaryMetrics: [],
    description: "Produção publicitária com apresentação de tecnologia, conforto e diferenciais do veículo."
  }
];

/* Cases principais */
const CASES = [
  {
    name: "Gabriel Zanette", handle: "@gabrielzanette",
    url: "https://www.instagram.com/gabrielzanette/",
    img: "img/case-gabriel-zanette.jpg",
    segment: "Viagem · Direitos",
    result: "1,1 milhão de seguidores",
    work: ["Estratégia","Produção audiovisual","Gestão das redes sociais","Posicionamento"]
  },
  {
    name: "Dra. Juliana Ferrari", handle: "@dra.julianacferrari",
    url: "https://www.instagram.com/dra.julianacferrari/",
    img: "img/case-juliana-ferrari.jpg",
    segment: "Direito do passageiro",
    result: "Mais de 50 mil seguidores",
    work: ["Gestão das redes sociais","Direção criativa","Produção de conteúdo","Conteúdo jurídico"]
  },
  {
    name: "Flynita Viagens", handle: "@flynitaviagens",
    url: "https://www.instagram.com/flynitaviagens/",
    img: "img/case-flynita-viagens.jpg",
    segment: "Turismo · Viagens",
    result: "Mais de 42 mil seguidores",
    work: ["Estratégia","Posicionamento","Produção audiovisual","Conteúdo de turismo"]
  },
  {
    name: "Pantoja Advocacia", handle: "@pantojaadvocacia",
    url: "https://www.instagram.com/pantojaadvocacia/",
    img: "img/case-pantoja-advocacia.jpg",
    segment: "Advocacia · Consumidor",
    result: "Comunicação institucional estruturada",
    work: ["Gestão das redes sociais","Posicionamento institucional","Produção audiovisual","Conteúdo jurídico"]
  }
];

/* ============================================================
   Runtime
   ============================================================ */
(function () {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) {
    return ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' })[c]; }); };

  /* ---- links ---- */
  document.querySelectorAll('[data-lead]').forEach(function (a) {
    a.href = LEAD_FORM_URL;
    a.target = '_blank';
    a.rel = 'noopener';
  });
  document.querySelectorAll('[data-wa]').forEach(function (a) {
    var key = a.dataset.wa || 'general';
    a.href = createWhatsAppUrl(WHATSAPP_MESSAGES[key] || WHATSAPP_MESSAGES.general);
  });

  /* ---- redes sociais ---- */
  var SOCIAL = [
    { url: INSTAGRAM_URL, id: 'ic-ig', label: 'Instagram' },
    { url: FACEBOOK_URL,  id: 'ic-fb', label: 'Facebook' },
    { url: LINKEDIN_URL,  id: 'ic-li', label: 'LinkedIn' },
    { url: createWhatsAppUrl(WHATSAPP_MESSAGES.general), id: 'ic-wa', label: 'WhatsApp' }
  ];
  var socialHTML = SOCIAL.map(function (s) {
    return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(s.label) + '">' +
           '<svg aria-hidden="true"><use href="#' + s.id + '"/></svg></a>';
  }).join('');
  ['nav-social','menu-social','foot-social'].forEach(function (id) {
    var el = document.getElementById(id); if (el) el.innerHTML = socialHTML;
  });

  /* ---- números ---- */
  var nu = document.getElementById('nums');
  if (nu) nu.innerHTML = PROOF.map(function (p) {
    return '<div class="num' + (p.big ? ' big' : '') + '"><div class="n">' + esc(p.n) + '</div>' +
           '<div class="k">' + esc(p.k) + '</div></div>';
  }).join('');

  /* ---- conteúdos ---- */
  var vg = document.getElementById('vgrid');
  if (vg) vg.innerHTML = FEATURED_CONTENT.map(function (c, i) {
    var media = c.cover
      ? '<img src="' + esc(c.cover) + '" alt="Capa do conteúdo ' + esc(c.title) + '" loading="lazy" decoding="async">'
      : '<div class="vcover" aria-hidden="true">' +
          '<span class="sym"><svg viewBox="0 0 1123 652"><use href="#vzsym"/></svg></span>' +
          '<div><div class="cat">' + esc(c.category) + '</div>' +
          '<div class="cl">' + esc(c.client) + '</div>' +
          '<div class="mt">' + esc(c.metric) + '</div></div>' +
        '</div>';
    return '<button type="button" class="vcard' + (c.featured ? ' is-featured' : '') + '" data-i="' + i + '" ' +
           'data-cur="Assistir" aria-label="Abrir o conteúdo ' + esc(c.title) + ', de ' + esc(c.client) + '">' +
      '<div class="vmedia">' + media +
        (c.previousProject ? '<span class="vprev">Projeto anterior</span>' : '') +
        '<span class="vplay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>' +
      '</div>' +
      '<div class="vbody">' +
        '<div class="vcat">' + esc(c.category) + ' · ' + esc(c.client) + '</div>' +
        '<div class="vtitle">' + esc(c.title) + '</div>' +
        '<div class="vmetric">' + esc(c.metric) + '</div>' +
        (c.secondaryMetrics && c.secondaryMetrics.length
          ? '<div class="vsec">' + c.secondaryMetrics.map(function (m) { return '<span>' + esc(m) + '</span>'; }).join('') + '</div>' : '') +
        '<p class="vdesc">' + esc(c.description) + '</p>' +
        '<span class="vlink">Ver publicação original <svg><use href="#ic-arr"/></svg></span>' +
      '</div>' +
    '</button>';
  }).join('');

  /* ---- cases ---- */
  var cg = document.getElementById('cgrid');
  if (cg) cg.innerHTML = CASES.map(function (c) {
    return '<a class="case" href="' + esc(c.url) + '" target="_blank" rel="noopener noreferrer" ' +
           'data-cur="Ver perfil" aria-label="Abrir o perfil ' + esc(c.handle) + ' no Instagram">' +
      '<div class="case-media">' +
        '<img src="' + esc(c.img) + '" alt="' + esc(c.name) + ' — perfil ' + esc(c.handle) + ' no Instagram" width="900" height="1125" loading="lazy" decoding="async">' +
        '<span class="case-go"><svg><use href="#ic-arr"/></svg></span>' +
      '</div>' +
      '<div class="case-body">' +
        '<h3 class="sr-only">' + esc(c.name) + ' — ' + esc(c.handle) + '</h3>' +
        '<div class="case-seg">' + esc(c.segment) + '</div>' +
        '<div class="case-result">' + esc(c.result) + '</div>' +
        '<div class="case-work">' + c.work.map(function (w) { return '<span>' + esc(w) + '</span>'; }).join('') + '</div>' +
      '</div>' +
    '</a>';
  }).join('');

  /* ---- modal ---- */
  var modal = document.getElementById('modal');
  var mBody = document.getElementById('modal-body');
  var mState = document.getElementById('modal-state');
  var mCat = document.getElementById('modal-cat');
  var mTitle = document.getElementById('modal-title');
  var mOpen = document.getElementById('modal-open');
  var mClose = document.getElementById('modal-close');
  var lastFocus = null, timer = null;

  function clearEmbed() {
    if (timer) { clearTimeout(timer); timer = null; }
    var f = mBody.querySelector('iframe'); if (f) f.remove();
  }
  function fail() {
    mState.hidden = false;
    mState.innerHTML = 'Não foi possível carregar a publicação aqui.<br>Use o botão abaixo para abrir no Instagram.';
  }
  function openModal(i) {
    var c = FEATURED_CONTENT[i]; if (!c) return;
    lastFocus = document.activeElement;
    mCat.textContent = c.category + ' · ' + c.client;
    mTitle.textContent = c.title;
    mOpen.href = c.url;
    clearEmbed();
    mState.hidden = false;
    mState.innerHTML = 'Carregando a publicação…';
    modal.hidden = false; modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    var f = document.createElement('iframe');
    f.src = c.url.replace(/\/?$/, '/') + 'embed/';
    f.title = 'Publicação: ' + c.title;
    f.loading = 'lazy';
    f.setAttribute('scrolling', 'no');
    f.addEventListener('load', function () { mState.hidden = true; });
    f.addEventListener('error', fail);
    mBody.appendChild(f);
    timer = setTimeout(function () { if (!mState.hidden) fail(); }, 6000);
    mClose.focus();
  }
  function closeModal() {
    modal.classList.remove('open'); modal.hidden = true;
    document.body.style.overflow = ''; clearEmbed();
    if (lastFocus) lastFocus.focus();
  }
  if (vg) vg.addEventListener('click', function (e) {
    var card = e.target.closest('.vcard'); if (card) openModal(+card.dataset.i);
  });
  if (mClose) mClose.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && !modal.hidden) { closeModal(); return; }
    if (e.key === 'Tab' && modal && !modal.hidden) {
      var f = modal.querySelectorAll('button, a[href]'); if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---- nav ---- */
  var nav = document.getElementById('nav');
  function onScroll() { if (nav) nav.classList.toggle('stuck', window.scrollY > 20); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var menu = document.getElementById('menu');
  var toggle = document.getElementById('nav-toggle');
  function setMenu(open) {
    if (!menu || !toggle) return;
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (toggle) toggle.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
  if (menu) menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ---- CTA persistente e barra mobile: frase, rótulo e destino por bloco ---- */
  var dock = document.getElementById('dock');
  var dockPhrase = document.getElementById('dock-phrase');
  var dockGo = document.getElementById('dock-go');
  var dockLabel = document.getElementById('dock-label');
  var mbarGo = document.getElementById('mbar-go');
  var mbarLabel = document.getElementById('mbar-label');
  var zones = Array.prototype.slice.call(document.querySelectorAll('[data-dock]'));

  function applyContext(key) {
    var ctx = DOCK_CONTEXTS[key]; if (!ctx) return;
    var wa = ctx.type === 'whatsapp';
    var href = wa ? createWhatsAppUrl(ctx.message) : LEAD_FORM_URL;
    // WhatsApp e formulário abrem os dois em nova aba: o visitante não perde a posição no site
    [[dockGo, dockLabel], [mbarGo, mbarLabel]].forEach(function (pair) {
      var a = pair[0], lb = pair[1];
      if (!a) return;
      a.href = href;
      a.target = '_blank';
      a.rel = wa ? 'noopener noreferrer' : 'noopener';
      if (lb) lb.textContent = ctx.label;
    });
    if (dockPhrase) dockPhrase.textContent = ctx.phrase;
  }

  if (zones.length) {
    var currentKey = '', ticking = false;
    // a cápsula some quando o CTA final entra em cena (ele já traz os dois botões)
    var endZone = document.getElementById('contato') || document.querySelector('footer');
    function setContext(key) {
      if (!key || key === currentKey) return;
      currentKey = key;
      if (reduced) { applyContext(key); return; }
      if (dockPhrase) dockPhrase.classList.add('fade');
      if (dockGo) dockGo.classList.add('fade');
      setTimeout(function () {
        applyContext(key);
        if (dockPhrase) dockPhrase.classList.remove('fade');
        if (dockGo) dockGo.classList.remove('fade');
      }, 200);
    }
    function update() {
      ticking = false;
      var mid = window.innerHeight * 0.45, active = zones[0];
      zones.forEach(function (z) {
        var r = z.getBoundingClientRect();
        if (r.top <= mid && r.bottom > 0) active = z;
      });
      setContext(active.dataset.dock);
      if (dock) {
        var nearEnd = endZone && endZone.getBoundingClientRect().top < window.innerHeight * 0.35;
        dock.classList.toggle('show', window.scrollY > 320 && !nearEnd);
      }
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    applyContext('top');
    update();

    if ('IntersectionObserver' in window) {  // reforço para navegação por âncora
      var io2 = new IntersectionObserver(function () { update(); }, { threshold: [0, .25, .5] });
      zones.forEach(function (z) { io2.observe(z); });
    }
  }

  /* ---- legenda do cursor ---- */
  var cur = document.getElementById('cur');
  if (cur && fine && !reduced) {
    var active = null;
    document.addEventListener('mousemove', function (e) {
      var el = e.target.closest ? e.target.closest('[data-cur]') : null;
      if (el !== active) {
        active = el;
        if (el) {
          cur.textContent = el.dataset.cur;
          cur.classList.toggle('inv', !!el.closest('.theme-light'));
          cur.classList.add('on');
        } else { cur.classList.remove('on'); }
      }
      if (active) { cur.style.left = e.clientX + 'px'; cur.style.top = e.clientY + 'px'; }
    }, { passive: true });
    document.addEventListener('mouseleave', function () { cur.classList.remove('on'); active = null; });
  }

  /* ---- reveal ---- */
  var els = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -5% 0px' });
    els.forEach(function (el) { io.observe(el); });
    setTimeout(function () { els.forEach(function (el) { el.classList.add('in'); }); }, 3500);
  }
})();

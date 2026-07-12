/* ============================================================
   VZ CONNECT — Scripts v4
   Nav rola com a página (sem estado 'scrolled')
   Botão "voltar ao topo" com anel de progresso de leitura
   ============================================================ */
(function () {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(max-width: 900px)').matches;

  /* ---------- LOADER ---------- */
  var loader = document.getElementById('loader');
  var lbar = document.getElementById('l-bar');
  var loaderDone = false;
  var prog = 0;
  var li = setInterval(function () {
    prog += Math.random() * 22;
    if (prog >= 100) { prog = 100; clearInterval(li); }
    if (lbar) lbar.style.width = prog + '%';
  }, 130);

  function finishLoader() {
    if (loaderDone) return;
    loaderDone = true;
    if (lbar) lbar.style.width = '100%';
    clearInterval(li);
    if (loader) loader.classList.add('done');
    document.body.classList.add('loaded');
    setTimeout(revealHero, 100);
  }
  function revealHero() {
    var hero = document.querySelector('.hero .reveal');
    if (hero) hero.classList.add('in');
  }
  // dispara no load normal...
  window.addEventListener('load', function () { setTimeout(finishLoader, 480); });
  // ...mas garante saída mesmo se algum recurso externo travar o 'load'
  if (document.readyState === 'complete') { setTimeout(finishLoader, 480); }
  document.addEventListener('DOMContentLoaded', function () { setTimeout(finishLoader, 1400); });
  // rede de segurança final: nunca deixa o usuário preso
  setTimeout(finishLoader, 3500);

  /* ---------- MARQUEE (duplica para loop perfeito) ---------- */
  var marquee = document.getElementById('marquee');
  if (marquee) {
    var items = ['Estratégia de marca', 'Social media', 'Captação profissional', 'Copywriting', 'Gestão de redes', 'Desenvolvimento de sites', 'Relatórios mensais'];
    var star = '<svg class="st" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>';
    var block = '<div class="marquee-item">' + items.map(function (t) { return t + ' ' + star; }).join(' ') + '</div>';
    marquee.innerHTML = block + block;
  }

  /* ---------- MENU MOBILE ---------- */
  var menu = document.getElementById('menu');
  var toggle = document.getElementById('nav-toggle');
  var menuOpen = false;
  function closeMenu() { if (menu) menu.classList.remove('open'); menuOpen = false; }
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menuOpen = !menuOpen;
      menu.classList.toggle('open', menuOpen);
    });
  }

  /* ---------- ÂNCORAS suaves (scroll nativo do navegador) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      closeMenu();
      el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    });
  });

  /* ---------- PARALLAX ---------- */
  var parallaxEls = [];
  if (!reduced && !isTouch) {
    document.querySelectorAll('[data-parallax]').forEach(function (el) {
      var speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
      var base = '';
      if (el.classList.contains('hero-sym')) base = 'translateY(-50%)';
      if (el.classList.contains('manifesto-sym')) base = 'translate(-50%,-50%)';
      parallaxEls.push({ el: el, speed: speed, base: base });
    });
  }

  /* ---------- VOLTAR AO TOPO ---------- */
  var toTop = document.getElementById('to-top');
  var ttProg = document.querySelector('.tt-prog');
  var TT_LEN = 163.36; // circunferência do anel: 2πr, com r = 26

  function updateToTop(y) {
    if (!toTop) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(y / max, 1) : 0;
    if (ttProg) ttProg.style.strokeDashoffset = TT_LEN * (1 - p);
    toTop.classList.toggle('show', y > window.innerHeight * 0.7);
  }

  if (toTop) {
    toTop.addEventListener('click', function () {
      closeMenu();
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    });
  }

  /* ---------- SCROLL (parallax + botão de topo) ---------- */
  function onScroll() {
    var y = window.scrollY;
    updateToTop(y);
    parallaxEls.forEach(function (p) {
      var rect = p.el.getBoundingClientRect();
      var center = rect.top + rect.height / 2 - window.innerHeight / 2;
      p.el.style.transform = p.base + ' translate3d(0,' + (-center * p.speed) + 'px,0)';
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* ---------- REVEAL (IntersectionObserver) ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          e.target.querySelectorAll('.count').forEach(animateCount);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -10% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); el.querySelectorAll('.count').forEach(function (c) { c.textContent = (c.getAttribute('data-prefix') || '') + c.getAttribute('data-to'); }); });
  }

  /* ---------- CONTADOR ANIMADO ---------- */
  function animateCount(el) {
    if (el.dataset.done) return; el.dataset.done = '1';
    var to = parseInt(el.getAttribute('data-to'), 10);
    var prefix = el.getAttribute('data-prefix') || '';
    var dur = 1600, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(to * eased);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + to;
    }
    requestAnimationFrame(step);
  }

  /* ---------- FORM → FORMSPREE ---------- */
  var contactForm = document.getElementById('contact-form');
  var formStatus = document.getElementById('form-status');

  // Telefone: só dígitos, espaços, +, (, ), -
  var telInput = document.getElementById('f-tel');
  if (telInput) {
    telInput.addEventListener('input', function () {
      this.value = this.value.replace(/[^\d\s\+\(\)\-]/g, '');
    });
    telInput.addEventListener('keypress', function (e) {
      if (!/[\d\s\+\(\)\-]/.test(e.key)) e.preventDefault();
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      var btn = document.getElementById('send-btn');
      var btnSpan = btn ? btn.querySelector('span') : null;
      if (btn) btn.disabled = true;
      if (btnSpan) btnSpan.textContent = 'Enviando…';
      if (formStatus) { formStatus.textContent = 'Enviando sua mensagem…'; formStatus.style.color = 'var(--sage)'; }
      try {
        var res = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          contactForm.reset();
          if (formStatus) { formStatus.textContent = '✓ Mensagem enviada! Entraremos em contato em breve.'; formStatus.style.color = 'var(--sage-light)'; }
          if (btnSpan) btnSpan.textContent = 'Enviado!';
        } else {
          throw new Error('fail');
        }
      } catch (err) {
        if (formStatus) { formStatus.textContent = 'Erro ao enviar. Tente pelo WhatsApp ou e-mail.'; formStatus.style.color = '#e07070'; }
        if (btn) btn.disabled = false;
        if (btnSpan) btnSpan.textContent = 'Enviar mensagem';
      }
    });
  }

  /* ---------- ROTOR (palavra rotativa do hero) ---------- */
  var rotor = document.getElementById('rotor');
  if (rotor && !reduced) {
    var words = ['direção.', 'estratégia.', 'consistência.', 'propósito.', 'resultado.'];
    var ri = 0;
    setInterval(function () {
      rotor.classList.add('out');
      setTimeout(function () {
        ri = (ri + 1) % words.length;
        rotor.textContent = words[ri];
        rotor.classList.remove('out');
      }, 400);
    }, 2600);
  }

  /* ---------- INIT ---------- */
  onScroll();
})();
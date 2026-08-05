(() => {
  'use strict';

  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  const setNavState = () => {
    nav?.classList.toggle('is-scrolled', window.scrollY > 18);
  };
  setNavState();
  window.addEventListener('scroll', setNavState, { passive: true });

  navToggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });

  navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
      navToggle?.setAttribute('aria-label', 'Abrir menu');
    });
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');

  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px' });

    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const projects = [
    {
      count: '01',
      title: 'Flynita Viagens',
      description: 'Site de turismo com linguagem editorial, jornadas organizadas e foco em atendimento personalizado.',
      tags: ['Direção visual', 'UX', 'Desenvolvimento']
    },
    {
      count: '02',
      title: 'Dra. Juliana Ferrari',
      description: 'Presença digital para autoridade jurídica, com conteúdo acessível, serviços claros e contato sem atrito.',
      tags: ['Posicionamento', 'Arquitetura', 'Site empresarial']
    },
    {
      count: '03',
      title: 'Gabriel Zanette',
      description: 'Plataforma para organizar autoridade, projetos, conteúdo e oportunidades comerciais de um criador.',
      tags: ['Brand system', 'Conteúdo', 'Performance']
    }
  ];

  const projectCount = document.getElementById('project-count');
  const projectTitle = document.getElementById('project-title');
  const projectDescription = document.getElementById('project-description');
  const projectTags = document.getElementById('project-tags');
  const projectDots = [...document.querySelectorAll('.project-dot')];
  const projectScreens = [...document.querySelectorAll('.project-screen')];

  const showProject = (index) => {
    const project = projects[index];
    if (!project) return;

    projectDots.forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === index));
    projectScreens.forEach((screen, screenIndex) => screen.classList.toggle('is-active', screenIndex === index));

    projectCount.textContent = project.count;
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    projectTags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join('');
  };

  projectDots.forEach((dot) => {
    dot.addEventListener('click', () => showProject(Number(dot.dataset.project)));
  });

  const modal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');
  const modalTitle = document.getElementById('video-title');
  let lastFocused = null;

  const closeModal = () => {
    if (!modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    modalVideo.pause();
    modalVideo.removeAttribute('src');
    modalVideo.load();
    lastFocused?.focus();
  };

  document.querySelectorAll('[data-video]').forEach((card) => {
    card.addEventListener('click', () => {
      lastFocused = card;
      modalTitle.textContent = card.dataset.title || 'Conteúdo VZ Connect';
      modalVideo.src = card.dataset.video;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('is-locked');
      modal.querySelector('.video-modal__top button')?.focus();
      modalVideo.play().catch(() => {});
    });
  });

  modal?.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', closeModal));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });

  const faqItems = document.querySelectorAll('.faq details');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
})();

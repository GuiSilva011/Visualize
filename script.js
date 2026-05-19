// scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // nav scroll state
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  // close mobile menu on link click
  document.querySelectorAll('.nav-center a').forEach(a => {
      a.addEventListener('click', () => {
      if (window.innerWidth <= 768) document.getElementById('nav-links').classList.remove('open');
    });
  });

  // formulário de contato: redireciona pro WhatsApp com mensagem pré-preenchida
  // O programador pode trocar isso por envio real via Formspree, EmailJS ou backend próprio
  function enviarFormularioWhatsapp(form) {
    const data = new FormData(form);
    const nome = data.get('nome') || '';
    const empresa = data.get('empresa') || '';
    const telefone = data.get('telefone') || '';
    const email = data.get('email') || '';
    const mensagem = data.get('mensagem') || '';

    const texto =
      `*Novo contato pelo site VZ Connect*%0A%0A` +
      `*Nome:* ${encodeURIComponent(nome)}%0A` +
      `*Empresa:* ${encodeURIComponent(empresa)}%0A` +
      `*Telefone:* ${encodeURIComponent(telefone)}%0A` +
      `*E-mail:* ${encodeURIComponent(email)}%0A%0A` +
      `*Mensagem:*%0A${encodeURIComponent(mensagem)}`;

    window.open(`https://wa.me/5527998431267?text=${texto}`, '_blank');
  }

  // ====================================================================
  // PAINEL LATERAL DE CONTATOS
  // ====================================================================
  const painelContato = document.getElementById('contact-panel');
  const overlayContato = document.getElementById('contact-overlay');

  function abrirPainelContato() {
    painelContato.classList.add('open');
    overlayContato.classList.add('open');
    document.body.style.overflow = 'hidden';
    // foca no primeiro campo após a animação
    setTimeout(() => {
      const nomeInput = document.getElementById('cp-nome');
      if (nomeInput) nomeInput.focus();
    }, 500);
  }

  function fecharPainelContato() {
    painelContato.classList.remove('open');
    overlayContato.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Fecha com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && painelContato.classList.contains('open')) {
      fecharPainelContato();
    }
  });

  // Envia mini formulário do painel via WhatsApp
  function enviarMiniFormWhatsapp() {
    const nome = (document.getElementById('cp-nome').value || '').trim();
    const mensagem = (document.getElementById('cp-mensagem').value || '').trim();

    if (!nome || !mensagem) {
      alert('Por favor, preencha seu nome e mensagem antes de enviar.');
      return;
    }

    const texto =
      `*Novo contato pelo site VZ Connect*%0A%0A` +
      `*Nome:* ${encodeURIComponent(nome)}%0A%0A` +
      `*Mensagem:*%0A${encodeURIComponent(mensagem)}`;

    window.open(`https://wa.me/5527998431267?text=${texto}`, '_blank');
  }
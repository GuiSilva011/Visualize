  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  document.querySelectorAll('.nav-center a').forEach(a => {
      a.addEventListener('click', () => {
      if (window.innerWidth <= 768) document.getElementById('nav-links').classList.remove('open');
    });
  });

  // formulário de contato: redireciona pro WhatsApp com mensagem pré-preenchida
  // O programador pode trocar isso por envio real via Formspree, EmailJS ou backend próprio
  // function enviarFormularioWhatsapp(form) { //ta em desuso essa bosta gpt de merda 
  //   const data = new FormData(form);
  //   const nome = data.get('nome') || '';
  //   const empresa = data.get('empresa') || '';
  //   const telefone = data.get('telefone') || '';
  //   const email = data.get('email') || '';
  //   const mensagem = data.get('mensagem') || '';
    
  //   const formContato = document.getElementById("form-contato");
  //   const formStatus = document.getElementById("form-status");
  //   const btnSubmit = document.getElementById("btn-submit");

    
  //   // const texto =
  //   `*Novo contato pelo site VZ Connect*%0A%0A` +
  //   `*Nome:* ${encodeURIComponent(nome)}%0A` +
  //   `*Empresa:* ${encodeURIComponent(empresa)}%0A` +
  //   `*Telefone:* ${encodeURIComponent(telefone)}%0A` +
  //   `*E-mail:* ${encodeURIComponent(email)}%0A%0A` +
  //   `*Mensagem:*%0A${encodeURIComponent(mensagem)}`;

  //   window.open(`https://wa.me/5527998431267?text=${texto}`, '_blank');
  // }


  const painelContato = document.getElementById('contact-panel');
  const overlayContato = document.getElementById('contact-overlay');

  function abrirPainelContato() {
    painelContato.classList.add('open');
    overlayContato.classList.add('open');
    document.body.style.overflow = 'hidden';

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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && painelContato.classList.contains('open')) {
      fecharPainelContato();
    }
  });

  function enviarMiniFormWhatsapp() {
    const nome = (document.getElementById('cp-nome').value || '').trim();
    const mensagem = (document.getElementById('cp-mensagem').value || '').trim();

    if (!nome || !mensagem) {
      alert('Por favor, preencha seu nome e mensagem antes de enviar.');
      return;
    }

    const texto =
      `*Novo contato pelo site VZ Connect*%0A%0A` +//mermao ta mt sus esse form aq parece um robozao cr7 mandando whats pras puta
      `*Nome:* ${encodeURIComponent(nome)}%0A%0A` +
      `*Mensagem:*%0A${encodeURIComponent(mensagem)}`;

    window.open(`https://wa.me/5527998431267?text=${texto}`, '_blank');
  }


const formContato = document.getElementById("form-contato");

if (formContato) {
  formContato.addEventListener("submit", async function (event) {
    event.preventDefault(); 

    const btnSubmit = formContato.querySelector('.form-submit');
    const formNote = formContato.querySelector('.form-note');

    const textoOriginalBotao = btnSubmit.innerHTML;
    btnSubmit.innerHTML = '<i class="ti ti-loader"></i> Enviando...';
    btnSubmit.style.opacity = "0.7";
    btnSubmit.disabled = true;

    const data = new FormData(event.target);

    try {
      const response = await fetch(event.target.action, {
        method: formContato.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        formNote.innerHTML = '<i class="ti ti-check" style="color: var(--green-accent);"></i> Mensagem enviada com sucesso! Retornaremos em até 1 dia útil.';
        formNote.style.color = "var(--cream)";
        formContato.reset(); 
      } else {
        formNote.innerHTML = '<i class="ti ti-alert-circle"></i> Ocorreu um problema ao enviar. Tente novamente.';
        formNote.style.color = "#ff6b6b";
      }
    } catch (error) {
      formNote.innerHTML = '<i class="ti ti-alert-circle"></i> Erro de conexão. Verifique sua internet e tente novamente.';
      formNote.style.color = "#ff6b6b";
    } finally {
      btnSubmit.innerHTML = textoOriginalBotao;
      btnSubmit.style.opacity = "1";
      btnSubmit.disabled = false;
    }
  });
}
const inputTelefone = document.querySelector('input[name="telefone"]');

if (inputTelefone) {
  inputTelefone.addEventListener('input', function (e) {
  
    let valor = e.target.value.replace(/\D/g, '');
    

    if (valor.length > 11) {
      valor = valor.slice(0, 11);
    }

  
    if (valor.length > 2) {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    }
    if (valor.length > 9) {
      valor = `${valor.slice(0, 10)}-${valor.slice(10)}`;
    }

  
    e.target.value = valor;
  });
}

function calcularTotal() {
  const planos = document.getElementsByName('tipo_site');
  let baseValor = 0;
  let planoSelecionado = '';

  for (let i = 0; i < planos.length; i++) {
    if (planos[i].checked) {
      baseValor = parseFloat(planos[i].value);
      planoSelecionado = planos[i].id;
      break;
    }
  }
  
  if (!document.getElementById('opcionais-landing')) return;

  document.getElementById('opcionais-landing').classList.remove('ativo');
  document.getElementById('opcionais-website').classList.remove('ativo');
  document.getElementById('opcionais-ecommerce').classList.remove('ativo');

  let containerAtivo = null;

  if (planoSelecionado === 'plano-landing') {
    containerAtivo = document.getElementById('opcionais-landing');
  } else if (planoSelecionado === 'plano-website') {
    containerAtivo = document.getElementById('opcionais-website');
  } else if (planoSelecionado === 'plano-ecommerce') {
    containerAtivo = document.getElementById('opcionais-ecommerce');
  }

  if (containerAtivo) {
    containerAtivo.classList.add('ativo');
  }

  let opcionaisValor = 0;
  if (containerAtivo) {
    const opcionaisSelecionados = containerAtivo.querySelectorAll('.opcional-item:checked');
    opcionaisSelecionados.forEach(item => {
      opcionaisValor += parseFloat(item.value);
    });
  }

  const total = baseValor + opcionaisValor;
  const valorTotalElement = document.getElementById('valor-total');
  
  if (valorTotalElement) {
    if (total > 0) {
      valorTotalElement.innerText = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    } else {
      valorTotalElement.innerText = 'R$ 0,00';
    }
  }
}
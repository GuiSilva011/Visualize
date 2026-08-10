(function(){
  'use strict';
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const loader=document.getElementById('loader');
  window.addEventListener('load',()=>setTimeout(()=>loader&&loader.classList.add('done'),350));
  setTimeout(()=>loader&&loader.classList.add('done'),1800);

  const topbar=document.getElementById('topbar');
  const onScroll=()=>topbar&&topbar.classList.toggle('scrolled',window.scrollY>30);
  addEventListener('scroll',onScroll,{passive:true});onScroll();

  const menuButton=document.getElementById('menuButton');
  const mobileMenu=document.getElementById('mobileMenu');
  const closeMenu=()=>{if(!mobileMenu)return;mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');document.body.style.overflow='';};
  menuButton&&menuButton.addEventListener('click',()=>{const open=mobileMenu.hidden;mobileMenu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':'';});
  mobileMenu&&mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});

  const reveal=document.querySelectorAll('.reveal');
  if(reduced||!('IntersectionObserver'in window)){reveal.forEach(el=>el.classList.add('in'));}
  else{const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -8%'});reveal.forEach(el=>io.observe(el));}

  const serviceImage=document.getElementById('serviceImage');
  const serviceCaption=document.getElementById('serviceCaption');
  document.querySelectorAll('.service-step').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.service-step').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    if(serviceImage){serviceImage.style.opacity='0';setTimeout(()=>{serviceImage.src=btn.dataset.image;serviceImage.style.opacity='1';},180);}
    if(serviceCaption)serviceCaption.textContent=btn.dataset.caption;
  }));

  const siteData={
    landing:{type:'LANDING PAGE',title:'Uma oferta. Um caminho claro. Uma próxima ação.',text:'Uma página direta para apresentar uma oferta, captar contatos ou vender um produto ou serviço específico.',features:['Oferta central','Prova social','Formulário e WhatsApp','Integrações'],cls:'screen--landing'},
    empresa:{type:'SITE EMPRESARIAL',title:'Sua empresa apresentada com clareza e credibilidade.',text:'Uma estrutura completa para mostrar serviços, diferenciais, projetos, provas e canais de contato.',features:['Serviços e diferenciais','Cases e portfólio','Provas e depoimentos','Contato facilitado'],cls:'screen--empresa'},
    loja:{type:'LOJA ONLINE',title:'Produtos organizados para facilitar a decisão de compra.',text:'Uma experiência de compra com catálogo, páginas de produto, carrinho, pagamento e versão mobile.',features:['Catálogo','Página de produto','Carrinho e pagamento','Experiência mobile'],cls:'screen--loja'}
  };
  const siteType=document.getElementById('siteType'),siteTitle=document.getElementById('siteTitle'),siteText=document.getElementById('siteText'),siteFeatures=document.getElementById('siteFeatures'),siteScreen=document.getElementById('siteScreen');
  document.querySelectorAll('.site-tab').forEach(btn=>btn.addEventListener('click',()=>{
    const d=siteData[btn.dataset.site];
    document.querySelectorAll('.site-tab').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-selected','false');});
    btn.classList.add('active');btn.setAttribute('aria-selected','true');
    siteType.textContent=d.type;siteTitle.textContent=d.title;siteText.textContent=d.text;siteFeatures.innerHTML=d.features.map(x=>'<li>'+x+'</li>').join('');siteScreen.className='screen '+d.cls;
  }));

  const quotes=[...document.querySelectorAll('.quote')];let qi=0;
  const showQuote=i=>{qi=(i+quotes.length)%quotes.length;quotes.forEach((q,n)=>q.classList.toggle('active',n===qi));};
  document.getElementById('prevQuote')?.addEventListener('click',()=>showQuote(qi-1));
  document.getElementById('nextQuote')?.addEventListener('click',()=>showQuote(qi+1));

  const contactToggle=document.getElementById('contactToggle'),contactPanel=document.getElementById('contactPanel');
  contactToggle&&contactToggle.addEventListener('click',()=>{const open=contactPanel.hidden;contactPanel.hidden=!open;contactToggle.setAttribute('aria-expanded',String(open));});
  document.addEventListener('click',e=>{if(contactPanel&&!contactPanel.hidden&&!e.target.closest('.contact-dock')){contactPanel.hidden=true;contactToggle.setAttribute('aria-expanded','false');}});
})();

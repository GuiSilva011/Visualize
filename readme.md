# VZ Connect — redesign editorial

Redesign estático em HTML, CSS e JavaScript, inspirado na linguagem editorial e no hero com mockup central do template Homie, mas reconstruído para a identidade e o conteúdo da VZ Connect.

## Rodar localmente

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Estrutura

- `index.html`: conteúdo e estrutura
- `style.css`: design responsivo, animações e mockups
- `script.js`: menu mobile, animações, seletor de projetos, FAQ e modal de vídeos
- `img/`: imagens usadas no site
- `vds/`: vídeos exibidos no modal

## Pontos para substituir antes de publicar

1. Os três sites exibidos nos monitores são mockups editoriais montados em HTML/CSS. Substitua os blocos `.project-screen` por prints reais quando os projetos estiverem prontos.
2. O botão principal usa `formulario/`, preservando o caminho do site antigo. Inclua essa pasta no deploy ou troque o link.
3. Revise preços, resultados, depoimentos, CNPJ e links sociais antes da publicação.
4. As fontes do Google usam fallback local, então o site continua legível mesmo sem carregar a fonte externa.

## Publicação

Pode ser hospedado como site estático em Cloudflare Pages, Netlify, Vercel, GitHub Pages ou servidor próprio.

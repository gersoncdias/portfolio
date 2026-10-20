# Gerson Dias — Portfólio profissional

Portfólio de Gerson da Costa Dias, com foco em Quality Assurance, automação de testes e engenharia de qualidade. Aplicação estática em português, sem backend, preparada para GitHub Pages em `https://gersoncdias.github.io/portfolio/`.

## Tecnologias

React, TypeScript, Vite, Tailwind CSS (plugin oficial para Vite), Lucide React, ESLint e Playwright. As versões resolvidas estão no `package-lock.json`. Não há roteador: a navegação usa âncoras nativas.

## Executar localmente

Para atualizar dependências, prefira npm 11: a resolução de dependências opcionais do Vite apresentou falha interna no npm 10 durante a implementação. A instalação pelo lockfile usa `npm ci`.

Use Node.js 22.13+ (recomendado: Node 22 LTS) e npm. Node 20.19 também é compatível com as dependências atuais.

```sh
npm ci
npm run dev
```

Abra a URL indicada pelo Vite com o caminho `/portfolio/` (normalmente `http://localhost:5173/portfolio/`).

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

O build fica em `dist/`. O preview usa normalmente `http://localhost:4173/portfolio/`.

## Testes

```sh
npx playwright install chromium
npm run build
npm run test:e2e
```

Em Linux/CI, quando necessário, use `npx playwright install --with-deps chromium`. Para modo interativo: `npm run test:e2e:ui`.

Os testes executam contra o build de produção, iniciando o preview automaticamente. Cobrem desktop e celular, conteúdo e seções, navegação e seção ativa, links internos e estrutura dos links externos, detalhes de projetos, tema e persistência, teclado, fallback da foto, overflow horizontal e erros JavaScript/recursos. Links externos são inspecionados sem depender da disponibilidade de sites de terceiros. O perfil mobile usa Chromium com viewport e toque de iPhone; não representa uma validação no Safari real.

## Conteúdo e manutenção

Todo o conteúdo profissional fica em `src/data/pt.ts`; `src/data/index.ts` é o ponto de entrada do idioma. Para inglês, adicione um módulo equivalente e a seleção de locale, mantendo uma tradução completa. A interface inicial não exibe um seletor de idioma sem tradução.

- **Perfil e contato:** edite `profile`. `email` vazio omite o link de e-mail.
- **Currículo:** coloque o PDF em `public/documents/curriculo-gerson-dias.pdf` e defina `profile.resume` como `documents/curriculo-gerson-dias.pdf`. O hero abre o PDF e o contato oferece download. Sem arquivo configurado, a página informa “Currículo em breve”. Confirme que o arquivo existe antes de habilitar.
- **Fotografia:** adicione a foto em `public/images/` e configure `profile.photo` com `images/nome-do-arquivo.webp`. Sem foto, ou se ela falhar, aparece o monograma GD. Nenhuma fotografia foi inventada.
- **Experiência, competências e formação:** edite os respectivos arrays. Não inclua métricas ou certificações sem confirmação.
- **Projetos:** adicione um objeto tipado em `projects`, com `id` único, nome, categoria, descrição, funcionalidades e tecnologias confirmadas. `demo`, `repository` e `image` são opcionais. Imagens devem ficar em `public/projects/` e ser configuradas sem `/` inicial. Sem imagem, há uma composição abstrata neutra; sem links, o card informa que os links públicos serão adicionados. Os detalhes são expansíveis no próprio card. A stack dos projetos não foi presumida.
- **Estudos de caso:** o tipo `CaseStudy` aceita contexto, problema, estratégia, ferramentas, abordagem, resultados e aprendizados. Mantenha `status: 'preparation'` até o conteúdo estar confirmado; para publicar, preencha os campos e altere para `'published'`. Nunca inclua informações confidenciais.
- **Artigos:** adicione título, resumo, assunto e URL confirmada em `articles`. `date` é opcional, no formato ISO `YYYY-MM-DD`. A seção apresenta um estado vazio até existirem publicações confirmadas.
- **Certificações:** preencha `certifications` somente com informações verificadas.
- **SEO:** ajuste title, description, Open Graph e URL em `index.html`. A imagem social PNG 1200×630 está em `public/images/social.png`, com fonte editável em `social.svg`. Ao mudar a arte, exporte novamente o PNG.

Os caminhos públicos são prefixados com `import.meta.env.BASE_URL`, mantendo compatibilidade com o subdiretório do GitHub Pages. Não use `public/` no valor configurado.

## Estrutura

```text
public/
  documents/       # currículo quando disponível
  images/          # favicon, imagem social e foto opcional
  projects/        # imagens opcionais dos projetos
src/
  components/      # header e componentes compartilhados
  data/            # conteúdo profissional e textos em português
  hooks/           # alternância e persistência do tema
  sections/        # hero, carreira, projetos e contato
  styles/          # tokens, temas e layout responsivo
  types/           # contratos de conteúdo
  App.tsx
  main.tsx
tests/             # testes E2E desktop e mobile
.github/workflows/ # validação e publicação
```

## GitHub Pages

O `base` em `vite.config.ts` é `/portfolio/`, correspondente ao repositório `gersoncdias/portfolio`.

1. Envie os arquivos e `package-lock.json` para esse repositório.
2. Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**.
3. Em **Settings → Actions → General**, permita as actions usadas pelo workflow. As políticas da conta/organização devem permitir `pages: write` e `id-token: write` no job de deploy. O job de validação usa somente `contents: read`; não é necessário conceder escrita global ao token.
4. Verifique o environment `github-pages` e suas regras de proteção: ele deve permitir deploy da branch `main`.
5. Faça push na `main` ou execute o workflow manualmente nessa branch. Pull requests executam somente as validações; não publicam.
6. Confirme o sucesso do job `deploy` e abra a URL retornada, verificando carregamento, navegação e assets em `/portfolio/`.

O pipeline executa instalação reproduzível (`npm ci`), typecheck, lint, build e Playwright antes de enviar o artefato ao GitHub Pages. O deploy depende da validação bem-sucedida e usa permissões restritas ao job. Relatórios de falhas são preservados por sete dias.

**A configuração do workflow não significa que o site já está publicado.** O deploy remoto precisa ser executado e verificado no GitHub.

## Design e acessibilidade

Tema escuro por padrão e claro opcional, persistência em `localStorage` com fallback quando indisponível, navegação semântica, link de pular conteúdo, foco visível, menu mobile acessível, suporte a movimento reduzido e imagens opcionais carregadas sob demanda. Fontes de sistema evitam requisições externas. Os estados de conteúdo pendente são explícitos.

A [referência visual](https://www.thiagopivatto.com/) orientou a composição de currículo online: abertura centralizada com nome e título profissional, fundo escuro com destaque ciano, títulos diretos e conteúdo em cards. A navegação, o tema claro e os projetos foram adaptados ao briefing de Gerson. A identidade, os textos e os componentes foram criados para este projeto.

Documentação utilizada: [Vite](https://vite.dev/guide/), [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite), [Playwright](https://playwright.dev/docs/intro) e [workflows do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

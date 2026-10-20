import type { Article, CaseStudy, Project } from "../types/content";
export const profile = {
  name: "Gerson Dias",
  fullName: "Gerson da Costa Dias",
  initials: "GD",
  title: "Quality Assurance Engineer | Test Automation | Quality Engineering",
  linkedin: "https://www.linkedin.com/in/gerson-costa-dias/",
  github: "https://github.com/gersoncdias",
  email: "",
  resume: "",
  photo: "",
};
export const navigation = [
  ["inicio", "Início"],
  ["sobre", "Sobre"],
  ["competencias", "Competências"],
  ["experiencia", "Experiência"],
  ["projetos", "Projetos"],
  ["artigos", "Artigos"],
  ["formacao", "Formação"],
  ["contato", "Contato"],
] as const;
export const copy = {
  labels: {
    about: "SOBRE MIM",
    experience: "EXPERIÊNCIA",
    skills: "COMPETÊNCIAS",
    projects: "PROJETOS",
    articles: "ARTIGOS & PUBLICAÇÕES",
    education: "FORMAÇÃO",
  },
  current: "Atual",
  profileLabel: "GERSON DIAS / QA ENGINEER",
  quality: "Quality",
  byDesign: "by design.",
  automation: "Test Automation",
  engineering: "Quality Engineering",
  aboutLink: "Sobre",
  skip: "Pular para o conteúdo",
  menu: "Abrir menu",
  closeMenu: "Fechar menu",
  navigation: "Navegação principal",
  lightTheme: "Ativar tema claro",
  darkTheme: "Ativar tema escuro",
  eyebrow: "PORTFÓLIO · ENGENHARIA DE QUALIDADE",
  headline: "Construindo software com mais",
  headlineAccent: "qualidade e confiança.",
  intro:
    "QA Engineer especializado em automação de testes, estratégias de qualidade e desenvolvimento de soluções para engenharia de software.",
  projectsCta: "Conhecer projetos",
  resume: "Visualizar currículo",
  downloadResume: "Baixar currículo",
  resumePending: "Currículo em breve",
  heroNote: "AUTOMAÇÃO · APIs · ENGENHARIA DE QUALIDADE",
  role: "Quality Assurance Engineer",
  focus: "Foco em oportunidades de QA Sênior",
  photoAlt: "Fotografia profissional de Gerson Dias",
  since: "Atuando em qualidade desde 2020",
  experienceCta: "Experiência",
  contactLink: "Contato",
  profileHeading: "Perfil profissional",
  companiesHeading: "Trajetória em qualidade",
  specialtiesHeading: "Áreas de atuação",
  aboutTitle: "Sobre mim",
  about: [
    "Sou Gerson da Costa Dias, profissional de Qualidade de Software mais de 6 anos de experiência em automação, planejamento de testes e validação de aplicações e integrações, com atuação em ambientes de E-commerce, Saúde e plataformas corporativas.",
    "Minha trajetória passa por e-commerce, integrações e plataformas VTEX. Atuo na automação front-end e back-end, validação de APIs REST e GraphQL, testes de regressão e investigação de falhas.",
    "Também desenvolvo ferramentas para comunidade de QA. Busco conectar a prática de testes às boas práticas de engenharia de software, com evolução futura para liderança técnica em qualidade.",
  ],
  pillars: [
    [
      "01",
      "Entender o sistema",
      "Contexto, requisitos e investigação de falhas.",
    ],
    [
      "02",
      "Testar com propósito",
      "Estratégias de validação, automação e regressão.",
    ],
    ["03", "Construir soluções", "Ferramentas que apoiam o trabalho de QA."],
  ],
  experienceTitle: "Experiência profissional",
  skillsTitle: "Competências técnicas",
  projectsTitle: "Projetos independentes",
  projectsDescription:
    "Projetos independentes que conectam engenharia, experimentação e necessidades reais de qualidade.",
  featured: "PROJETO EM DESTAQUE",
  details: "Explorar projeto",
  features: "Funcionalidades e escopo",
  technologies: "Tecnologias confirmadas",
  demo: "Acessar projeto",
  repository: "Repositório",
  linksPending: "Links públicos em breve",
  casesLabel: "ESTUDOS DE CASO",
  casesTitle: "O raciocínio por trás dos testes.",
  preparation: "Em preparação",
  caseFields: {
    context: "Contexto",
    problem: "Problema",
    strategy: "Estratégia de qualidade",
    tools: "Ferramentas utilizadas",
    approach: "Solução ou abordagem",
    results: "Resultados",
    learnings: "Aprendizados",
  },
  articlesTitle: "Artigos e publicações",
  articlesEmpty: "Novos conteúdos por aqui em breve.",
  articlesDescription:
    "Um espaço para reunir artigos sobre automação de testes e engenharia de qualidade.",
  linkedinCta: "Acompanhar no LinkedIn",
  read: "Ler artigo",
  educationTitle: "Formação acadêmica",
  certifications: "Certificações",
  certificationsEmpty:
    "Certificações serão adicionadas após confirmação das informações.",
  contactEyebrow: "VAMOS CONVERSAR",
  contactTitle: "Vamos conversar?",
  contactDescription:
    "Aberto a oportunidades de QA Sênior e a trocas sobre automação, engenharia de qualidade e ferramentas para QA.",
  contactCta: "Conversar no LinkedIn",
  email: "Enviar e-mail",
  footer: "Todos os direitos reservados.",
  backTop: "Voltar ao início",
};
export const experiences = [
  {
    company: "Quality Digital",
    role: "Analista de Qualidade",
    period: "Outubro/2023 — Atual",
    current: true,
    activities: [
      "Testes funcionais e automatizados em aplicações front-end e back-end.",
      "Validação de APIs REST e GraphQL, integrações e fluxos de e-commerce.",
      "Planejamento de testes e regressão.",
      "Investigação de falhas e inconsistências por meio da análise de dados e requisições.",
    ],
  },
  {
    company: "DASA — Diagnósticos da América",
    role: "Analista de Qualidade",
    period: "Setembro/2022 — Junho/2023",
    current: false,
    activities: [
      "Testes funcionais e automatizados em aplicações e integrações.",
      "Validação de APIs e planejamento e execução de testes.",
      "Identificação e documentação de defeitos.",
    ],
  },
  {
    company: "WebSiteSA",
    role: "Analista de Qualidade",
    period: "Janeiro/2020 — Setembro/2022",
    current: false,
    activities: [
      "Planejamento, execução e automação de testes.",
      "Apoio ao levantamento de requisitos e elaboração de cenários e casos de teste.",
      "Identificação de melhorias nos processos de qualidade.",
    ],
  },
];
export const skills = [
  {
    title: "Automação de testes",
    items: ["Cypress", "Playwright", "JavaScript", "TypeScript", " Robot Framework"],
  },
  { title: "Testes de API", items: ["REST", "GraphQL", "Postman", "Insomnia"] },
  {
    title: "Estratégias de qualidade",
    items: [
      "Testes funcionais",
      "Regressão",
      "Integração",
      "E2E",
      "Smoke Tests",
      "Testes exploratórios",
      "Planejamento de testes",
    ],
  },
  {
    title: "Engenharia e infraestrutura",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Docker",
      "Linux",
      "VTEX IO",
    ],
  },
  {
    title: "Gestão e colaboração",
    items: [
      "Jira",
      "Planejamento de cenários",
      "Documentação de testes",
      "Análise de defeitos",
    ],
  },
];
export const projects: Project[] = [
  {
    id: "qa-vault",
    name: "QA Vault",
    image: "projects/qavault.webp",
    category: "ECOSSISTEMA DE EVIDÊNCIAS",
    description:
      "Da captura ao compartilhamento: evidências de testes organizadas em um só ecossistema.",
    features: [
      "Aplicação desktop, extensão para navegador e plataforma web.",
      "Integração com Google Drive.",
      "Captura de screenshots e vídeos.",
      "Organização de evidências e compartilhamento por links.",
    ],
    technologies: [],
    demo: "https://qavault.com.br/",
  },
  {
    id: "qa-vault-manager",
    name: "QA Vault Manager",
    image: "projects/qavault-manager.webp",
    category: "GESTÃO DE QUALIDADE",
    description:
      "Uma plataforma voltada à organização e ao acompanhamento das atividades de teste.",
    features: [
      "Organização de cenários e estruturação de fluxos de teste.",
      "Gestão de execuções e organização de releases.",
      "Acompanhamento de resultados.",
    ],
    technologies: [],
  },
  {
    id: "qauto",
    name: "QAuto",
    image: "projects/qauto.webp",
    category: "LABORATÓRIO DE AUTOMAÇÃO",
    description:
      "Estudos, experimentação e desenvolvimento de práticas em automação de testes.",
    features: [
      "Estudos técnicos e exemplos de automação.",
      "Automação E2E e testes de API.",
      "Boas práticas de QA.",
    ],
    technologies: [],
    demo: "https://qauto.websolutions.app.br/",
  },
];
export const caseStudies: CaseStudy[] = [
  {
    title: "Investigação de inconsistências em carrinhos de e-commerce.",
    status: "preparation",
  },
  { title: "Validação de integrações REST e GraphQL.", status: "preparation" },
  {
    title: "Estratégias de regressão em sistemas complexos.",
    status: "preparation",
  },
];
export const articles: Article[] = [];
export const education = [
  {
    level: "Graduação",
    name: "Tecnologia da Informação",
    institution: "Universidade Estácio de Sá",
    year: "2018",
  },
  {
    level: "Pós-graduação",
    name: "Gestão em Tecnologia da Informação",
    institution: "Escola Superior Aberta do Brasil",
    year: "2020",
  },
];
export const certifications: {
  name: string;
  issuer: string;
  year?: string;
  url?: string;
}[] = [];

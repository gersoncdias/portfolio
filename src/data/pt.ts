import type { Article, Project } from '../types/content';
export const profile = {
  name: 'Gerson Dias',
  fullName: 'Gerson da Costa Dias',
  initials: 'GD',
  title: 'Quality Assurance Engineer | Test Automation',
  linkedin: 'https://www.linkedin.com/in/gerson-costa-dias/',
  github: 'https://github.com/gersoncdias',
  email: 'gersoncdias1@gmail.com',
  resume: 'documents/curriculo-gerson-dias.pdf',
  photo: '',
};
export const navigation = [
  ['inicio', 'Início'],
  ['sobre', 'Sobre'],
  ['competencias', 'Competências'],
  ['experiencia', 'Experiência'],
  ['projetos', 'Projetos'],
  ['artigos', 'Artigos'],
  ['formacao', 'Formação'],
  ['contato', 'Contato'],
] as const;
export const copy = {
  labels: {
    about: 'SOBRE MIM',
    experience: 'EXPERIÊNCIA',
    skills: 'COMPETÊNCIAS',
    projects: 'PROJETOS',
    articles: 'ARTIGOS & PUBLICAÇÕES',
    education: 'FORMAÇÃO',
  },
  current: 'Atual',
  profileLabel: 'GERSON DIAS / QA ENGINEER',
  quality: 'Quality',
  byDesign: 'by design.',
  automation: 'Test Automation',
  engineering: 'Quality Engineering',
  aboutLink: 'Sobre',
  skip: 'Pular para o conteúdo',
  menu: 'Abrir menu',
  closeMenu: 'Fechar menu',
  navigation: 'Navegação principal',
  lightTheme: 'Ativar tema claro',
  darkTheme: 'Ativar tema escuro',
  eyebrow: 'PORTFÓLIO · ANALISTA DE QUALIDADE',
  headline: 'Construindo software com mais',
  headlineAccent: 'qualidade e confiança.',
  intro:
    'QA Engineer especializado em automação de testes, estratégias de qualidade e desenvolvimento de soluções para engenharia de software.',
  projectsCta: 'Conhecer projetos',
  resume: 'Visualizar currículo',
  downloadResume: 'Baixar currículo',
  resumePending: 'Currículo em breve',
  heroNote: 'AUTOMAÇÃO · APIs · ENGENHARIA DE QUALIDADE',
  role: 'Quality Assurance Engineer',
  focus: 'Foco em oportunidades de QA Sênior',
  photoAlt: 'Fotografia profissional de Gerson Dias',
  since: 'Atuando em qualidade desde 2020',
  experienceCta: 'Experiência',
  contactLink: 'Contato',
  profileHeading: 'Perfil profissional',
  aboutTitle: 'Sobre mim',
  about: {
    intro: [
      'Sou um profissional apaixonado por Quality Assurance e automação de testes, com uma trajetória sólida em garantir a qualidade de software. Além de atuar como QA Engineer, sou criador do QAUTO — um site dedicado a compartilhar conhecimento sobre automação de testes e performance, ajudando a comunidade de QA a se aprimorar.',
      'Minha experiência abrange todo o ciclo de qualidade, desde a definição de estratégias de testes até a implementação de soluções automatizadas, promovendo a melhoria contínua dos processos e das entregas. Trabalho lado a lado com times de desenvolvimento ágil para garantir que a qualidade seja parte integrante do ciclo de vida do produto.',
    ],
    competenciesTitle: 'Minhas principais competências incluem:',
    competencies: [
      {
        title: 'Planejamento e estratégia de qualidade',
        items: [
          'Definição de planos de testes robustos alinhados aos requisitos de negócio e técnicos.',
          'Identificação de riscos e mitigação por meio de testes estratégicos e métricas de qualidade.',
          'Definição de frameworks e melhores práticas de testes para garantir entregas contínuas.',
        ],
      },
      {
        title: 'Automação de testes',
        items: [
          'Desenvolvimento de testes automatizados para aplicações web e APIs utilizando Cypress, Selenium, Playwright, Postman e Insomnia.',
          'Integração de testes automatizados em pipelines de CI/CD com ferramentas como GitHub Actions e Jenkins, garantindo feedback contínuo ao time.',
          'Implementação de padrões como Page Object Model (POM) para testes mais eficientes e manuteníveis.',
        ],
      },
      {
        title: 'Testes manuais e funcionais',
        items: [
          'Execução de testes exploratórios, funcionais e de regressão para garantir a estabilidade do sistema.',
          'Validação de critérios de aceite e alinhamento de expectativas com stakeholders.',
          'Elaboração de relatórios detalhados de bugs, trabalhando em colaboração com times multidisciplinares.',
        ],
      },
      {
        title: 'Agilidade e qualidade contínua',
        items: [
          'Forte atuação em ambientes ágeis, participando de cerimônias Scrum e Kanban e contribuindo para a cultura de qualidade no time.',
          'Foco em melhoria contínua, impulsionando processos de qualidade desde a concepção até a entrega final do produto.',
          'Definição de KPIs de qualidade, ajudando na tomada de decisão baseada em dados.',
        ],
      },
    ],
    conclusion:
      'Sou apaixonado por desafios e comprometido em aprimorar continuamente meus conhecimentos para garantir produtos de software de alta qualidade e confiabilidade. Meu objetivo é contribuir para o sucesso dos projetos, agregando valor ao negócio por meio de práticas eficientes e inovadoras de QA.',
  },
  experienceTitle: 'Experiência profissional',
  skillsTitle: 'Competências técnicas',
  projectsTitle: 'Projetos independentes',
  projectsDescription:
    'Projetos independentes que conectam engenharia, experimentação e necessidades reais de qualidade.',
  details: 'Explorar projeto',
  features: 'Funcionalidades e escopo',
  technologies: 'Tecnologias confirmadas',
  demo: 'Acessar projeto',
  repository: 'Repositório',
  linksPending: 'Links públicos em breve',
  articlesTitle: 'Artigos e publicações',
  articlesEmpty: 'Novos conteúdos por aqui em breve.',
  articlesDescription:
    'Um espaço para reunir artigos sobre automação de testes e engenharia de qualidade.',
  linkedinCta: 'Acompanhar no LinkedIn',
  read: 'Ler artigo',
  educationTitle: 'Formação acadêmica',
  certifications: 'Certificações',
  viewCertificate: 'Visualizar certificado',
  certificationsEmpty: 'Certificações serão adicionadas após confirmação das informações.',
  contactTitle: 'Vamos conversar?',
  contactDescription:
    'Aberto a novos desafios e oportunidades para contribuir com qualidade, automação de testes e engenharia de software.',
  contactCta: 'Conversar no LinkedIn',
  email: 'Enviar e-mail',
  footer: 'Todos os direitos reservados.',
  backTop: 'Voltar ao início',
};
export const experiences = [
  {
    company: 'Quality Digital',
    logo: 'images/companies/quality-digital.jpeg',
    role: 'Analista de Qualidade',
    period: 'Outubro/2023 — Atual',
    current: true,
    activities: [
      'Testes funcionais e automatizados em aplicações front-end e back-end.',
      'Validação de APIs REST e GraphQL, integrações e fluxos de e-commerce.',
      'Planejamento de testes e regressão.',
      'Investigação de falhas e inconsistências por meio da análise de dados e requisições.',
    ],
  },
  {
    company: 'DASA — Diagnósticos da América',
    logo: 'images/companies/dasa.jpeg',
    role: 'Analista de Qualidade',
    period: 'Setembro/2022 — Junho/2023',
    current: false,
    activities: [
      'Testes funcionais e automatizados em aplicações e integrações.',
      'Validação de APIs e planejamento e execução de testes.',
      'Identificação e documentação de defeitos.',
    ],
  },
  {
    company: 'WebSiteSA',
    logo: 'images/companies/websitessa.png',
    role: 'Analista de Qualidade',
    period: 'Janeiro/2020 — Setembro/2022',
    current: false,
    activities: [
      'Planejamento, execução e automação de testes.',
      'Apoio ao levantamento de requisitos e elaboração de cenários e casos de teste.',
      'Identificação de melhorias nos processos de qualidade.',
    ],
  },
];
export const skills = [
  {
    title: 'Automação de testes',
    items: ['Cypress', 'Playwright', 'JavaScript', 'TypeScript', ' Robot Framework'],
  },
  { title: 'Testes de API', items: ['REST', 'GraphQL', 'Postman', 'Insomnia'] },
  {
    title: 'Estratégias de qualidade',
    items: [
      'Testes funcionais',
      'Regressão',
      'Integração',
      'E2E',
      'Smoke Tests',
      'Testes exploratórios',
      'Planejamento de testes',
    ],
  },
  {
    title: 'Engenharia e infraestrutura',
    items: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Docker', 'Linux', 'VTEX IO'],
  },
  {
    title: 'Gestão e colaboração',
    items: ['Jira', 'Planejamento de cenários', 'Documentação de testes', 'Análise de defeitos'],
  },
];
export const projects: Project[] = [
  {
    id: 'qa-vault',
    name: 'QA Vault',
    image: 'projects/qavault.webp',
    category: 'ECOSSISTEMA DE EVIDÊNCIAS',
    description:
      'Da captura ao compartilhamento: evidências de testes organizadas em um só ecossistema.',
    features: [
      'Aplicação desktop, extensão para navegador e plataforma web.',
      'Integração com Google Drive.',
      'Captura de screenshots e vídeos.',
      'Organização de evidências e compartilhamento por links.',
    ],
    technologies: [],
    demo: 'https://qavault.com.br/',
  },
  {
    id: 'qa-vault-manager',
    name: 'QA Vault Manager',
    image: 'projects/qavault-manager.webp',
    category: 'GESTÃO DE QUALIDADE',
    description:
      'Uma plataforma voltada à organização e ao acompanhamento das atividades de teste.',
    features: [
      'Organização de cenários e estruturação de fluxos de teste.',
      'Gestão de execuções e organização de releases.',
      'Acompanhamento de resultados.',
    ],
    technologies: [],
  },
  {
    id: 'qauto',
    name: 'QAuto',
    image: 'projects/qauto.webp',
    category: 'LABORATÓRIO DE AUTOMAÇÃO',
    description: 'Estudos, experimentação e desenvolvimento de práticas em automação de testes.',
    features: [
      'Estudos técnicos e exemplos de automação.',
      'Automação E2E e testes de API.',
      'Boas práticas de QA.',
    ],
    technologies: [],
    demo: 'https://qauto.websolutions.app.br/',
  },
];
export const articles: Article[] = [
  {
    title: 'GraphQL na prática',
    summary:
      'Entenda como o GraphQL funciona na prática e como ele pode simplificar a comunicação entre aplicações.',
    topic: 'GraphQL',
    url: 'https://qavault.com.br/blog/graphql-na-pratica',
  },
  {
    title: 'Checklist de evidências para bug report',
    summary:
      'Um checklist para reunir evidências claras e tornar os relatos de bugs mais completos e úteis para o time.',
    topic: 'Qualidade de software',
    url: 'https://qavault.com.br/blog/checklist-de-evidencias-para-bug-report',
  },
  {
    title: 'Como documentar teste exploratório com evidências',
    summary:
      'Veja como registrar testes exploratórios e organizar evidências para comunicar descobertas com clareza.',
    topic: 'Testes exploratórios',
    url: 'https://qavault.com.br/blog/como-documentar-teste-exploratorio-com-evidencias',
  },
];
export const education = [
  {
    level: 'Graduação',
    name: 'Tecnologia da Informação',
    institution: 'Universidade Estácio de Sá',
    year: '2018',
  },
  {
    level: 'Pós-graduação',
    name: 'Gestão em Tecnologia da Informação',
    institution: 'Escola Superior Aberta do Brasil',
    year: '2020',
  },
];
export const certifications: {
  name: string;
  issuer: string;
  year?: string;
  url?: string;
  description?: string;
  image?: string;
  file?: string;
}[] = [
  {
    name: 'Certificação VTEX Sales',
    issuer: 'VTEX',
    year: '2023',
    description:
      'Certificação de Sales é uma avaliação abrangente de profissionais da equipe comercial dos parceiros, projetada para validar o conhecimento e as habilidades necessárias da plataforma VTEX.',
    image: 'images/certificates/vtex-sales-certification.jpeg',
  },
  {
    name: 'Formação Carreira QA: processos e automação de testes',
    issuer: 'Alura',
    url: 'https://cursos.alura.com.br/degree/certificate/654209ef-a60f-4f4a-976e-1e8fdd6d0911',
    image: 'images/certificates/alura-carreira-qa-processos-automacao-testes.jpg',
    file: 'documents/certificates/alura-carreira-qa-processos-automacao-testes.pdf',
  },
  {
    name: 'Testes automatizados com Cypress',
    issuer: 'Udemy',
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-ffca388a-1424-476c-827c-ac3d2701f4a3.pdf',
    image: 'images/certificates/udemy-testes-automatizados-cypress.jpg',
    file: 'documents/certificates/udemy-testes-automatizados-cypress.pdf',
  },
];

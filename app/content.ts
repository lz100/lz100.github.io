// ============================================================================
//  EDIT ME  —  All site content lives here.
//  Replace the placeholder text below with your real details. Every page reads
//  from this one file, so you never have to touch the components.
//
//  Prefilled with known-real values (GitHub handle, email, site, roles).
//  Items tagged  // TODO  are placeholders — swap in the real thing.
// ============================================================================

export const site = {
  name: 'Le Zhang',
  initials: 'LZ',
  roles: ['data scientist', 'bioinformatician', 'researcher', 'web developer'],
  // One-line value proposition shown under the hero.
  tagline:
    'I turn messy biological data into models, pipelines, and tools that move research forward.', // TODO
  location: 'San Diego, CA', // TODO
  email: 'lzhang@jcvi.org',
  links: {
    github: 'https://github.com/lz100',
    // TODO: add/remove as you like — empty strings are hidden automatically.
    linkedin: '',
    scholar: '',
    twitter: '',
    orcid: '',
  },
};

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Research', href: '/research' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const about = {
  // Short intro shown on the home page.
  lead:
    'I’m a data scientist and bioinformatician working at the intersection of genomics, machine learning, and open-source software.', // TODO
  // Longer bio paragraphs for the About page.
  paragraphs: [
    'I build reproducible analysis pipelines and interactive tools that help biologists ask bigger questions of their data — from single-cell transcriptomics to large-scale sequence analysis.', // TODO
    'My work spans the full stack of computational biology: wrangling raw sequencing output, designing statistical models, and shipping the web apps and R/Bioconductor packages that put those methods in researchers’ hands.', // TODO
    'When I’m not in a terminal, I’m usually writing about reproducible science or contributing to the open-source bioinformatics ecosystem.', // TODO
  ],
  // Quick facts shown as a sidebar / chips.
  focus: ['Genomics', 'Single-cell', 'Machine learning', 'R / Bioconductor', 'Data viz', 'Web apps'], // TODO
};

export const experience = [
  {
    role: 'Bioinformatician', // TODO
    org: 'J. Craig Venter Institute', // TODO
    period: '2021 — Present', // TODO
    summary:
      'Develop genomics analysis pipelines and interactive visualization tools for collaborative research projects.', // TODO
  },
  {
    role: 'Research Assistant', // TODO
    org: 'University (placeholder)', // TODO
    period: '2018 — 2021', // TODO
    summary:
      'Built statistical models and reproducible workflows for high-throughput sequencing studies.', // TODO
  },
];

export const research = {
  intro:
    'My research focuses on making large-scale biological data analysis reproducible, interactive, and accessible.', // TODO
  areas: [
    {
      title: 'Single-cell genomics', // TODO
      body: 'Methods and tooling for clustering, trajectory inference, and visualization of single-cell datasets.', // TODO
    },
    {
      title: 'Reproducible pipelines', // TODO
      body: 'Workflow design that keeps analyses transparent, portable, and easy to re-run end to end.', // TODO
    },
    {
      title: 'Interactive tools', // TODO
      body: 'Web applications and R/Shiny packages that let biologists explore results without writing code.', // TODO
    },
  ],
  // Publications — list your papers here.
  publications: [
    {
      title: 'A placeholder paper title goes here', // TODO
      authors: 'Zhang L, Coauthor A, Coauthor B', // TODO
      venue: 'Journal / Conference, 2024', // TODO
      url: '', // TODO: DOI or link
    },
    {
      title: 'Another representative publication', // TODO
      authors: 'Coauthor C, Zhang L', // TODO
      venue: 'Journal / Conference, 2022', // TODO
      url: '',
    },
  ],
};

export const projects = [
  {
    name: 'spatialHeatmap', // TODO
    tagline: 'Spatial visualization of assay data on anatomical images.', // TODO
    tags: ['R', 'Bioconductor', 'Shiny'], // TODO
    url: 'https://github.com/lz100', // TODO
    year: '2023', // TODO
  },
  {
    name: 'systemPipeShiny', // TODO
    tagline: 'A workflow management GUI for reproducible data analysis.', // TODO
    tags: ['R', 'Shiny', 'Workflows'], // TODO
    url: 'https://github.com/lz100', // TODO
    year: '2022', // TODO
  },
  {
    name: 'Your next project', // TODO
    tagline: 'Short, punchy description of what it does and why it matters.', // TODO
    tags: ['TypeScript', 'Next.js'], // TODO
    url: 'https://github.com/lz100', // TODO
    year: '2024', // TODO
  },
];

export const contact = {
  blurb:
    'Open to collaborations, research conversations, and interesting data problems. The fastest way to reach me is email.', // TODO
};

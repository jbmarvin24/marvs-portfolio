export interface IPortfolio {
  name: string;
  description: string;
  techStacks: string[];
  image: string;
  gitHubRepoUrl: string;
  demoUrl: string;
  isTop: boolean;
  order: number;
  moreInfo?: {
    title: string;
    content: string[];
  }[];
}

export const portfolios: IPortfolio[] = [
  {
    name: 'Marvs Ecommerce API',
    description:
      'An e-commerce API built using Nest JS and PostgreSQL. This API provides endpoints for managing various aspects of an e-commerce platform, such as products, shops, customers, and more.',
    techStacks: ['Typescript', 'Nest JS', 'PostgreSQL', 'Azure App Service'],
    image: 'img/marvs-ecommerce-api.png',
    gitHubRepoUrl: 'https://github.com/jbmarvin24/marvs-ecommerce-api',
    demoUrl: 'https://marvs-ecommerce-api.azurewebsites.net/',
    isTop: true,
    order: 1,
  },
  {
    name: 'Marvs GameHub',
    description:
      'This is a responsive website built using React 18 course by Code with Mosh. The backend API used in this project is from rawg.io.',
    techStacks: [
      'Typescript',
      'React JS 18',
      'Vite',
      'Zustand',
      'React Query',
      'Vercel',
    ],
    demoUrl: 'https://marvs-game-hub.vercel.app',
    gitHubRepoUrl: 'https://github.com/jbmarvin24/game-hub',
    image: 'img/marvs-gamehub.png',
    isTop: true,
    order: 2,
  },
  {
    name: 'Marvsify',
    description:
      'This website serves as a demonstration of a Cloud Hosting Platform. It highlights the benefits, features, and services that a cloud hosting provider can offer.',
    techStacks: ['HTML5', 'CSS3', 'Netlify'],
    demoUrl: 'https://marvsify.netlify.app/',
    gitHubRepoUrl: 'https://github.com/jbmarvin24/marvsify',
    image: 'img/marvsify.png',
    isTop: true,
    order: 3,
  },
  {
    name: 'CVM Finance Loan System',
    description:
      'CVM Finance in-house loan system that effectively automates various aspects of the loan lifecycle, including loan application processing, verification procedures, fund disbursement, repayment tracking, and much more.',
    techStacks: ['Next JS', 'Express JS', 'SQL Server', 'Prisma 2'],
    demoUrl: '',
    gitHubRepoUrl: '',
    image: 'https://placehold.co/400x200?text=Private',
    isTop: false,
    order: 4,
    moreInfo: [
      {
        title: 'Company',
        content: ['CVM Finance'],
      },
      {
        title: 'My Responsibilities',
        content: [
          'Ensure the project is delivered on schedule.',
          'Create a project timeline.',
          'Design the user interface.',
          'Establish API routes for frontend developers.',
          'Develop the business logic.',
          'Architect the database structure.',
          'Generate reports for analysis.',
          'Facilitate API routes to integrate with other systems.',
        ],
      },
    ],
  },
  {
    name: 'CVM Finance Payroll System',
    description:
      'Design and implement a comprehensive Payroll system tailored for CVM Finance, streamlining their payroll processing workflow.',
    techStacks: [
      'React JS',
      'C#',
      'ASP.NET API',
      'Entity Framework',
      'SQL Server',
    ],
    demoUrl: '',
    gitHubRepoUrl: '',
    image: 'https://placehold.co/400x200?text=Private',
    isTop: false,
    order: 4,
    moreInfo: [
      {
        title: 'Company',
        content: ['CVM Finance'],
      },
      {
        title: 'Applications',
        content: ['Payroll System Desktop App', 'Employee Portal Web App'],
      },
      {
        title: 'My Responsibilities',
        content: [
          'Ensure the project is delivered on schedule.',
          'Design the user interface.',
          'Develop the business logic.',
          'Develop API for Employee Portal front end.',
          'Architect the database structure.',
          'Generate reports for analysis.',
        ],
      },
    ],
  },
];

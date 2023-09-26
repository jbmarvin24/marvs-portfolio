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
    name: 'My Portfolio',
    description:
      'I showcase my skills and experience as a full stack developer. With a passion for creating interactive and user-friendly web applications.',
    techStacks: ['React JS', 'Vite', 'Vercel', 'Daisy UI'],
    demoUrl: 'https://marvindonina.vercel.app/',
    gitHubRepoUrl: 'https://github.com/jbmarvin24/marvs-portfolio/',
    image: 'img/my-portfolio.png',
    isTop: false,
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
        content: ['CVM Finance & Credit Corp.'],
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
          'Set up continuous integration and delivery.',
          'Set up data migration from old system.',
        ],
      },
    ],
  },
  {
    name: 'CVM Finance Payroll System',
    description:
      'Design and implement a comprehensive Payroll System tailored for CVM Finance, streamlining their payroll processing workflow.',
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
    order: 5,
    moreInfo: [
      {
        title: 'Company',
        content: ['CVM Finance & Credit Corp.'],
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
          'Set up data migration from manual.',
        ],
      },
    ],
  },
  {
    name: 'Car Dealership Reviews',
    description:
      'My capstone project to my IBM Full Stack Software Developer Certification, A national car dealership with branches across the United States conducted a survey, revealing a suggestion for a central database of dealership reviews nationwide to benefit customers.',
    techStacks: ['Python', 'Django', 'IBM Cloud', 'Microservices'],
    demoUrl: '',
    gitHubRepoUrl:
      'https://github.com/jbmarvin24/agfzb-CloudAppDevelopment_Capstone',
    image: '/img/car-dealership-review.png',
    isTop: false,
    order: 6,
    moreInfo: [
      {
        title: 'Type',
        content: ['Capstone Project'],
      },
      {
        title: 'Tech Stacks',
        content: [
          'Python',
          'Django',
          'Javascript',
          'IBM Cloud Functions',
          'IBM Watsons NLU Service',
          'IBM Cloudant',
          'Kubernetes',
          'Docker',
        ],
      },
      {
        title: 'My Responsibilities',
        content: [
          'Implement user management using the Django user authentication system.',
          'Set up continuous integration and delivery.',
          'Create cloud functions to manage dealers and reviews.',
          'Create Django models and views to manage car model and car make.',
          'Create Django proxy services and views to integrate dealers, reviews, and cars together.',
        ],
      },
    ],
  },
  {
    name: 'CVM Finance Website',
    description:
      'Customize website for CVM Finance and provide functionality for customers to make online loan payments.',
    techStacks: ['React JS', 'Express JS', 'MySQL'],
    demoUrl: 'https://cvmfinance.com',
    gitHubRepoUrl: '',
    image: 'img/cvmfcc-website.png',
    isTop: false,
    order: 7,
    moreInfo: [
      {
        title: 'Company',
        content: ['CVM Finance & Credit Corp.'],
      },
      {
        title: 'My Responsibilities',
        content: [
          'Ensure the project is delivered on schedule.',
          'Integration with Payment Gateways',
          'Design the user interface.',
          'Develop the business logic.',
          'Develop API routes',
        ],
      },
    ],
  },
  {
    name: 'PCAP Game Administration',
    description:
      'Automate the scheduling, player line up and result management of games for the Professional Chess Association Of The Philippines.',
    techStacks: ['Next JS', 'Firebase'],
    demoUrl: '',
    gitHubRepoUrl: '',
    image: '/img/pcap-admin.png',
    isTop: false,
    order: 8,
    moreInfo: [
      {
        title: 'Type',
        content: ['Freelance Project'],
      },
      {
        title: 'My Responsibilities',
        content: [
          'Authenticate using google account.',
          'Ensure the project is delivered on schedule.',
          'Design the user interface.',
          'Develop the business logic.',
          'Architect the database structure.',
        ],
      },
    ],
  },
  {
    name: 'Smart Bulletin Board',
    description:
      'Utilize a Smart TV-powered Bulletin Board to facilitate access to diverse announcements, school maps, and the enrollment process within the school campus.',
    techStacks: ['Next JS', 'MySQL'],
    demoUrl: '',
    gitHubRepoUrl: '',
    image: 'img/sbb.png',
    isTop: false,
    order: 9,
    moreInfo: [
      {
        title: 'Type',
        content: ['Freelance Project'],
      },
      {
        title: 'My Responsibilities',
        content: [
          'Set Project timeline.',
          'Architect the application structure.',
        ],
      },
    ],
  },
];

export interface IPortfolio {
  name: string;
  description: string;
  techStacks: string[];
  image: string;
  gitHubRepoUrl: string;
  demoUrl: string;
  isTop: boolean;
  order: number;
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
];

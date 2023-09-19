import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
    ],
  },
]);

export default router;

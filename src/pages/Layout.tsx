import { FunctionComponent } from 'react';
import useThemeStore from '../themeStore';
import classNames from 'classnames';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <div
      className={classNames({
        'text-gray-100': theme === 'dark',
        'text-gray-900': theme === 'light',
      })}
    >
      <NavBar />
      <main className="flex flex-col gap-32 lg:my-20 my-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

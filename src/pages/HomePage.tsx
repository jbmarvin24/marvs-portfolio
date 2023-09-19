import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';
import classNames from 'classnames';
import useThemeStore from '../themeStore';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

function HomePage() {
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
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;

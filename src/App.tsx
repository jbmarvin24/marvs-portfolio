import NavBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import useThemeStore from './themeStore';
import classNames from 'classnames';

function App() {
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

export default App;

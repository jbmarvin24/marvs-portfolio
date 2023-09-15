import NavBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import useThemeStore from './themeStore';

function App() {
  const theme = useThemeStore((s) => s.theme);

  return (
    <div className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;

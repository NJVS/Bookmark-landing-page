import Navbar from './components/Navbar/Navbar';
import Downloads from './components/sections/Downloads/Downloads';
import Faq from './components/sections/Faq/Faq';
import Features from './components/sections/Features/Features';
import Hero from './components/sections/Hero/Hero';
import Subscribe from './components/sections/Subscribe/Subscribe';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Downloads />
        <Faq />
        <Subscribe />
      </main>
      <Navbar position='footer' />
    </>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Vision from './components/Vision';
import Mission from './components/Mission';
import Goals from './components/Goals';
import Values from './components/Values';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Team />
        <Vision />
        <Mission />
        <Goals />
        <Values />
      </main>
      <Footer />
    </>
  );
}

export default App;

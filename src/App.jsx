import Citacion from './components/Citacion';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import NftContents from './components/NftContents';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NftContents />
        <Citacion />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;

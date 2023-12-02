import heroImg from '../assets/images/bored.avif';

export default function Hero() {
  return (
    <section id="hero-section">
      <div id="hero">
        <h1>List of the best NFT stores</h1>
        <p id="hero-text">
          Visit the world&apos;s best NFT dealers and find the NFTs you like
          best!
        </p>
        <button>Sign Up</button>
      </div>
      <img id="hero-image" src={heroImg} alt="Bored Ape image" />
    </section>
  );
}

import logoImg from '../assets/images/nft.avif';

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noreferrer');
};

export default function Header() {
  return (
    <header>
      <nav>
        <div id="logo-image">
          <img src={logoImg} alt="" />
        </div>
        <ul className="nav-list">
          <li role="link" onClick={() => openInNewTab('https://opensea.io/')}>
            Opensea
          </li>
          <li role="link" onClick={() => openInNewTab('')}>
            Rarible
          </li>
          <li role="link" onClick={() => openInNewTab('')}>
            Element Market
          </li>
        </ul>
      </nav>
    </header>
  );
}

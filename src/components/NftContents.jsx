import { NFT_CONTENTS } from '../data.js';
import NftContent from './NftContent';

export default function NftContents() {
  return (
    <section id="info-section">
      <h2>The most popular NFTs</h2>
      <ul>
        {NFT_CONTENTS.map((contentItem) => (
          <NftContent key={contentItem.id} {...contentItem} />
        ))}
      </ul>
    </section>
  );
}

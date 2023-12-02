/* eslint-disable react/prop-types */
export default function NftContent({ image, description }) {
  return (
    <li>
      <img
        src={image}
        alt="NFT"
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      />
      <p>{description}</p>
    </li>
  );
}

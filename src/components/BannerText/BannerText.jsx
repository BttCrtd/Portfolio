/* Bannière de séparation entre les différentes section avec text pouvant défiler */

function BannerText({ message, id }) {
  return (
    <div className="banner-container" id={id}>
      <div className="banner-text">{`${message}`.repeat(60)}</div>
    </div>
  );
}

export default BannerText;

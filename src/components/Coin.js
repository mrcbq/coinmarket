import PropTypes, { string } from 'prop-types';

export default function Coin({ coin }) {
  const {
    id,
    icon,
    marketCap,
    price,
    name,
    rank,
    symbol,
    websiteUrl,
    priceChange1w,
  } = { ...coin };

  console.log(rank);
  return (
    <div className="coin-container">
      <h2>{name}</h2>
      <img src={icon} alt={id} />
      <h2>Details</h2>
      <table>
        <tbody>
          <tr>
            <th>Rank:</th>
            <td>{rank}</td>
          </tr>
          <tr>
            <th> Price:</th>
            <td>{price}</td>
          </tr>
          <tr>
            <th>MarketCap:</th>
            <td>{marketCap}</td>
          </tr>
          <tr>
            <th>Symbol:</th>
            <td>{symbol}</td>
          </tr>
          <tr>
            <th>Price Change in a week:</th>
            <td>{priceChange1w}</td>
          </tr>
          <tr>
            <th>Website:</th>
            <td>
              <a href={websiteUrl} aria-label={id}>
                {websiteUrl}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Coin.propTypes = {
  coin: PropTypes.objectOf(string).isRequired,
};

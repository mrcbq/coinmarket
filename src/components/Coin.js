import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Coin() {
  const { id } = useParams();
  const { coins } = useSelector((store) => store.coins);

  const findCoin = coins.find((coin) => coin.id === id);
  const {
    symbol,
    icon,
    marketCap,
    price,
    name,
    rank,
    websiteUrl,
    priceChange1w,
  } = { ...findCoin };

  console.log(findCoin);
  console.log(id);

  return (
    <div className="coin-container">
      <h2>{name}</h2>
      <img src={icon} alt={id} />
      <h2>Details</h2>
      <table>
        <tbody>
          <tr>
            <th>Rank</th>
            <td>{rank}</td>
          </tr>
          <tr>
            <th> Price</th>
            <td>{parseFloat(price).toFixed(2)}</td>
          </tr>
          <tr>
            <th>Market Cap</th>
            <td>{marketCap}</td>
          </tr>
          <tr>
            <th>Symbol</th>
            <td>{symbol}</td>
          </tr>
          <tr>
            <th>Price Change</th>
            <td>{priceChange1w}</td>
          </tr>
          <tr>
            <th>Website</th>
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

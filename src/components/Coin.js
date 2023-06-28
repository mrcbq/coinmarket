import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCoins } from '../redux/coins/coinsSlice';

export default function Coin() {
  const { id } = useParams();
  const { coins } = useSelector((store) => store.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCoins());
    }
  });

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
            <th>MarketCap</th>
            <td>{parseFloat(marketCap).toFixed(0)}</td>
          </tr>
          <tr>
            <th>Symbol</th>
            <td>{symbol}</td>
          </tr>
          <tr>
            <th>% Price 1W</th>
            <td>{priceChange1w}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={websiteUrl}
                aria-label={id}
              >
                {websiteUrl}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

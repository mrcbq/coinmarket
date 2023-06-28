import PropTypes, { string } from 'prop-types';
import { Link } from 'react-router-dom';

export default function CoinCard({ coin }) {
  const {
    icon, price, symbol, id,
  } = { ...coin };

  return (
    <Link to={`/coin/${id}`}>
      <div className="coin-card">
        <h2>{symbol}</h2>
        <img src={icon} alt={symbol} />
        <p>{parseFloat(price).toFixed(2)}</p>
      </div>
    </Link>
  );
}

CoinCard.propTypes = {
  coin: PropTypes.objectOf(string).isRequired,
};

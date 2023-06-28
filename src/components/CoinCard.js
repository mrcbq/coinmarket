import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CoinCard({
  icon, price, symbol, id,
}) {
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
  icon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

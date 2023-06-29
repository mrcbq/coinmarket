import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function CoinCard({
  icon, price, symbol, id,
}) {
  return (
    <div>
      <Link to={`/coin/${id}`} className="arrow-container">
        <BsArrowRightCircle />
      </Link>
      <div className="coin-card" data-testid="coin-card">
        <h2>{symbol}</h2>
        <img src={icon} alt={symbol} />
        <p>{parseFloat(price).toFixed(2)}</p>
      </div>
    </div>
  );
}

CoinCard.propTypes = {
  icon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

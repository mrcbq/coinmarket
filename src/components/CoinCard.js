import PropTypes, { string } from 'prop-types';

export default function CoinCard({ coin }) {
  const { icon, price, symbol } = { ...coin };

  return (
    <div className="coin-card">
      <h2>{symbol}</h2>
      <img src={icon} alt={symbol} />
      <p>{parseFloat(price).toFixed(2)}</p>
    </div>
  );
}

CoinCard.propTypes = {
  coin: PropTypes.objectOf(string).isRequired,
};

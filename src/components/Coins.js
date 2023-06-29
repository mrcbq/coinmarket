import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCoins } from '../redux/coins/coinsSlice';
import './styles/Coins.css';
import CoinCard from './CoinCard';

export default function Coins() {
  const { coins } = useSelector((store) => store.coins);
  const [selectedRange, setSelectedRange] = useState('1-100');

  const [start, end] = selectedRange.split('-').map(Number);
  const filteredCoins = coins.filter(
    (coin) => coin.rank >= start && coin.rank <= end,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCoins());
    }
  });

  return (
    <div className="container">
      <div className="select-container">
        <label htmlFor="range-selector">
          Select coins by ranks:
          <select
            id="range-selector"
            data-testid="range-selector"
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value)}
          >
            <option value="1-20">1-20</option>
            <option value="21-40">21-40</option>
            <option value="41-60">41-60</option>
            <option value="61-80">61-80</option>
            <option value="81-100">81-100</option>
          </select>
        </label>
      </div>
      <div className="coins-container">
        {filteredCoins.map((coin) => (
          <CoinCard
            key={coin.id}
            id={coin.id}
            icon={coin.icon}
            price={coin.price}
            symbol={coin.symbol}
          />
        ))}
      </div>
    </div>
  );
}

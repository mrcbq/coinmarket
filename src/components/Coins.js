import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCoins } from '../redux/coins/coinsSlice';
// import Coin from './Coin';
import './Coins.css';
import CoinCard from './CoinCard';

export default function Coins() {
  const { coins } = useSelector((store) => store.coins);
  const [selectedRange, setSelectedRange] = useState('1-20');

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
  console.log(coins);

  return (
    <div className="container">
      <select
        value={selectedRange}
        onChange={(e) => setSelectedRange(e.target.value)}
      >
        <option value="1-20">1-20</option>
        <option value="21-40">21-40</option>
        <option value="41-60">41-60</option>
        <option value="61-80">61-80</option>
        <option value="81-100">81-100</option>
      </select>
      ;
      <div className="coins-container">
        {filteredCoins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
        {/* <Coin coin={coins[0]} /> */}
      </div>
    </div>
  );
}

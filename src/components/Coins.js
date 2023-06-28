import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCoins } from '../redux/coins/coinsSlice';
// import Coin from './Coin';
import './Coins.css';
import CoinCard from './CoinCard';

export default function Coins() {
  const { coins } = useSelector((store) => store.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCoins());
    }
  });

  console.log(coins);

  return (
    <div className="container">
      <div className="coins-container">
        {coins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
        {/* <Coin coin={coins[0]} /> */}
      </div>
    </div>
  );
}

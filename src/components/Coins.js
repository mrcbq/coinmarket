import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCoins } from '../redux/coins/coinsSlice';
import './Coins.css';
import Coin from './Coin';

export default function Coins() {
  const { coins } = useSelector((store) => store.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCoins());
    }
  }, []);

  console.log(coins[1]);

  return (
    <div className="coins-container">
      <Coin coin={coins[0]} />
    </div>
  );
}

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCoins } from '../redux/coins/coinsSlice';
import './Coins.css';

export default function Coins() {
  const { coins } = useSelector((store) => store.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCoins());
    }
  }, []);

  console.log(coins);

  return (
    <table>
      <thead>
        <tr>
          <th>Coins</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {/* {Coins.map((Coins) => (
          <Coins
            key={Coins.Coins_id}
            id={Coins.Coins_id}
            name={Coins.Coins_name}
            description={Coins.description}
            isMember={Coins.isMember ?? false}
          />
        ))} */}
      </tbody>
    </table>
  );
}

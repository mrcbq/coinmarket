import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { HashRouter } from 'react-router-dom';
import coinsReducer from '../redux/coins/coinsSlice';
import CoinCard from './CoinCard';

it('displays the corresponding coins', () => {
  const store = configureStore({
    reducer: {
      coins: coinsReducer,
    },
    preloadedState: {
      coins: {
        coins: [
          {
            id: '1',
            rank: 1,
            icon: 'icon1',
            price: 100,
            symbol: 'SYM1',
          },
          {
            id: '2',
            rank: 2,
            icon: 'icon2',
            price: 200,
            symbol: 'SYM2',
          },
          {
            id: '3',
            rank: 3,
            icon: 'icon3',
            price: 300,
            symbol: 'SYM3',
          },
        ],
      },
    },
  });

  render(
    <Provider store={store}>
      <HashRouter>
        <CoinCard icon="icon.png" id="1" price={123.45} symbol="BTC" />
      </HashRouter>
    </Provider>,
  );

  const coinCards = screen.getAllByTestId('coin-card');
  expect(coinCards).toHaveLength(1);
});

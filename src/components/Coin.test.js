import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Coin from './Coin';

const mockStore = configureStore([]);

test('renders coin details', () => {
  const initialState = {
    coins: {
      coins: [
        {
          id: 'coin-id',
          symbol: 'BTC',
          icon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
          marketCap: 100000000000,
          price: 50000,
          name: 'Bitcoin',
          rank: 1,
          websiteUrl: 'https://bitcoin.org',
          priceChange1w: 0.05,
        },
      ],
    },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Coin />
    </Provider>,
  );

  expect(screen.getByText('Details')).toBeInTheDocument();
  expect(screen.getByText('Rank')).toBeInTheDocument();
  expect(screen.getByText('Price')).toBeInTheDocument();
  expect(screen.getByText('MarketCap')).toBeInTheDocument();
  expect(screen.getByText('Symbol')).toBeInTheDocument();
  expect(screen.getByText('% Price 1W')).toBeInTheDocument();
  expect(screen.getByText('Website')).toBeInTheDocument();
});

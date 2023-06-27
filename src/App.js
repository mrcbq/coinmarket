import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Coin from './components/Coin';
import Coins from './components/Coins';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Coins />}
          basename="/https://mrcbq.github.io/coinmarket/"
        />
        <Route path="/details" element={<Coin />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

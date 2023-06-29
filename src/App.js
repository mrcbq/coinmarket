import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Coins from './components/Coins';
import Coin from './components/Coin';

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
        <Route path="/coin/:id" element={<Coin />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Wallet } from './pages/wallet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Wallet />} />
        <Route path='/menu' element={<h1>Cardápio</h1>} />
        <Route path='/checkout' element={<h1>Checkout</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

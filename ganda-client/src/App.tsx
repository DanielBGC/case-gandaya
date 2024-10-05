import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Wallet } from './pages/wallet';
import { Menu } from './pages/menu';
import { Checkout } from './pages/checkout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Quando o usuário acessar a rota '/', ele será redirecionado para '/wallet' */}
        <Route path='/' element={<Navigate to='/wallet' />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Wallet } from './pages/wallet';
import { Menu } from './pages/menu';
import { Checkout } from './pages/checkout';

import { Modal } from './components/modal';

import { useUserStore } from './store';

function App() {
  const { isModalOpen, modalInfo } = useUserStore();

  return (
    <Router>
      <Modal
        isOpen={isModalOpen}
        success={modalInfo.success}
        title={modalInfo.title}
        message={modalInfo.message}
        onClose={modalInfo.onClose}
      />

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

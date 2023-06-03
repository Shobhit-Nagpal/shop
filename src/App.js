import RouteSwitch from './components/RouteSwitch';
import CartProvider from './components/CartProvider';
import './styles/App.css';

function App() {

  
  return (
    <CartProvider>
      <RouteSwitch/>
    </CartProvider>
  );
}

export default App;

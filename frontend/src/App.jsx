import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import './index.css';

function App() {
    const [view, setView] = useState('home'); // 'home', 'checkout', 'success', 'login', 'register', 'admin'
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [completedOrder, setCompletedOrder] = useState(null);

    const handleCartClick = () => {
        setIsCartOpen(true);
    };

    const handleCartClose = () => {
        setIsCartOpen(false);
    };

    const handleCheckout = () => {
        setIsCartOpen(false);
        setView('checkout');
    };

    const handleOrderSuccess = (order) => {
        setCompletedOrder(order);
        setView('success');
    };

    const handleBackToHome = () => {
        setView('home');
        setCompletedOrder(null);
    };

    const handleBackToCart = () => {
        setView('home');
        setIsCartOpen(true);
    };

    const handleLoginClick = () => setView('login');
    const handleRegisterClick = () => setView('register');
    const handleAdminClick = () => setView('admin');

    return (
        <CartProvider>
            <div className="app">
                <Header
                    onCartClick={handleCartClick}
                    onNavClick={handleBackToHome}
                    onLoginClick={handleLoginClick}
                    onAdminClick={handleAdminClick}
                />
                <Hero />
                <Menu />
                <About />
                <Cart
                    isOpen={isCartOpen}
                    onClose={handleCartClose}
                    onCheckout={handleCheckout}
                />
            </>
                )}

            {view === 'checkout' && (
                <>
                    <Header onCartClick={handleCartClick} onNavClick={handleBackToHome} />
                    <Checkout
                        onSuccess={handleOrderSuccess}
                        onBack={handleBackToCart}
                    />
                </>
            )}

            {view === 'success' && completedOrder && (
                <OrderSuccess
                    order={completedOrder}
                    onBackToHome={handleBackToHome}
                />
            )}
        </div>
        </CartProvider >
    );
}

export default App;

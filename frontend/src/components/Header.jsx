import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = ({ onCartClick }) => {
    const { getTotalItems } = useCart();
    const [scrolled, setScrolled] = useState(false);

    useState(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cartBadgeSpring = useSpring({
        transform: getTotalItems() > 0 ? 'scale(1)' : 'scale(0)',
        config: { tension: 300, friction: 10 },
    });

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="logo">
                    <h2>🍛 Kasthuri Food Point</h2>
                </div>
                <nav className="nav">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#menu" className="nav-link">Menu</a>
                    <a href="#about" className="nav-link">About</a>
                    <button className="cart-button" onClick={onCartClick}>
                        <span className="cart-icon">🛒</span>
                        {getTotalItems() > 0 && (
                            <animated.span className="cart-badge" style={cartBadgeSpring}>
                                {getTotalItems()}
                            </animated.span>
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;

import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = ({ onCartClick, onNavClick }) => {
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

    const handleNavClick = (e, targetId) => {
        if (onNavClick) {
            onNavClick();
            // Small delay to allow App to switch view before scrolling
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="logo" onClick={() => handleNavClick(null, 'home')} style={{ cursor: 'pointer' }}>
                    <h2>🍛 Kasthuri Food Point</h2>
                    <span className="logo-tagline">Sri Lankan Cuisine | Wagolla, Embogama</span>
                </div>
                <nav className="nav">
                    <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                    <a href="#menu" className="nav-link" onClick={(e) => handleNavClick(e, 'menu')}>Menu</a>
                    <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
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

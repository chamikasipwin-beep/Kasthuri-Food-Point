import { useAuth } from '../context/AuthContext';

const Header = ({ onCartClick, onNavClick, onLoginClick, onAdminClick }) => {
    const { getTotalItems } = useCart();
    const { user, logout, isAdmin } = useAuth();
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
        if (targetId === 'home') {
            onNavClick();
        }

        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
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

                    {isAdmin() && (
                        <a href="#admin" className="nav-link admin-link" onClick={(e) => { e.preventDefault(); onAdminClick(); }}>Admin</a>
                    )}

                    <button className="cart-button" onClick={onCartClick}>
                        <span className="cart-icon">🛒</span>
                        {getTotalItems() > 0 && (
                            <animated.span className="cart-badge" style={cartBadgeSpring}>
                                {getTotalItems()}
                            </animated.span>
                        )}
                    </button>

                    {user ? (
                        <div className="user-profile">
                            <span className="user-name">👤 {user.username}</span>
                            <button className="btn-logout" onClick={logout}>Logout</button>
                        </div>
                    ) : (
                        <button className="btn-login" onClick={onLoginClick}>Login</button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;

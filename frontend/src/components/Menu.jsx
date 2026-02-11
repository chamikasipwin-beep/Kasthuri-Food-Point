import { useState, useEffect } from 'react';
import { useTrail, animated } from '@react-spring/web';
import { menuAPI } from '../services/api';
import { useCart } from '../context/CartContext';
import './Menu.css';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { addToCart } = useCart();

    useEffect(() => {
        fetchMenuItems();
    }, []);

    const fetchMenuItems = async () => {
        try {
            const response = await menuAPI.getAllItems();
            setMenuItems(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching menu items:', error);
            setLoading(false);
        }
    };

    const categories = ['All', 'Kottu', 'Fried Rice', 'Noodles', 'Pasta', 'Devilled Dish', 'Fried Dish', 'Omelette', 'Family Pack', 'Specials'];

    const filteredItems = selectedCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory);

    const trail = useTrail(filteredItems.length, {
        from: { opacity: 0, transform: 'translateY(40px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 280, friction: 60 },
    });

    const handleAddToCart = (item) => {
        addToCart(item);
    };

    if (loading) {
        return (
            <section className="menu section" id="menu">
                <div className="container">
                    <h2 className="section-title">Our Menu</h2>
                    <div className="loading">Loading delicious food... 🍽️</div>
                </div>
            </section>
        );
    }

    return (
        <section className="menu section" id="menu">
            <div className="container">
                <h2 className="section-title">Our Menu</h2>
                <p className="section-subtitle">Explore our delicious selection of authentic Sri Lankan dishes</p>

                <div className="category-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="menu-grid">
                    {trail.map((style, index) => {
                        const item = filteredItems[index];
                        return (
                            <animated.div key={item.id} style={style} className="menu-item card">
                                <div className="menu-item-image">
                                    <img src={item.imageUrl} alt={item.name} loading="lazy" />
                                    <div className="menu-item-category">{item.category}</div>
                                </div>
                                <div className="menu-item-content">
                                    <h3 className="menu-item-name">{item.name}</h3>
                                    <p className="menu-item-description">{item.description}</p>
                                    <div className="menu-item-footer">
                                        <span className="menu-item-price">Rs.{item.price.toFixed(2)}</span>
                                        <button
                                            className="btn btn-primary add-to-cart-btn"
                                            onClick={() => handleAddToCart(item)}
                                        >
                                            Add to Cart +
                                        </button>
                                    </div>
                                </div>
                            </animated.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Menu;

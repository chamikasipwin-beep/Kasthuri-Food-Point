import { useSpring, animated, useTransition } from '@react-spring/web';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = ({ isOpen, onClose, onCheckout }) => {
    const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

    const slideIn = useSpring({
        transform: isOpen ? 'translateX(0%)' : 'translateX(100%)',
        config: { tension: 300, friction: 30 },
    });

    const backdropSpring = useSpring({
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none',
    });

    const itemTransitions = useTransition(cartItems, {
        keys: item => item.id,
        from: { opacity: 0, transform: 'translateX(50px)' },
        enter: { opacity: 1, transform: 'translateX(0px)' },
        leave: { opacity: 0, transform: 'translateX(-50px)' },
    });

    if (!isOpen && slideIn.transform.get() === 'translateX(100%)') {
        return null;
    }

    return (
        <>
            <animated.div
                className="cart-backdrop"
                style={backdropSpring}
                onClick={onClose}
            />
            <animated.div className="cart-panel" style={slideIn}>
                <div className="cart-header">
                    <h2>Your Cart 🛒</h2>
                    <button className="cart-close" onClick={onClose}>✕</button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="cart-empty">
                            <p>Your cart is empty</p>
                            <p className="cart-empty-subtitle">Add some delicious items!</p>
                        </div>
                    ) : (
                        itemTransitions((style, item) => (
                            <animated.div key={item.id} style={style} className="cart-item">
                                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
                                </div>
                                <div className="cart-item-controls">
                                    <button
                                        className="quantity-btn"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        −
                                    </button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button
                                        className="quantity-btn"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    🗑️
                                </button>
                            </animated.div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total:</span>
                            <span className="total-amount">₹{getTotalPrice().toFixed(2)}</span>
                        </div>
                        <button className="btn btn-primary checkout-btn" onClick={onCheckout}>
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </animated.div>
        </>
    );
};

export default Cart;

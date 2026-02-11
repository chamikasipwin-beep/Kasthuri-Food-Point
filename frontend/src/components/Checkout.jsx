import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useCart } from '../context/CartContext';
import { orderAPI } from '../services/api';
import './Checkout.css';

const Checkout = ({ onSuccess, onBack }) => {
    const { cartItems, getTotalPrice, clearCart } = useCart();
    const [formData, setFormData] = useState({
        customerName: '',
        customerPhone: '',
        customerAddress: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(30px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const orderData = {
                ...formData,
                items: cartItems.map(item => ({
                    menuItemId: item.id,
                    quantity: item.quantity,
                })),
            };

            const response = await orderAPI.createOrder(orderData);
            clearCart();
            onSuccess(response.data);
        } catch (err) {
            setError('Failed to place order. Please try again.');
            console.error('Order error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <animated.div style={fadeIn} className="checkout">
            <div className="container">
                <div className="checkout-content">
                    <button className="back-btn" onClick={onBack}>
                        ← Back to Cart
                    </button>

                    <h2 className="checkout-title">Checkout</h2>

                    <div className="checkout-grid">
                        <div className="checkout-form-section">
                            <form onSubmit={handleSubmit} className="checkout-form">
                                <div className="form-group">
                                    <label htmlFor="customerName">Full Name *</label>
                                    <input
                                        type="text"
                                        id="customerName"
                                        name="customerName"
                                        value={formData.customerName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="customerPhone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="customerPhone"
                                        name="customerPhone"
                                        value={formData.customerPhone}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="customerAddress">Delivery Address *</label>
                                    <textarea
                                        id="customerAddress"
                                        name="customerAddress"
                                        value={formData.customerAddress}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        placeholder="Enter your complete delivery address"
                                    />
                                </div>

                                {error && <div className="error-message">{error}</div>}

                                <button
                                    type="submit"
                                    className="btn btn-primary submit-btn"
                                    disabled={loading}
                                >
                                    {loading ? 'Placing Order...' : `Place Order - Rs.${getTotalPrice().toFixed(2)}`}
                                </button>
                            </form>
                        </div>

                        <div className="order-summary card">
                            <h3>Order Summary</h3>
                            <div className="summary-items">
                                {cartItems.map(item => (
                                    <div key={item.id} className="summary-item">
                                        <span>{item.name} × {item.quantity}</span>
                                        <span>Rs.{(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="summary-total">
                                <span>Total</span>
                                <span className="total-price">Rs.{getTotalPrice().toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    );
};

export default Checkout;

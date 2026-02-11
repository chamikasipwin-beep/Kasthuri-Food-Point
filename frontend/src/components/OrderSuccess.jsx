import { useSpring, animated } from '@react-spring/web';
import './OrderSuccess.css';

const OrderSuccess = ({ order, onBackToHome }) => {
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { tension: 300, friction: 20 },
    });

    const checkmarkSpring = useSpring({
        from: { strokeDashoffset: 100 },
        to: { strokeDashoffset: 0 },
        delay: 300,
        config: { duration: 600 },
    });

    return (
        <div className="order-success">
            <div className="container">
                <animated.div style={fadeIn} className="success-content">
                    <div className="success-icon">
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="var(--primary)" strokeWidth="4" />
                            <animated.path
                                d="M 30 50 L 45 65 L 70 35"
                                fill="none"
                                stroke="var(--primary)"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray="100"
                                style={checkmarkSpring}
                            />
                        </svg>
                    </div>

                    <h1 className="success-title">Order Placed Successfully! 🎉</h1>
                    <p className="success-message">
                        Thank you for your order! We've received it and will start preparing your delicious food right away.
                    </p>

                    <div className="order-details card">
                        <h3>Order Details</h3>
                        <div className="detail-row">
                            <span className="detail-label">Order ID:</span>
                            <span className="detail-value">#{order.id}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Customer Name:</span>
                            <span className="detail-value">{order.customerName}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Phone:</span>
                            <span className="detail-value">{order.customerPhone}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Delivery Address:</span>
                            <span className="detail-value">{order.customerAddress}</span>
                        </div>
                        <div className="detail-row total-row">
                            <span className="detail-label">Total Amount:</span>
                            <span className="detail-value total-amount">Rs.{order.totalAmount.toFixed(2)}</span>
                        </div>
                    </div>

                    <button className="btn btn-primary back-home-btn" onClick={onBackToHome}>
                        Back to Home
                    </button>
                </animated.div>
            </div>
        </div>
    );
};

export default OrderSuccess;

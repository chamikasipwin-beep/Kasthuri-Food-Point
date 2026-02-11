import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSpring, animated } from '@react-spring/web';
import './Auth.css';

const Login = ({ onSwitch, onSuccess }) => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const { login } = useAuth();

    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData.username, formData.password);
            onSuccess();
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <animated.div style={fadeIn} className="auth-card glass">
            <h2>Login</h2>
            {error && <p className="auth-error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
            <p className="auth-switch">
                Don't have an account? <span onClick={onSwitch}>Register here</span>
            </p>
        </animated.div>
    );
};

export default Login;

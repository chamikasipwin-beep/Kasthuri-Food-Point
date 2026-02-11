import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSpring, animated } from '@react-spring/web';
import './Auth.css';

const Register = ({ onSwitch, onSuccess }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        fullName: ''
    });
    const [error, setError] = useState('');
    const { register } = useAuth();

    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            onSuccess();
        } catch (err) {
            setError(err.response?.data || 'Registration failed');
        }
    };

    return (
        <animated.div style={fadeIn} className="auth-card glass">
            <h2>Register</h2>
            {error && <p className="auth-error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                    />
                </div>
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
                    <label>Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                <button type="submit" className="btn btn-primary btn-block">Register</button>
            </form>
            <p className="auth-switch">
                Already have an account? <span onClick={onSwitch}>Login here</span>
            </p>
        </animated.div>
    );
};

export default Register;

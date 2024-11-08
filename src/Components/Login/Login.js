import React, { useState } from 'react';
import { loginUser } from '../../slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import './Login.css';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            toast.error('Please fill out all fields');
            return;
        }

        // Show loading
        setLoading(true);

        // Dispatch login
        dispatch(loginUser({ email, password }))
            .then((response) => {
                setLoading(false);
                if (response.payload.success) {
                    toast.success('Hurray! Login successful! 🎉');

                    const role = response.payload.role;
                    // Navigate based on user role
                    if (role === 'employer') {
                        navigate('/employer/dashboard');  // Redirect employer to job posting page
                    } else if (role === 'job-seeker') {
                        navigate('/home');  // Redirect job-seeker to home or another relevant page
                    }
                } else {
                    toast.error('Login failed. Please check your credentials.');
                }
            })
            .catch((error) => {
                setLoading(false);
                toast.error('Login failed. Please try again.');
            });
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Login to Your Account</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="auth-button"
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} /> : 'Login'}
                    </Button>
                </form>

                <div className="auth-links">
                    <p>
                        Don't have an account? <a href="/signup" className="auth-link">Create Account</a>
                    </p>
                    <p>
                        <a href="/forgot-password" className="auth-link">Forgot Password?</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

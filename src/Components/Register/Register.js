import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'; // Ensure your CSS file is named correctly

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('job-seeker'); // Default role

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ username, email, password, role }))
            .then((response) => {
                if (response.payload.success) {
                    toast.success("Hurray! Registration successful! 🎉");
                    navigate("/login"); // Redirect to login page after successful registration
                } else {
                    toast.error("Registration failed. Please try again.");
                }
            })
            .catch(() => {
                toast.error("Registration failed! Please try again.");
            });
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        style={{ color: "black" }}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        style={{ color: "black" }}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        style={{ color: "black" }}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="auth-input"
                    />

                    {/* Role Selection as Buttons */}
                    <div className="role-selection">
                        <button
                            type="button"
                            onClick={() => setRole('job-seeker')}
                            className={`role-button ${role === 'job-seeker' ? 'active' : ''}`}
                        >
                            I'm looking for job
                        </button>
                        <button
                            type="button"
                            onClick={() => setRole('employer')}
                            className={`role-button ${role === 'employer' ? 'active' : ''}`}
                        >
                            I'm looking to hire
                        </button>
                    </div>

                    <button type="submit" className="auth-button">Register</button>
                </form>

                {/* Already have an account? Link to login */}
                <div className="auth-footer">
                    <p>Already have an account? <a href="/login" className="auth-link">Go to Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../Register/Register.css';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role,setRole] = useState('job-seeker'); // Add role state

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ username, email, password, role })) // Include role in the payload
            .then((response) => {
                if (response.payload.success) {
                    toast.success("Hurray! Registration successful! 🎉");
                    navigate("/login"); // Redirect to login page
                } else {
                    toast.error("Registration failed. Please try again.");
                }
            })
            .catch((error) => {
                toast.error("Registration failed! Please try again."); // Error toast
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
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="auth-input"
                    />
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

                    {/* Role Selection */}
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        className="auth-input"
                    >
                        <option value="job-seeker">Job Seeker</option>
                        <option value="employer">Employer</option>
                    </select>

                    <button type="submit" className="auth-button">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;

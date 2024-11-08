import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
<<<<<<< HEAD

import '../Register/Register.css';
=======
import './Register.css'; // Ensure your CSS file is named correctly
>>>>>>> 15dada6 (Initial commit after reinitializing repository)

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
<<<<<<< HEAD
    const [role,setRole] = useState('job-seeker'); // Add role state

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ username, email, password, role })) // Include role in the payload
            .then((response) => {
                if (response.payload.success) {
                    toast.success("Hurray! Registration successful! 🎉");
                    navigate("/login"); // Redirect to login page
=======
    const [role, setRole] = useState('job-seeker'); // Default role

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ username, email, password, role }))
            .then((response) => {
                if (response.payload.success) {
                    toast.success("Hurray! Registration successful! 🎉");
                    navigate("/login"); // Redirect to login page after successful registration
>>>>>>> 15dada6 (Initial commit after reinitializing repository)
                } else {
                    toast.error("Registration failed. Please try again.");
                }
            })
<<<<<<< HEAD
            .catch((error) => {
                toast.error("Registration failed! Please try again."); // Error toast
=======
            .catch(() => {
                toast.error("Registration failed! Please try again.");
>>>>>>> 15dada6 (Initial commit after reinitializing repository)
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
<<<<<<< HEAD
=======
                        style={{ color: "black" }}
>>>>>>> 15dada6 (Initial commit after reinitializing repository)
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
<<<<<<< HEAD
=======
                        style={{ color: "black" }}
>>>>>>> 15dada6 (Initial commit after reinitializing repository)
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
<<<<<<< HEAD
=======
                        style={{ color: "black" }}
>>>>>>> 15dada6 (Initial commit after reinitializing repository)
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="auth-input"
                    />

<<<<<<< HEAD
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
=======
                    {/* Role Selection as Buttons */}
                    <div className="role-selection">
                        <button
                            type="button"
                            onClick={() => setRole('job-seeker')}
                            className={`role-button ${role === 'job-seeker' ? 'active' : ''}`}
                        >
                            Job Seeker
                        </button>
                        <button
                            type="button"
                            onClick={() => setRole('employer')}
                            className={`role-button ${role === 'employer' ? 'active' : ''}`}
                        >
                            Employer
                        </button>
                    </div>

                    <button type="submit" className="auth-button">Register</button>
                </form>

                {/* Already have an account? Link to login */}
                <div className="auth-footer">
                    <p>Already have an account? <a href="/login" className="auth-link">Go to Login</a></p>
                </div>
>>>>>>> 15dada6 (Initial commit after reinitializing repository)
            </div>
        </div>
    );
};

export default Register;

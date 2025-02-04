import React, { useState } from "react";
import { loginUser } from "../../slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import loginimg from '../../assets/Loginpage.png'; // Your imported image

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill out all fields");
      return;
    }

    setLoading(true);

    dispatch(loginUser({ email, password }))
      .then((response) => {
        setLoading(false);
        if (response.payload.success) {
          toast.success("Hurray! Login successful! 🎉");
          navigate(response.payload.role === "employer" ? "/employer/dashboard" : "/home");
        } else {
          toast.error("Login failed. Please check your credentials.");
        }
      })
      .catch(() => {
        setLoading(false);
        toast.error("Login failed. Please try again.");
      });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left side with Login form */}
      <div className="w-full sm:w-1/2 bg-white flex justify-center items-center relative p-6 sm:p-8">
        <IconButton
          onClick={() => navigate("/")}
          className="absolute top-3 right-3"
        >
          <CloseIcon />
        </IconButton>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5 w-full sm:w-3/4">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Login to Your Account
          </h2>
          <TextField
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={loading}
            className="py-2"
          >
            {loading ? <CircularProgress size={24} /> : "Login"}
          </Button>
        </form>
      </div>

      {/* Image Section with the imported loginimg */}
      <div
        className="hidden sm:block w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${loginimg})`, // Use the imported image here
        }}
      />
    </div>
  );
};

export default Login;

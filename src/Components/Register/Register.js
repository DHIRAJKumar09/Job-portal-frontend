import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import registerpage from '../../assets/Loginpage.png'

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("job-seeker");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ username, email, password, role }))
      .then((response) => {
        if (response.payload.success) {
          toast.success("🎉 Registration Successful!");
          navigate("/login");
        } else {
          toast.error("Registration failed. Please try again.");
        }
      })
      .catch(() => {
        toast.error("Registration failed! Please try again.");
      });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/2 bg-white flex justify-center items-center relative">
        <IconButton
          onClick={() => navigate("/")}
          className="absolute top-3 right-3"
        >
          <CloseIcon />
        </IconButton>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-5 w-3/4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Create an Account
          </h2>
          <TextField
            label="Username"
            type="text"
            fullWidth
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <div className="flex justify-between gap-4">
            <Button
              variant={role === "job-seeker" ? "contained" : "outlined"}
              color="primary"
              fullWidth
              className="p-3 rounded-lg"
              onClick={() => setRole("job-seeker")}
            >
              Looking for Job
            </Button>
            <Button
              variant={role === "employer" ? "contained" : "outlined"}
              color="secondary"
              fullWidth
              className="p-3 rounded-lg"
              onClick={() => setRole("employer")}
            >
              Hiring Talent
            </Button>
          </div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className="p-3 text-lg"
          >
            Register
          </Button>
        </form>
      </div>

      {/* Image Section */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${registerpage})`,
        }}
      />
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import BusinessIcon from "@mui/icons-material/Business";
import PostAddIcon from "@mui/icons-material/PostAdd";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.auth.role); // Get user role from Redux
  const token = useSelector((state) => state.auth.token); // Get token from Redux

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // Redirect to login page after logout
  };

  const renderJobSeekerMenu = () => (
    <>
      <IconButton color="inherit" onClick={() => navigate("/jobseeker/dashboard")}>
        <HomeIcon />
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/jobseeker/job-listings")}>
        <WorkIcon />
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/jobseeker/applied-jobs")}>
        <BookmarksIcon />
      </IconButton>
      <IconButton color="inherit" onClick={handleProfileMenuOpen}>
        <AccountCircle />
      </IconButton>
    </>
  );

  const renderEmployerMenu = () => (
    <>
      <IconButton color="inherit" onClick={() => navigate("/employer/dashboard")}>
        <DashboardIcon />
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/jobs")}>
        <WorkIcon />
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/applicants")}>
        <PeopleIcon />
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/settings/account")}>
        <SettingsIcon />
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/post-job")}>
        <PostAddIcon />
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/company-profile")}>
        <BusinessIcon />
      </IconButton>
      <IconButton color="inherit" onClick={handleProfileMenuOpen}>
        <AccountCircle />
      </IconButton>
    </>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" onClick={() => navigate("/")}>
            MyApp
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {token && (userRole === "job-seeker" ? renderJobSeekerMenu() : renderEmployerMenu())}
        </Toolbar>
      </AppBar>
      {/* Drawer for mobile view */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button onClick={() => navigate("/")}>
              <ListItemText primary="Home" />
            </ListItem>
            {userRole === "job-seeker" && (
              <>
                <ListItem button onClick={() => navigate("/jobseeker/job-listings")}>
                  <ListItemText primary="Jobs" />
                </ListItem>
                <ListItem button onClick={() => navigate("/jobseeker/applied-jobs")}>
                  <ListItemText primary="Applied Jobs" />
                </ListItem>
              </>
            )}
            {userRole === "employer" && (
              <>
                <ListItem button onClick={() => navigate("/employer/dashboard")}>
                  <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button onClick={() => navigate("/employer/jobs")}>
                  <ListItemText primary="My Job Posts" />
                </ListItem>
                <ListItem button onClick={() => navigate("/employer/post-job")}>
                  <ListItemText primary="Create Job Post" />
                </ListItem>
              </>
            )}
            <ListItem button onClick={handleProfileMenuOpen}>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {/* Profile Dropdown Menu */}
      {token && (
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleProfileMenuClose}>
          <MenuItem onClick={() => navigate("/jobseeker/profile")}>Profile</MenuItem>
          <MenuItem onClick={() => navigate("/edit-profile")}>Edit Profile Settings</MenuItem>
          <MenuItem onClick={() => navigate("/notifications")}>Notifications</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      )}
      {/* Spacer to prevent content from being hidden behind the fixed navbar */}
      <Box sx={{ height: "64px" }} />
    </>
  );
};

export default Navbar;

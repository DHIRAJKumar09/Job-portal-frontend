import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Badge,
  Divider,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  Business as BusinessIcon,
  PostAdd as PostAddIcon,
  Bookmarks as BookmarksIcon,
  Menu as MenuIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  AccountCircle,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.auth.role);
  const token = useSelector((state) => state.auth.token);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const newJobsCount = 3; // Example count of new jobs
  const appliedJobsCount = 5; // Example count of applied jobs

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleProfileMenuClose = () => setAnchorEl(null);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const renderJobSeekerMenu = () => (
    <>
      <IconButton color="inherit" onClick={() => navigate("/jobseeker/dashboard")} className="hover:text-blue-400">
        <Badge color="secondary" badgeContent={newJobsCount}>
          <HomeIcon />
        </Badge>
        <Typography variant="caption" className="ml-2">Home</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/jobseeker/job-listings")} className="hover:text-blue-400">
        <Badge color="secondary" badgeContent={newJobsCount}>
          <WorkIcon />
        </Badge>
        <Typography variant="caption" className="ml-2">Jobs</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/jobseeker/applied-jobs")} className="hover:text-blue-400">
        <Badge color="primary" badgeContent={appliedJobsCount}>
          <BookmarksIcon />
        </Badge>
        <Typography variant="caption" className="ml-2">Applied Jobs</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={handleProfileMenuOpen} className="hover:text-blue-400">
        <AccountCircle />
        <Typography variant="caption" className="ml-2">Profile</Typography>
      </IconButton>
    </>
  );

  const renderEmployerMenu = () => (
    <>
      <IconButton color="inherit" onClick={() => navigate("/employer/dashboard")} className="hover:text-blue-400">
        <DashboardIcon />
        <Typography variant="caption" className="ml-2">Dashboard</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/jobs")} className="hover:text-blue-400">
        <Badge color="secondary" badgeContent={newJobsCount}>
          <WorkIcon />
        </Badge>
        <Typography variant="caption" className="ml-2">My Jobs</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/applicants")} className="hover:text-blue-400">
        <PeopleIcon />
        <Typography variant="caption" className="ml-2">Applicants</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/settings/account")} className="hover:text-blue-400">
        <SettingsIcon />
        <Typography variant="caption" className="ml-2">Settings</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/post-job")} className="hover:text-blue-400">
        <PostAddIcon />
        <Typography variant="caption" className="ml-2">Post Job</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/company-profile")} className="hover:text-blue-400">
        <BusinessIcon />
        <Typography variant="caption" className="ml-2">Profile</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={handleProfileMenuOpen} className="hover:text-blue-400">
        <AccountCircle />
        <Typography variant="caption" className="ml-2">Profile</Typography>
      </IconButton>
    </>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'gray', backdropFilter: 'blur(10px)' }} className="shadow-lg">
        <Toolbar className="flex justify-between items-center">
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} sx={{ display: { sm: 'none', md: 'block' } }} className="hover:text-blue-400">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" onClick={() => navigate("/")}>
            <span className="text-2xl font-bold text-white hover:text-blue-400">MyApp</span>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {token && (userRole === "job-seeker" ? renderJobSeekerMenu() : renderEmployerMenu())}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} className="bg-gray-800 text-white">
          <List>
            <ListItem button onClick={() => navigate("/")} className="hover:bg-gray-600">
              <ListItemText primary="Home" />
            </ListItem>
            {userRole === "job-seeker" && (
              <>
                <ListItem button onClick={() => navigate("/jobseeker/job-listings")} className="hover:bg-gray-600">
                  <ListItemText primary="Jobs" />
                </ListItem>
                <ListItem button onClick={() => navigate("/jobseeker/applied-jobs")} className="hover:bg-gray-600">
                  <ListItemText primary="Applied Jobs" />
                </ListItem>
              </>
            )}
            {userRole === "employer" && (
              <>
                <ListItem button onClick={() => navigate("/employer/dashboard")} className="hover:bg-gray-600">
                  <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button onClick={() => navigate("/employer/jobs")} className="hover:bg-gray-600">
                  <ListItemText primary="My Job Posts" />
                </ListItem>
                <ListItem button onClick={() => navigate("/employer/post-job")} className="hover:bg-gray-600">
                  <ListItemText primary="Create Job Post" />
                </ListItem>
              </>
            )}
            <Divider className="my-2" />
            <ListItem button onClick={handleProfileMenuOpen} className="hover:bg-gray-600">
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {token && (
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleProfileMenuClose}>
          <MenuItem onClick={() => navigate("/jobseeker/profile")}>Profile</MenuItem>
          <MenuItem onClick={() => navigate("/edit-profile")}>Edit Profile Settings</MenuItem>
          <MenuItem onClick={() => navigate("/notifications")}>Notifications</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      )}
      <Box sx={{ height: "64px" }} />
    </>
  );
};

export default Navbar;

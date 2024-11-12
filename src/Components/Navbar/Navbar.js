import React, { useState } from "react";
import {
  AppBar, Toolbar, Typography, IconButton, Box, Drawer,
  List, ListItem, ListItemText, Menu, MenuItem, Badge,
} from "@mui/material";
import {
  Dashboard as DashboardIcon, People as PeopleIcon, Settings as SettingsIcon,
  Business as BusinessIcon, PostAdd as PostAddIcon, Bookmarks as BookmarksIcon,
  Menu as MenuIcon, Home as HomeIcon, Work as WorkIcon, AccountCircle,
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
      <IconButton color="inherit" onClick={() => navigate("/jobseeker/dashboard")}>
        <Badge color="secondary" badgeContent={newJobsCount}>
          <HomeIcon />
        </Badge>
        <Typography variant="caption">Home</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/jobseeker/job-listings")}>
        <Badge color="secondary" badgeContent={newJobsCount}>
          <WorkIcon />
        </Badge>
        <Typography variant="caption">Jobs</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/jobseeker/applied-jobs")}>
        <Badge color="primary" badgeContent={appliedJobsCount}>
          <BookmarksIcon />
        </Badge>
        <Typography variant="caption">Applied Jobs</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={handleProfileMenuOpen}>
        <AccountCircle />
        <Typography variant="caption">Profile</Typography>
      </IconButton>
    </>
  );

  const renderEmployerMenu = () => (
    <>
      <IconButton color="inherit" onClick={() => navigate("/employer/dashboard")}>
        <DashboardIcon />
        <Typography variant="caption">Dashboard</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/jobs")}>
        <Badge color="secondary" badgeContent={newJobsCount}>
          <WorkIcon />
        </Badge>
        <Typography variant="caption">My Jobs</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/applicants")}>
        <PeopleIcon />
        <Typography variant="caption">Applicants</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/settings/account")}>
        <SettingsIcon />
        <Typography variant="caption">Settings</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/post-job")}>
        <PostAddIcon />
        <Typography variant="caption">Post Job</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate("/employer/company-profile")}>
        <BusinessIcon />
        <Typography variant="caption">Profile</Typography>
      </IconButton>
      <IconButton color="inherit" onClick={handleProfileMenuOpen}>
        <AccountCircle />
        <Typography variant="caption">Profile</Typography>
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
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
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

// src/components/Sidebar.js
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Drawer, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Home, Dashboard, Settings, ExitToApp } from '@mui/icons-material';
import { useState } from 'react';

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setOpen(open);
    };

    const sidebarItems = [
        { text: 'Home', icon: <Home /> },
        { text: 'Dashboard', icon: <Dashboard /> },
        { text: 'Settings', icon: <Settings /> },
        { text: 'Logout', icon: <ExitToApp /> },
    ];

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                        <span>☰</span> {/* You can replace this with an actual icon */}
                    </IconButton>
                    <Typography variant="h6">My Application</Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <List>
                    {sidebarItems.map((item, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Sidebar;

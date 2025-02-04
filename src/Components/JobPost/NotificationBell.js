import React, { useState } from 'react';
import { IconButton, Popover, Typography, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

const NotificationBell = () => {
  const [anchorEl, setAnchorEl] = useState(null); // For popover positioning
  const [notifications] = useState([
    { id: 1, message: 'New job application received for Software Engineer.' },
    { id: 2, message: 'New message from applicant John Doe.' },
    { id: 3, message: 'Your job listing has been approved.' },
  ]);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the popover when bell is clicked
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the popover when clicked outside
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleNotificationClick = (notification) => {
    // Handle what happens when a notification is clicked
    navigate('/applicant-details'); // Example: navigate to a job/applicant detail page
  };

  return (
    <div>
      {/* Badge on Bell Icon for unread notifications */}
      <IconButton aria-describedby={id} onClick={handleClick}>
        <Badge badgeContent={notifications.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      {/* Popover for notifications */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ width: '300px' }} // Adjust popover width
      >
        <Typography sx={{ padding: 2, fontWeight: 'bold' }}>Notifications</Typography>
        {notifications.length === 0 ? (
          <Typography sx={{ padding: 2, color: 'gray' }}>No new notifications.</Typography>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => handleNotificationClick(notification)}
              style={{
                padding: '10px',
                borderBottom: '1px solid #eee',
                cursor: 'pointer',
              }}
            >
              <Typography variant="body2">{notification.message}</Typography>
            </div>
          ))
        )}
      </Popover>
    </div>
  );
};

export default NotificationBell;

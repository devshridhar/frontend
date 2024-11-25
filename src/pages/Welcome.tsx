import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <Box textAlign="center" mt={5}>
            <Typography variant="h4" gutterBottom>
                Welcome to the application
            </Typography>
            <Button variant="contained" color="primary" onClick={handleLogout}>
                Logout
            </Button>
        </Box>
    );
};

export default Welcome;

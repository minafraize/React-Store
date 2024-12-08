import React from 'react';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import CustomButton from '../components/ui/button';
import notFoundStyle from '../styles/notFoundStyle';

// ----------------------------------------------------------------------

const useStyles = makeStyles(notFoundStyle);

const NotFound = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Box className={classes.root}>
            <Typography variant="h1" className={classes.errorCode}>
                404
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
                Oops! The page you're looking for doesn't exist.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
                It seems you may have taken a wrong turn. Don't worry, it happens to the best of us.
            </Typography>
            <CustomButton
                label='Back to Home'
                onClick={() => navigate('/')}
            />
        </Box>
    );
};

export default NotFound;

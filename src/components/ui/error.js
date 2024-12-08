import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';

import errorStyle from '../../styles/errorStyle';

// ----------------------------------------------------------------------

const useStyles = makeStyles(errorStyle);

const Error = ({ message }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography
                variant="h4"
                color="error"
                sx={{ fontWeight: 'bold' }}
            >
                Something Went Wrong!
            </Typography>
            <Typography
                variant="body1"
                sx={{ mt: 2, color: 'text.secondary' }}
            >
                {message || 'An unexpected error occurred. Please try again later.'}
            </Typography>

        </Box>
    );
};

export default Error;

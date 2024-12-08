import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, CircularProgress, Typography } from '@mui/material';

import loadingStyle from '../../styles/loadingStyle';

// ----------------------------------------------------------------------

const useStyles = makeStyles(loadingStyle);

const Loading = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <CircularProgress size={60} color="primary" />
            <Typography variant="h6" sx={{ mt: 2 }}>
                Loading...
            </Typography>
        </Box>
    );
};

export default Loading;

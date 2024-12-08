import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import CustomButton from './button';

// ----------------------------------------------------------------------

const EmptyContent = ({ title, message }) => {
    const navigate = useNavigate();

    return (
        <Box sx={{
            px: 2,
            mt: 10,
            textAlign: 'center',
        }}>
            <Typography
                variant="h4"
                sx={{ mt: 2 }}
            >
                {title || "Product Not Found"}
            </Typography>
            <Typography
                variant="body1"
                sx={{ mt: 2, color: 'text.secondary' }}
            >
                {
                    message
                    || "We're sorry, the product you're looking for is no longer available or doesn't exist."
                }
            </Typography>
            <CustomButton
                label='Back to Home'
                onClick={() => navigate('/')}
            />
        </Box>
    );
};

export default EmptyContent;

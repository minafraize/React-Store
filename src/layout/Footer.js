import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'primary.main',
      }}
    >
      <Typography variant="body1">© 2024 Store</Typography>
      <Typography variant="body2">All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;

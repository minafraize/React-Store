import { Badge } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import headerStyle from '../styles/headerStyle';
import { CartContext } from '../contexts/CartContext';

// ----------------------------------------------------------------------

const useStyles = makeStyles(headerStyle);

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const { cart } = useContext(CartContext);

    return (
        <AppBar
            color="primary"
            position="static"
            className={classes.root}
        >
            <Toolbar>
                <Badge
                    color="secondary"
                    badgeContent={cart.items.length}
                    className={classes.cartItemsNum}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        onClick={() => navigate('/cart')}
                    >
                        Cart
                    </Typography>
                </Badge>
                <Typography
                    variant="h6"
                    component="div"
                    onClick={() => navigate('/')}
                >
                    Store
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

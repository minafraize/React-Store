import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

import CustomButton from "../ui/button";
import cartStyle from "../../styles/cartStyle";
import { CartContext } from "../../contexts/CartContext";

// ----------------------------------------------------------------------

const useStyles = makeStyles(cartStyle);

const CartTotals = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const { cart, clearCart } = useContext(CartContext);

    const calculateTotal = () => {
        return cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <Box className={classes.orderSummary}>
            <Typography
                variant="body1"
                className={classes.orderSummaryTitle}
            >
                Order summary
            </Typography>
            <Box className={`${classes.flex} ${classes.orderTotal}`}>
                <Typography variant="body2">
                    Total:
                </Typography>
                <Typography variant="body1">
                    {calculateTotal()}
                </Typography>
            </Box>
            <CustomButton
                label='Continue Shopping'
                onClick={() => navigate('/')}
            />
            <Button
                color="error"
                onClick={clearCart}
                className={classes.clearCartBtn}
            >
                Clear Cart
            </Button>
        </Box>
    );
};

export default CartTotals;

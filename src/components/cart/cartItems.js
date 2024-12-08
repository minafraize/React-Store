import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

import Input from "../ui/input";
import cartStyle from "../../styles/cartStyle";
import { CartContext } from "../../contexts/CartContext";
import { handleRedirectToProductDetails, handleProductQuantityChange } from "../../utils/helper";

// ----------------------------------------------------------------------

const useStyles = makeStyles(cartStyle);

const CartItems = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

    const productQuantityChange = (e, item) => {
        handleProductQuantityChange(e, item, updateQuantity);
    };

    return (
        <Box className={classes.root}>
            {cart.items.map((item) => (
                <Box className={`${classes.flex} ${classes.cartItem}`} key={item.id}>
                    <Box className={classes.itemInfo}>
                        <Box
                            component="img"
                            alt={item.title}
                            src={item.image}
                            className={classes.itemImg}
                            onClick={() => handleRedirectToProductDetails(navigate, item)}
                        />
                        <Box>
                            <Typography
                                variant="body1"
                                className={classes.itemTitle}
                                onClick={() => handleRedirectToProductDetails(navigate, item)}

                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                className={classes.itemCategory}
                            >
                                {item.category}
                            </Typography>
                        </Box>
                    </Box>
                    <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => productQuantityChange(e, item)}
                    />
                    <Typography
                        variant="body1"
                        className={classes.itemPrice}
                    >
                        ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                    <Button
                        color="error"
                        onClick={() => removeFromCart(item.id)}
                    >
                        Remove
                    </Button>
                </Box>
            ))}
        </Box>
    );
};

export default CartItems;

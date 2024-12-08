import React, { useContext } from "react";
import { Container, Grid2, Typography } from "@mui/material";

import CartItems from "./cartItems";
import CartTotals from "./cartTotals";
import EmptyContent from "../ui/emptyContent";
import { CartContext } from "../../contexts/CartContext";

// ----------------------------------------------------------------------

const CartContainer = () => {
    const { cart } = useContext(CartContext);

    if (cart.items.length === 0)
        return <EmptyContent
            title="Your cart is empty!"
            message="OoOPS, Your cart is empty!"
        />;

    return (
        <Container>
            <Typography variant="h5">Your Cart</Typography>
            <Grid2 container spacing={3}>
                <Grid2 size={{ xs: 12, lg: 9 }}>
                    <CartItems />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 3 }}>
                    <CartTotals />
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default CartContainer;

import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import React, { useContext, useState } from "react";

import Input from "../ui/input";
import CustomButton from "../ui/button";
import { CartContext } from "../../contexts/CartContext";
import productDetailsStyle from "../../styles/productDetailsStyle";
import { handleProductQuantityChange } from "../../utils/helper";

// ----------------------------------------------------------------------

const useStyles = makeStyles(productDetailsStyle);

const ProductInfo = ({ product }) => {
    const classes = useStyles();

    const { addToCart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);

    const productQuantityChange = (e) => {
        handleProductQuantityChange(e, product, (_, value) => setQuantity(value));
    };

    return (
        <Box className={classes.productInfoContainer}>
            <Typography
                variant="h4"
                className={classes.productTitle}
            >
                {product.title}
            </Typography>
            <Typography
                variant="body2"
                className={classes.productDescription}
            >
                {product.description}
            </Typography>
            <Box sx={{ my: 2 }}>
                <Typography
                    variant="body2"
                    className={classes.productInfo}
                >
                    Rate: {product.rating.rate}
                </Typography>
                <Typography
                    variant="body2"
                    className={classes.productInfo}
                >
                    Availability: {product.rating.count}
                </Typography>
                <Typography
                    variant="body2"
                    className={classes.productInfo}
                >
                    Product type: {product.category}
                </Typography>
            </Box>
            <Typography
                variant="h5"
                className={classes.productPrice}
            >
                ${product.price.toFixed(2)}
            </Typography>
            <Box>
                <Input
                    type="number"
                    value={quantity}
                    onChange={productQuantityChange}
                />
                <Typography
                    variant="body2"
                    className={classes.subtotal}
                >
                    Subtotal: ${(product.price * quantity).toFixed(2)}
                </Typography>
            </Box>
            <CustomButton onClick={() => addToCart(product, quantity)} />
        </Box>
    );
};

export default ProductInfo;

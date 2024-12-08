import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

import CustomButton from "../ui/button";
import { CartContext } from "../../contexts/CartContext";
import productCardStyle from "../../styles/productCardStyle";
import { handleRedirectToProductDetails } from "../../utils/helper";

// ----------------------------------------------------------------------

const useStyles = makeStyles(productCardStyle);

const ProductCard = ({ product }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const { addToCart } = useContext(CartContext);

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt={product.title}
                image={product.image}
                onClick={() => handleRedirectToProductDetails(navigate, product)}
            />
            <CardContent>
                <Typography
                    variant="body1"
                    onClick={() => handleRedirectToProductDetails(navigate, product)}
                    className={`${classes.productLabel} ${classes.productTitle}`}
                >
                    {product.title}
                </Typography>
                <Typography
                    variant="body2"
                    className={classes.productCategory}
                >
                    ${product.category}
                </Typography>
                <Typography
                    variant="body2"
                    className={classes.productLabel}
                >
                    ${product.price.toFixed(2)}
                </Typography>
                <CustomButton onClick={() => addToCart(product, 1)} />
            </CardContent>
        </Card>
    );
};

export default ProductCard;

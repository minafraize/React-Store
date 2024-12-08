import React from "react";
import { Box } from "@mui/material";;

// ----------------------------------------------------------------------

const ProductImg = ({ product }) => {
    return (
        <Box
            component="img"
            sx={{
                width: '100%',
                maxHeight: 'auto',
            }}
            alt={product.title}
            src={product.image}
        />
    );
};

export default ProductImg;

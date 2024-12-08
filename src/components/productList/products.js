import { Grid2 } from "@mui/material";
import React, { useContext } from "react";

import ProductCard from "./productCard";
import { ProductContext } from "../../contexts/ProductContext";

// ----------------------------------------------------------------------

const Products = () => {
    const { products } = useContext(ProductContext);

    return (
        <Grid2 container spacing={3}>
            {products.map((product) => (
                <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
                    <ProductCard product={product} />
                </Grid2>
            ))}
        </Grid2>
    );
};

export default Products;

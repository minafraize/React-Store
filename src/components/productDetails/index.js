import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Grid2, Container } from "@mui/material";

import ProductImg from "./productImg";
import ProductInfo from "./productInfo";
import EmptyContent from "../ui/emptyContent";
import { ProductContext } from "../../contexts/ProductContext";

// ----------------------------------------------------------------------

const ProductDetailsContainer = () => {
    const { id } = useParams();

    const { products } = useContext(ProductContext);

    // Get Selected Product
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) return <EmptyContent />;

    return (
        <Container>
            <Grid2 container spacing={3}>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <ProductImg product={product} />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <ProductInfo product={product} />
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default ProductDetailsContainer;

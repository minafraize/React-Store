import React, { useContext } from "react";
import { Container } from "@mui/material";

import Error from "../ui/error";
import Products from "./products";
import Loading from "../ui/loading";
import { ProductContext } from "../../contexts/ProductContext";

// ----------------------------------------------------------------------

const ProductListContainer = () => {
    const { loading, error } = useContext(ProductContext);

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    return (
        <Container>
            <Products />
        </Container>
    );
};

export default ProductListContainer;

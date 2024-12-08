import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";

// ----------------------------------------------------------------------

const MainLayout = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
            }}
        >
            <Router>
                <Header />
                <Box sx={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Box>
                <Footer />
            </Router>
        </Box>
    );
}

export default MainLayout;

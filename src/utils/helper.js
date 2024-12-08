export const handleRedirectToProductDetails = (navigate, item) => {
    navigate(`/product/${item.id}`)
};

export const handleProductQuantityChange = (e, item, updateFn) => {
    const { value } = e.target;
    if (value > 0 && value <= item.rating.count) {
        updateFn(item.id, parseInt(value));
    }
};

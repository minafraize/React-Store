const productDetailsStyle = (theme) => ({
  productInfoContainer: {
    padding: theme.spacing(4, 0, 3, 7),
    "@media (max-width: 899px)": {
      padding: theme.spacing(4, 0, 3, 0),
    }
  },
  productTitle: {
    lineHeight: '1.3 !important',
    fontWeight: '600 !important',
    color: theme.palette.primary.dark,
    marginBottom: `${theme.spacing(2)} !important`,
  },
  productDescription: {
    color: theme.palette.primary.light,
  },
  productInfo: {
    color: theme.palette.primary.main,
    marginBottom: `${theme.spacing(0.75)} !important`,
  },
  productPrice: {
    fontWeight: '600 !important',
    color: theme.palette.primary.dark,
    marginBottom: `${theme.spacing(2)} !important`,
  },
  subtotal: {
    display: 'block',
    marginTop: `${theme.spacing(1)} !important`,
  },
});

export default productDetailsStyle;
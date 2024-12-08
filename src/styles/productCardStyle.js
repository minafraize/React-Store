const productCardStyle = (theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    '& img': {
      height: 200,
      cursor: 'pointer',
    }
  },
  productTitle: {
    maxWidth: '100%',
    cursor: 'pointer',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    verticalAlign: 'bottom',
    textOverflow: 'ellipsis',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  productCategory: {
    color: theme.palette.primary.light,
    marginBottom: `${theme.spacing(1)} !important`,
  },
  productLabel: {
    color: theme.palette.primary.main,
  },
});

export default productCardStyle;
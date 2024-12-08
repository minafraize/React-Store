const headerStyle = (theme) => ({
  root: {
    boxShadow: 'none !important',
    marginBottom: theme.spacing(3),
    '& .MuiToolbar-root': {
      justifyContent: 'space-between'
    },
    '& .MuiTypography-h6': {
      cursor: 'pointer',
      textTransform: 'uppercase',
    },
  },
  cartItemsNum: {
    "& .MuiBadge-badge": {
      fontSize: "1rem",
      borderRadius: "50%",
      height: theme.spacing(3),
      minWidth: theme.spacing(3),
    },
  },
});

export default headerStyle;
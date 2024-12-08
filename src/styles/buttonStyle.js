const buttonStyle = (theme) => ({
  button: {
    border: '1px solid !important',
    minWidth: '300px !important',
    fontWeight: '600 !important',
    boxShadow: 'none !important',
    padding: theme.spacing(1.5, 2),
    marginTop: `${theme.spacing(2)} !important`,
    backgroundColor: theme.palette.primary.dark,
    '&:hover': {
      boxShadow: 'none !important',
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.grey[0],
      borderColor: theme.palette.primary.dark,
    }
  },
});

export default buttonStyle;
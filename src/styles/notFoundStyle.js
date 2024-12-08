const notFoundStyle = (theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    marginTop: theme.spacing(1.25),
  },
  errorCode: {
    fontSize: '6rem !important',
    fontWeight: 'bold !important',
    color: theme.palette.primary.main,
  },
});

export default notFoundStyle;
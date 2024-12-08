const cartStyle = (theme) => ({
    root: {
        marginTop: theme.spacing(2),
        border: `1px solid ${theme.palette.grey[500_1]}`,
        '& img': {
            cursor: 'pointer',
        }
    },
    cartItem: {
        padding: theme.spacing(2, 0.5),
    },
    itemInfo: {
        width: '50%',
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 2),
    },
    itemImg: {
        width: 90,
        height: 'auto',
        paddingRight: theme.spacing(1.5),
    },
    itemTitle: {
        cursor: 'pointer',
        color: theme.palette.primary.main,
        marginBottom: `${theme.spacing(1)} !important`,
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    itemCategory: {
        color: theme.palette.primary.light,
    },
    itemPrice: {
        fontWeight: '600 !important'
    },
    orderSummary: {
        marginTop: `${theme.spacing(2)} !important`
    },
    orderSummaryTitle: {
        textTransform: 'capitalize',
        fontWeight: '600 !important',
        paddingBottom: theme.spacing(1.25),
        marginBottom: `${theme.spacing(2.5)} !important`,
        borderBottom: `2px solid ${theme.palette.primary.dark}`,
    },
    orderTotal: {
        '& p': {
            fontWeight: '600 !important',
        }
    },
    clearCartBtn: {
        minWidth: '300px !important',
        fontWeight: '600 !important',
        margin: `${theme.spacing(2, 0)} !important`,
    },
    flex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export default cartStyle;
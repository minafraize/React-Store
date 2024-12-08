import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import buttonStyle from "../../styles/buttonStyle";

// ----------------------------------------------------------------------

const useStyles = makeStyles(buttonStyle);

const CustomButton = ({ onClick, label }) => {
    const classes = useStyles();

    return (
        <Button
            onClick={onClick}
            variant="contained"
            className={classes.button}
        >
            {label || 'Add to Cart'}
        </Button>
    );
};

export default CustomButton;

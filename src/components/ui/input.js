import React from "react";
import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";

import inputStyle from "../../styles/inputStyle";

// ----------------------------------------------------------------------

const useStyles = makeStyles(inputStyle);

const Input = ({ value, type, onChange }) => {
    const classes = useStyles();

    return (
        <TextField
            type={type}
            value={value}
            onChange={onChange}
            className={classes.inputField}
        />
    );
};

export default Input;

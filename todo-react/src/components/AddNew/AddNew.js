import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles()

export default function AddNew() {
    const classes = useStyles;
    return(
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Enter a new item" />
        </form>
    )
}
import React from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  fieldContainer: {
    margin: '5px 0 5px 0',
  },
  field: {
    margin: '5px 0 5px 0',
  }
}));

function FormField({ id, label, value, handleChange }) {
  const classes = useStyles();

  return (
    <Grid container item className={classes.fieldContainer} direction="column" spacing={3}>
      <InputLabel className={classes.field} htmlFor={id}>
        {label}
      </InputLabel>
      <TextField
        value={value}
        onChange={({ target: { value } }) => handleChange(value)}
        className={classes.field}
        id={id}
        variant="outlined" />
    </Grid>
  );
}

export default FormField;

import React from "react";
import Grid from "@material-ui/core/Grid";
import AddForm from "./addForm/AddForm";
import AddTitle from "./addForm/components/AddTitle";

const AddNewCard = () => (
  <Grid container item direction="column">
    <AddTitle />
    <AddForm />
  </Grid>
);

export default AddNewCard;

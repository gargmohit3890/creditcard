import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AddButton from "./components/AddButton";
import Name from "./components/Name";
import CardNumber from "./components/CardNumber";
import CardLimit from "./components/CardLimit";

const useStyles = makeStyles(() => ({
  root: {
    padding: '10px 0 10px 0'
  }
}));

const AddForm = () => (
  <Grid
    container
    item
    direction="column"
    className={useStyles().root}
    xs={12} sm={5} md={4} lg={3} xl={3}>
    <Name />
    <CardNumber />
    <CardLimit />
    <AddButton />
  </Grid>
)

export default AddForm;

import React from "react";
import Grid from "@material-ui/core/Grid";
import ViewTable from "./table/ViewTable";
import ViewTitle from "./ViewTitle";

const ViewAllCards = () => (
  <Grid
    container
    item
    spacing={2}
    direction="row">
    <ViewTitle />
    <ViewTable />
  </Grid>
);

export default ViewAllCards;

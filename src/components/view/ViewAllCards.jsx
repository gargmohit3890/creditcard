import React from "react";
import {Grid, Typography} from "@material-ui/core";
import ViewTable from "./table/ViewTable";

const ViewAllCards = () => (
  <Grid
    container
    item
    spacing={2}
    direction="row">
    <Typography variant="h5">
      Existing Cards
    </Typography>
    <ViewTable />
  </Grid>
);

export default ViewAllCards;

import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AddNewCard from "./add/AddNewCard";
import ViewAllCards from "./view/ViewAllCards";
import PageTitle from "./title/Title";
import Error from "./error/Error";

const useStyles = makeStyles(() => ({
  root: {
    padding: '20px'
  },
}));

const CreditCardProcessor = () => (
    <Grid container item
          className={useStyles().root}
          direction="column"
          spacing={2}
          justifyContent="center"
          alignItems="center">
      <PageTitle />
      <AddNewCard />
      <ViewAllCards />
      <Error />
    </Grid>
);

export default CreditCardProcessor;

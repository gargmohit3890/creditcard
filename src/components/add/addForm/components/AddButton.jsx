import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getNewCard} from "../../../../selector";
import {addToExistingCards} from "../../../../store/viewCards";
import {resetForm} from "../../../../store/addCard";
import {resetErrors, setErrors} from "../../../../store/errors";

const useStyles = makeStyles(() => ({
  fieldContainer: {
    margin: '5px 0 5px 0',
  },
  field: {
    margin: '5px 0 5px 0',
  }
}));

const AddButton = ({ newCard, addToExistingCards, resetForm, setErrors, resetErrors }) => {
  const classes = useStyles();

  const addCard = () => {
    // TODO: add service call
    // add fetch call here
    // move below lines to then clause
    addToExistingCards(newCard);
    resetForm();
    resetErrors();
    // move below lines to catch clause
    setErrors([
      { "field": "name", "errorMessage": "must not be blank"},
      { "field": "card number", "errorMessage": "must be a valid card"}
    ]);
  };

  return (
    <Grid className={classes.fieldContainer}>
      <Button
        id="add-button"
        onClick={addCard}
        variant="contained"
        color="primary"
        className={classes.field}>
        Add
      </Button>
    </Grid>
  );
}
const mapStateToProps = createStructuredSelector({
  newCard: getNewCard,
});
const mapDispatchToProps = {
  addToExistingCards,
  resetForm,
  setErrors,
  resetErrors
};
export default connect(mapStateToProps, mapDispatchToProps)(AddButton);

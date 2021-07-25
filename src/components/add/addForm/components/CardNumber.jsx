import React from "react";
import FormField from "./FormField";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {getCardNumber} from "../../../../selector";
import {setCardNumber} from "../../../../store/addCard";

const CardNumber = ({ cardNumber, setCardNumber }) => (
  <FormField
    id="card-number"
    label="Card Number"
    value={cardNumber}
    handleChange={setCardNumber}
  />
);

const mapStateToProps = createStructuredSelector({
  cardNumber: getCardNumber,
});
const mapDispatchToProps = {
  setCardNumber
};

export default connect(mapStateToProps, mapDispatchToProps)(CardNumber);

import React from "react";
import FormField from "./FormField";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {getLimit} from "../../../../selector";
import {setLimit} from "../../../../store/addCard";

const CardLimit = ({ limit, setLimit }) => (
  <FormField
    id="card-limit"
    label="Limit"
    value={limit}
    handleChange={setLimit}
  />
);

const mapStateToProps = createStructuredSelector({
  limit: getLimit,
});
const mapDispatchToProps = {
  setLimit
};

export default connect(mapStateToProps, mapDispatchToProps)(CardLimit);

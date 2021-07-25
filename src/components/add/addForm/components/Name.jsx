import React from "react";
import FormField from "./FormField";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {getName} from "../../../../selector";
import {setName} from "../../../../store/addCard";

const Name = ({ name, setName }) => (
  <FormField
    id="name"
    label="Name"
    value={name}
    handleChange={setName}
  />
);

const mapStateToProps = createStructuredSelector({
  name: getName,
});
const mapDispatchToProps = {
  setName
};

export default connect(mapStateToProps, mapDispatchToProps)(Name);

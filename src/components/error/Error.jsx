import React from "react";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {getErrorMessages, getErrorShown} from "../../selector";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

const Error = ({ shown, messages }) => (
  <Snackbar
    open={shown}
    anchorOrigin={{ vertical:'bottom', horizontal: 'left' }}
    autoHideDuration={6000}>
    <Alert severity="error" elevation={6} variant="filled">
      {messages.map(({ field, errorMessage }) =>
        <div key={field}><b>{field}: </b>{errorMessage}</div>
      )}
    </Alert>
  </Snackbar>
);

const mapStateToProps = createStructuredSelector({
  shown: getErrorShown,
  messages: getErrorMessages,
});

export default connect(mapStateToProps)(Error);

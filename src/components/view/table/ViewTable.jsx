import React, {useEffect} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {createStructuredSelector} from "reselect";
import {getAllCards} from "../../../selector";
import {connect} from "react-redux";
import {setExistingCards} from "../../../store/viewCards";

const StyledTable = withStyles(() => ({
  root: {
    minWidth: 650,
    border: '1px solid black',
  },
}))(Table);

const StyledCell = withStyles(() => ({
  root: {
    border: '1px solid black',
    textAlign: 'center',
    height: '15px'
  },
}))(TableCell);

const StyledHeader = withStyles(() => ({
  root: {
    border: '1px solid black',
    textAlign: 'center',
    height: '15px',
    backgroundColor: 'lightgray'
  },
}))(TableCell);

const ViewTable = ({ cards, setExistingCards }) => {
  useEffect(() => {
    // TODO: get service api call here
    // set this in then clause
    console.log('execute on load');
    setExistingCards([
      { name: 'test data 1', cardNumber: '3565', balance: 1000, limit: 5000 },
      { name: 'test data 2', cardNumber: '65456', balance: 10000, limit: 35000 },
    ]);
  }, [setExistingCards]);

  return (
    <TableContainer component={Paper}>
      <StyledTable>
        <TableHead>
          <TableRow>
            <StyledHeader>Name</StyledHeader>
            <StyledHeader>Card Number</StyledHeader>
            <StyledHeader>Balance</StyledHeader>
            <StyledHeader>Limit</StyledHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {cards.map((card) => (
            <TableRow key={card.cardNumber}>
              <StyledCell>{card.name}</StyledCell>
              <StyledCell>{card.cardNumber}</StyledCell>
              <StyledCell>{card.balance}</StyledCell>
              <StyledCell>{card.limit}</StyledCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cards: getAllCards,
});

const mapDispatchToProps = {
  setExistingCards
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewTable);

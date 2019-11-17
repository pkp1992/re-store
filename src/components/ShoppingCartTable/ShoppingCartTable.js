import React from "react";
import {connect} from 'react-redux'
import "./ShoppingCartTable.css";

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelet}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelet(id)}
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o"></i>
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right"
          >
            <i className="fa fa-plus-circle"></i>
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right"
          >
            <i className="fa fa-minus-circle"></i>
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total: ${total}</div>
    </div>
  );
};


const mapStateToProps = state => ({
  items: state.cartItems,
  total: state.orderTotal
});

const mapDispatchToProps = () => ({
  onIncrease: id => {
    console.log(`onIncrease ${id}`);
  },
  onDecrease: id => {
    console.log(`onDecrease ${id}`);
  },
  onDelet: id => {
    console.log(`onDelet ${id}`);
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartTable);

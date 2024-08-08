import React from "react";

function Transaction({ data }) {
  return (
    <tr>
      <td>{data.date}</td>
      <td>{data.description}</td>
      <td>{data.category}</td>
      <td>{data.amount}</td>
    </tr>
  );
}

export default Transaction;
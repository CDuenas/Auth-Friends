import React from "react";

const Friend = props => {
  return (
    <div key={props.id}>
      <h3>Name: {props.name}</h3>
      <h3>Age: {props.age}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  );
};

export default Friend;

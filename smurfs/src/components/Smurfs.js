import React from "react";

export const Smurfs = (props) => {
    const {name, age, height} = props.smurf
  return (
    <div>
      <h3>{name}</h3>
      <p>{height}</p>
      <p>{age}</p>
    </div>
  );
};

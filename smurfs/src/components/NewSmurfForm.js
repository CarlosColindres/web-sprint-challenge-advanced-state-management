import React, { useState } from "react";

const SmurftInitialForm = {
  name: "",
  height: "",
  age: "",
};

export const NewSmurfForm = ({postSmurfs}) => {
  const [smurfForm, setSmurfForm] = useState(SmurftInitialForm);

  const inputChange = (name, value) => {
    setSmurfForm({
      ...smurfForm,
      [name]: value,
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    inputChange(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formSubmit();
  };

  const formSubmit = () => {
    const newSmurf = {
      name: smurfForm.name.trim(),
      height: smurfForm.height.trim(),
      age: smurfForm.age.trim(),
    };
    postSmurfs(newSmurf)
  };

  return (
    <div>
      <h2>Add a smurf</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={smurfForm.name}
          onChange={onChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="height"
          value={smurfForm.height}
          onChange={onChange}
          placeholder="Height"
        />
        <input
          type="text"
          name="age"
          value={smurfForm.age}
          onChange={onChange}
          placeholder="Age"
        />
        <button type='submit'>Add Smurf</button>
      </form>
    </div>
  );
};

import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password.length < 8) {
      setPasswordError("Password Must be 8 digit");
    } else {
      setPasswordError("");
    }
  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 8) {
      setPasswordError("Password Must be 8 digit");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="border-2 p-10 rounded-xl w-90 my-10">
      <h1 className="text-xl">Controlled field: </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 my-2 p-2 rounded "
          placeholder="email"
          type="email"
          name="email"
        />{" "}
        <br />
        <input
          className="border-2 my-2 p-2 rounded"
          type="password"
          placeholder="password"
          name="password"
          defaultValue={password}
          onChange={handlePasswordOnChange}
        />{" "}
        <h1 className="font-bold text-red-500">{passwordError}</h1>
        <br />
        <input
          className="border-2 px-5 py-2 rounded-xl"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default ControlledField;

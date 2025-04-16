import React, { useRef } from "react";

const UncontrolledField = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <div className="border-2 p-10 rounded-xl w-90 my-10">
        <h1 className="text-xl">Uncontrolled field: </h1>
        <form onSubmit={handleSubmit}>
          <input
            className="border-2 my-2 p-2 rounded"
            placeholder="email"
            type="email"
            name="email"
            ref={emailRef}
          />{" "}
          <br />
          <input
            className="border-2 my-2 p-2 rounded"
            type="password"
            placeholder="password"
            name="password"
            ref={passwordRef}
          />{" "}
          <br />
          <input
            className="border-2 px-5 py-2 rounded-xl"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default UncontrolledField;

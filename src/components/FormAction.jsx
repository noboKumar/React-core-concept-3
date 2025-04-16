import React from "react";

const FormAction = () => {
  const handleFormAction = (formData) => {
    formData.preventDefault;
    console.log(formData.get("email"));
    console.log(formData.get("password"));
  };
  return (
    <div className="p-10">
      <form action={handleFormAction}>
        <input
          className="border-2 my-2 p-2 rounded"
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
        />{" "}
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

export default FormAction;

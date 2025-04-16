import React from "react";

const FormAction = () => {
  const handleFormAction = (formData) => {
    formData.preventDefault;
    console.log(formData.get("email"));
    console.log(formData.get("password"));
  };
  return (
    <div className="my-10 border-2 p-10 rounded-xl w-90">
      <h1 className="text-xl">Form action handler: </h1>
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

import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
import UserInputResponse from "./UserInputResponse";

const UserInput = () => {
  const filed = useContext(UserContext);
  console.log("SetFiled", filed);

  const resetForm = () => {
    filed.setValue("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="Please Enter Number"
        value={filed.value}
        onChange={(e) => filed.setValue(e.target.value)}
      />
      <button onClick={resetForm}>Reset</button>
      <UserInputResponse />
    </>
  );
};

export default UserInput;

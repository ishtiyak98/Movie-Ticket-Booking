import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

function Registration() {
  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className="ring-1 ring-secondary rounded p-2 lg:p-4">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default Registration;

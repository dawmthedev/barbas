import React, { useState } from "react";
import "react-phone-input-2/lib/style.css"; // Import styles for phone input
import PhoneInput from "react-phone-input-2"; // Install with: npm install react-phone-input-2

export const PhoneForm = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Phone submitted: ${phone}`);
  };

  return (
    <div className="text-center px-8 py-12 max-w-md w-full rounded-lg shadow-md">
      <div className="mb-4">
        <img src="/assets/barbaslogo.png" alt="Logo" />
      </div>
      {/* <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={setPhone}
            inputClass="w-full p-3 text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-white text-black px-6 py-3 rounded-lg w-full hover:bg-gray-300"
        >
          GET EARLY ACCESS
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-400">
        By submitting this form, you consent to receive marketing text messages
        from our company. Msg & data rates may apply.
      </p> */}
    </div>
  );
};

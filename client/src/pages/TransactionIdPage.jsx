import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TransactionIdPage = () => {
  const navigate = useNavigate();
  const [txnId, setTxnId] = useState("");
  const [screenshot, setScreenshot] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationData = JSON.parse(
      localStorage.getItem("stravix-temp-registration")
    );

    const formData = new FormData();
    formData.append("txnId", txnId);
    formData.append("screenshot", screenshot);
    Object.entries(registrationData).forEach(([key, value]) => {
      formData.append(key, value);
    });
// test
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/manual-signup`, formData);
      localStorage.removeItem("stravix-temp-registration");
      localStorage.setItem("token", res.data.token);
      navigate("/my-courses");
    } catch (error) {
      console.error("Manual registration failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow max-w-md w-full"
        encType="multipart/form-data"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Complete Your Enrollment
        </h2>

        <label className="block mb-2 font-medium">Transaction ID</label>
        <input
          type="text"
          required
          value={txnId}
          onChange={(e) => setTxnId(e.target.value)}
          className="input w-full"
        />

        <label className="block mt-4 mb-2 font-medium">Upload Screenshot</label>
        <input
          type="file"
          accept="image/*,application/pdf"
          required
          onChange={(e) => setScreenshot(e.target.files[0])}
          className="block"
        />

        <button
          type="submit"
          className="bg-secondary text-black font-semibold mt-6 w-full py-3 rounded-full hover:opacity-90 transition"
        >
          Submit & Go to Dashboard
        </button>
      </form>
    </section>
  );
};

export default TransactionIdPage;

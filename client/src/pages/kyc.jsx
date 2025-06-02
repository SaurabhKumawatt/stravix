import React, { useEffect, useState } from "react";
import axios from "axios";
import { UploadCloud } from "lucide-react";

const KYC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    idType: "",
    idNumber: "",
    panCard: null,
    aadhaarCard: null,
    bankPassbook: null,
    selfie: null,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    axios.get("/api/kyc")
      .then(res => setFormData(res.data))
      .catch(err => console.error("Error fetching KYC data", err));
  }, []);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateFile = (file, name) => {
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!file) return `Please upload your ${name}`;
    if (!allowedTypes.includes(file.type)) return `${name} must be JPEG, PNG, or PDF`;
    if (file.size > 5 * 1024 * 1024) return `${name} must not exceed 5MB`;
    return null;
  };

  const validate = () => {
    const newErrors = {};
    if (formData.fullName.trim().length < 3) newErrors.fullName = "Full Name must be at least 3 characters";
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    } else {
      const dobDate = new Date(formData.dob);
      const age = new Date().getFullYear() - dobDate.getFullYear();
      if (age < 18 || isNaN(dobDate.getTime())) newErrors.dob = "You must be at least 18 years old";
    }
    if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email address";
    if (!formData.idType) newErrors.idType = "Please select an ID document type";
    if (formData.idNumber.trim().length < 5) newErrors.idNumber = "ID Number must be at least 5 characters";

    const docErrors = ["panCard", "aadhaarCard", "bankPassbook", "selfie"].map(doc => ({
      [doc]: validateFile(formData[doc], doc.replace(/([A-Z])/g, " $1"))
    })).reduce((acc, curr) => ({ ...acc, ...curr }), {});

    Object.assign(newErrors, Object.fromEntries(Object.entries(docErrors).filter(([_, v]) => v !== null)));
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    if (validate()) {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) data.append(key, value);
      });

      axios.put("/api/kyc", data)
        .then(() => {
          setSuccessMessage("KYC Submitted Successfully!");
          setFormData({
            fullName: "",
            dob: "",
            email: "",
            idType: "",
            idNumber: "",
            panCard: null,
            aadhaarCard: null,
            bankPassbook: null,
            selfie: null,
          });
          setErrors({});
        })
        .catch(err => console.error("KYC submission error", err));
    }
  };

  return (
    <div className="min-h-screen p-6 bg-[#f5f6f7] flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">KYC Verification</h2>

        <div className="p-8 rounded-2xl bg-white shadow-xl border border-gray-200">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} error={errors.fullName} placeholder="Enter your full name" />
              <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} error={errors.dob} />
              <InputField label="Email" name="email" value={formData.email} onChange={handleChange} error={errors.email} placeholder="you@example.com" />
              <div>
                <label className="font-medium text-gray-700 mb-1 block">ID Document Type</label>
                <select
                  name="idType"
                  value={formData.idType}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-400 bg-gray-100 text-gray-700"
                >
                  <option value="" disabled>Select ID type</option>
                  <option value="passport">Passport</option>
                  <option value="driver_license">Driver's License</option>
                  <option value="national_id">National ID Card</option>
                </select>
                {errors.idType && <p className="text-red-500 text-sm mt-1">{errors.idType}</p>}
              </div>
              <InputField label="ID Number" name="idNumber" value={formData.idNumber} onChange={handleChange} error={errors.idNumber} placeholder="Enter your ID number" />
            </div>

            <UploadField label="PAN Card" name="panCard" onChange={handleChange} error={errors.panCard} />
            <UploadField label="Aadhaar Card" name="aadhaarCard" onChange={handleChange} error={errors.aadhaarCard} />
            <UploadField label="Bank Passbook" name="bankPassbook" onChange={handleChange} error={errors.bankPassbook} />
            <UploadField label="Your Photo (Selfie)" name="selfie" onChange={handleChange} error={errors.selfie} />

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-lg bg-gray-700 hover:bg-gray-800 text-white transition shadow-md"
            >
              Submit Verification
            </button>

            {successMessage && <p className="text-green-600 font-semibold mt-4">{successMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, error, placeholder = "", type = "text" }) => (
  <div>
    <label className="font-medium text-gray-700 mb-1 block">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-3 rounded-lg border border-gray-400 bg-gray-100 text-gray-700"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const UploadField = ({ label, name, onChange, error }) => (
  <div>
    <label className="font-medium text-gray-700 mb-1 block">{label}</label>
    <label className="flex items-center justify-center gap-2 cursor-pointer p-3 bg-gray-100 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-200 transition">
      <UploadCloud className="w-5 h-5 text-[#C7A055]" />
      <span className="font-medium">Upload {label}</span>
      <input
        type="file"
        name={name}
        onChange={onChange}
        accept=".jpg, .jpeg, .png, .pdf"
        className="hidden"
      />
    </label>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default KYC;

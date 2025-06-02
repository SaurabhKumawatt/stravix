import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({
    sponsorName: "",
    sponsorId: "",
    name: "",
    username: "",
    userId: "",
    dob: "",
    email: "",
    mobile: "",
    address: "",
    state: "",
    profilePic: "",
    courseProgress: [],
  });

  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    axios.get("/api/profile")
      .then(res => setProfile(res.data))
      .catch(err => console.error("Error fetching profile", err));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileUpdate = () => {
    axios.put("/api/profile", profile)
      .then(() => alert("Profile updated successfully"))
      .catch(err => console.error("Update error", err));
  };

  const handlePasswordChange = () => {
    axios.put("/api/profile/password", { password: newPassword })
      .then(() => alert("Password updated"))
      .catch(err => console.error("Password update error", err));
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: "#F1F3F6" }}>
      <h2 className="text-3xl font-bold text-center mb-6" style={{ color: "#444", textShadow: "1px 1px 1px #ccc" }}>
         Profile
      </h2>

      {/* Profile Section */}
      <div className="p-8 rounded-2xl max-w-4xl mx-auto mb-10" style={{
        backgroundColor: "#fff",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)"
      }}>
        <div className="grid md:grid-cols-2 gap-6">
          <InputField label="Sponsor Name" name="sponsorName" value={profile.sponsorName} disabled />
          <InputField label="Sponsor ID" name="sponsorId" value={profile.sponsorId} disabled />
          <InputField label="Name (As per Aadhar)" name="name" value={profile.name} onChange={handleChange} />
          <InputField label="Username" name="username" value={profile.username} onChange={handleChange} />
          <InputField label="User ID" name="userId" value={profile.userId} disabled />
          <InputField label="Date of Birth" name="dob" type="date" value={profile.dob} onChange={handleChange} />
          <InputField label="Email" name="email" value={profile.email} onChange={handleChange} />
          <InputField label="Mobile Number" name="mobile" value={profile.mobile} onChange={handleChange} />
          <div className="md:col-span-2">
            <InputField label="Address" name="address" value={profile.address} onChange={handleChange} />
          </div>
          <InputField label="State" name="state" value={profile.state} onChange={handleChange} />
        </div>

        {/* Profile Pic */}
        <div className="mt-6">
          <label style={labelStyle}>Profile Picture</label>
          <input
            type="file"
            onChange={(e) => setProfile(prev => ({ ...prev, profilePic: e.target.files[0] }))}
            className="w-full p-3 rounded-lg border border-[#B0B3B8] bg-white text-[#444]"
          />
        </div>

        <button
          onClick={handleProfileUpdate}
          className="w-full mt-6 py-3 rounded-xl font-bold text-lg"
          style={{
            backgroundColor: "#444",
            color: "#fff",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)"
          }}
        >
          Update Profile
        </button>
      </div>

      {/* Password Section */}
      <div className="p-8 rounded-2xl max-w-4xl mx-auto mb-10" style={{
        backgroundColor: "#fff",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)"
      }}>
        <h3 style={sectionHeading}>Change Password</h3>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          className="w-full p-3 rounded-lg border border-[#B0B3B8] bg-[#F9FAFB] text-[#444] font-medium mb-4"
        />
        <button
          onClick={handlePasswordChange}
          className="w-full py-3 rounded-xl font-bold text-lg"
          style={{
            backgroundColor: "#444",
            color: "#fff",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)"
          }}
        >
          Update Password
        </button>
      </div>

      {/* Course Progress*/}
      <div className="p-8 rounded-2xl max-w-4xl mx-auto" style={{
        backgroundColor: "#fff",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)"
      }}>
        <h3 style={sectionHeading}>Course Progress</h3>
        {profile.courseProgress?.length > 0 ? (
          <ul className="list-disc pl-6 text-[#444] font-medium">
            {profile.courseProgress.map((course, i) => (
              <li key={i} className="mb-2">
                <strong style={{ color: "#888" }}>{course.name}</strong> - {course.progress}%
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[#777]">No progress data available.</p>
        )}
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, type = "text", disabled }) => (
  <div>
    <label style={labelStyle}>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-full p-3 rounded-lg border border-[#B0B3B8] bg-[#F9FAFB] text-[#444] font-medium"
    />
  </div>
);

const labelStyle = {
  display: "block",
  marginBottom: "0.5rem",
  fontWeight: "600",
  color: "#444"
};

const sectionHeading = {
  fontSize: "1.5rem",
  fontWeight: "700",
  marginBottom: "1rem",
  color: "#333",
  borderBottom: "2px solid #C7A055",
  paddingBottom: "0.5rem"
};

export default Profile;

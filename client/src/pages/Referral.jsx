import React, { useState } from "react";

const Referral = () => {
  const [referralLink] = useState("https://yourdomain.com/register?ref=USER123");
  const [referredLeads] = useState([
    { name: "Rahul Kumar", email: "rahul@gmail.com", joinDate: "30 May 2025", status: "Joined", earnings: "₹50" },
    { name: "Simran Patel", email: "simran@yahoo.com", joinDate: "-", status: "Pending", earnings: "₹0" },
  ]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  return (
    <div style={{ backgroundColor: "#d9d9d9", minHeight: "100vh", padding: 24, fontFamily: "'Arial', sans-serif" }}>
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: 40,
          color: "#333",
          borderBottom: "3px solid #d4af37",  // golden underline
          paddingBottom: 12,
          maxWidth: 800,
          margin: "0 auto 40px",
          textShadow: "1px 1px 2px rgba(212, 175, 55, 0.4)", // subtle golden glow
        }}
      >
        My Referral
      </h2>

      <div
        style={{
          backgroundColor: "#ffffff",
          maxWidth: 800,
          margin: "0 auto 40px",
          padding: 30,
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // subtle shadow
        }}
      >
        <label
          style={{
            fontWeight: "700",
            fontSize: 18,
            display: "block",
            marginBottom: 12,
            color: "#555",
          }}
        >
          Referral Link
        </label>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <input
            type="text"
            readOnly
            value={referralLink}
            style={{
              flexGrow: 1,
              padding: 14,
              fontSize: 16,
              borderRadius: 8,
              border: "2px solid #d4af37",  // golden border accent
              color: "#333",
              fontWeight: "600",
              backgroundColor: "#f0f0f0",
              userSelect: "all",
            }}
          />
          <button
            onClick={copyToClipboard}
            style={{
              padding: "14px 20px",
              backgroundColor: "#b0b0b0",
              color: "#ffffff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: "700",
              fontSize: 16,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // subtle shadow
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a0a0a0")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#b0b0b0")}
          >
            Copy
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          maxWidth: 800,
          margin: "0 auto",
          padding: 30,
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // subtle shadow
        }}
      >
        <h3
          style={{
            marginBottom: 20,
            color: "#333",
            fontWeight: "700",
            fontSize: 24,
            borderBottom: "3px solid #d4af37",  // golden underline
            paddingBottom: 8,
            textShadow: "1px 1px 2px rgba(212, 175, 55, 0.25)", // subtle golden glow
          }}
        >
          Referred Leads
        </h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr
              style={{
                backgroundColor: "#f0f0f0",
                textAlign: "left",
                fontWeight: "700",
                color: "#333",
              }}
            >
              <th style={{ padding: 14, borderBottom: "2px solid #d4af37" }}>
                Name
              </th>
              <th style={{ padding: 14, borderBottom: "2px solid #d4af37" }}>
                Email
              </th>
              <th style={{ padding: 14, borderBottom: "2px solid #d4af37" }}>
                Join Date
              </th>
              <th style={{ padding: 14, borderBottom: "2px solid #d4af37" }}>
                Status
              </th>
              <th style={{ padding: 14, borderBottom: "2px solid #d4af37" }}>
                Earnings
              </th>
            </tr>
          </thead>
          <tbody>
            {referredLeads.map((lead, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #d0d0d0" }}>
                <td style={{ padding: 16, color: "#333", fontWeight: "600" }}>{lead.name}</td>
                <td style={{ padding: 16, color: "#555" }}>{lead.email}</td>
                <td style={{ padding: 16, color: "#555" }}>{lead.joinDate}</td>
                <td
                  style={{
                    padding: 16,
                    color: lead.status === "Joined" ? "#4caf50" : "#ff9800", // green for joined, orange for pending
                    fontWeight: "700",
                  }}
                >
                  {lead.status}
                </td>
                <td style={{ padding: 16, color: "#333", fontWeight: "700" }}>{lead.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Referral;

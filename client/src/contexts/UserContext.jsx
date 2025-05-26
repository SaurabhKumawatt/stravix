import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const token = localStorage.getItem("stravix-auth-token");

    if (!token) {
      console.warn("No token found in localStorage.");
      setUser(null);
      return;
    }

    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch user:", err.message);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser(); // You can trigger this again manually after login
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

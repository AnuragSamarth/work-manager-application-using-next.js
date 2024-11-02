"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserContext from "./userContext";
import { currentUser } from "@/services/userServices";

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUserData = await currentUser();
        setUser(currentUserData || null); // Set user data or null if no user found
      } catch (error) {
        console.log(error);
        toast.error("Error in loading current user");
        setUser(null);
      } finally {
        setLoading(false); // Loading complete
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

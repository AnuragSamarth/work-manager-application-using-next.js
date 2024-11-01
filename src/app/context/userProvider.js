"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserContext from "./userContext";
import { currentUser } from "@/services/userServices";

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
        try {
          const currentUserData = await currentUser(user);
          // console.log("current user",currentUserData);
          setUser({...currentUserData});
        } catch (error) {
          console.log(error);
          toast.error("Error in loading current user");
          setUser(undefined)
        }
      };
  
      fetchCurrentUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

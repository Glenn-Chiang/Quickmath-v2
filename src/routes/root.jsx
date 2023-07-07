import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../authContext";

export default function Root() {
  const [user, setUser] = useState();
  
  useEffect(() => {
    // This works because onAuthStateChanged returns the unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <Navbar/>
      <div className="content">
        <Outlet/>
      </div>
    </AuthContext.Provider>
  )
}

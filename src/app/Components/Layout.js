// components/Layout.js

import React, { useEffect, useState } from "react";
import { Loader } from "./Loader/Loader";


const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
    
        <div style={{ display: "flex", flexDirection: "column" }}>
          <main style={{ flex: 1 }}>{children}</main>
        </div>
    

      
    </>
  );
};

export default Layout;

import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/sidebar/Sidebar";

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} />
    </>
  );
};

export default App;

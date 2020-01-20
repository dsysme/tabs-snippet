import React from "react";
import { Link } from "react-router-dom";

const TabNav = () => {
  return (
    <nav>
      <Link to="/cast">cast</Link>
      <Link to="/reviews">reviews</Link>
    </nav>
  );
};

export default TabNav;

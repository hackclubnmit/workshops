import React from "react";
import { Link } from "react-router-dom";
import { Color } from "three";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="Nav">
          <Link to="/loader">Loader</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

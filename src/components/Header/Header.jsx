import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <h3>React Components Practice</h3>
        </div>

        <Navbar />
      </header>
    </>
  );
}

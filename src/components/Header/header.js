// import React from "react";
// // import { Link, Typography } from "@mui/material";

export default function Header({ setPage }) {
  return (
    <header>
      <h1>Hello</h1>
      <nav>
        <a href="#about" onClick={() => setPage("about")}>
          About
        </a>
        <a href="#portfolio" onClick={() => setPage("Portfolio")}>
          Portfolio
        </a>
        <a href="#contact" onClick={() => setPage("Contact")}>
          Contact
        </a>
      </nav>
    </header>
  );
}


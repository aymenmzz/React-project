import React from "react";

export default function Header() {
  return (
    <header className="border-header ">
      <nav className="container pt-3 bg-black">
        <img
          className="img-item"
          alt=""
          src="https://imgs.search.brave.com/6l5T8TW8a2V4iLiufNKfPhCbhjnqK9sn_pTrepf8lek/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/M0N3QllrbW5NZnBB/OURqdXAyMkp3SGFI/YSZwaWQ9QXBp"
        />
        <ul className="nav-items container">
          <li className="nav-single-item">Pricing </li>
          <li className="nav-single-item">About</li>
          <li className="nav-single-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

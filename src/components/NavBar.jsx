import React from "react";
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav id="nav">
      <ul className="links">
        <li className="active">
          <a href="#land">Terrenos</a>
        </li>
        <li>
          <a href="#location">Ubicacion</a>
        </li>
        <li>
          <a href="#gallery">Galeria</a>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <Link href="#" className="icon brands fa-facebook-f">
            <span className="label">Facebook</span>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/laquenita_" className="icon brands fa-instagram" target="_blank">
            <span className="label">Instagram</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="icon solid fa-envelope" >
            <span className="label">Email</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="icon brands fa-github">
            <span className="label">GitHub</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

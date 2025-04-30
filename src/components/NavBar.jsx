import React from "react";
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav id="nav">
      <ul class="links">
        <li class="active">
          <a href="#land">Terrenos</a>
        </li>
        <li>
          <a href="#location">Ubicacion</a>
        </li>
        <li>
          <a href="#gallery">Galeria</a>
        </li>
      </ul>
      <ul class="icons">
        <li>
          <Link href="#" class="icon brands fa-facebook-f">
            <span class="label">Facebook</span>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/laquenita_" class="icon brands fa-instagram" target="_blank">
            <span class="label">Instagram</span>
          </Link>
        </li>
        <li>
          <Link href="#" class="icon solid fa-envelope" >
            <span class="label">Email</span>
          </Link>
        </li>
        <li>
          <Link href="#" class="icon brands fa-github">
            <span class="label">GitHub</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

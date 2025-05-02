import React, { useEffect, useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBG, setShowBG] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 0.97) {
        setShowBG(true);
      } else {
        setShowBG(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        id="navPanelToggle"
        className={`${menuOpen && "navFalse"} ${showBG && "alt"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Menu
      </a>
      {menuOpen && (
        <div className="closeNav" onClick={() => setMenuOpen(!menuOpen)} />
      )}
      <nav id={`${"nav"}`} className={`${!menuOpen && "navFalse"}`}>
        {menuOpen && (
          <i
            className="fas fa-times closeButton"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
        <ul className={`links ${menuOpen ? "mobile" : ""}`}>
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
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/laquenita_"
              className="icon brands fa-instagram"
              target="_blank"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/543624712344" className="icon brands fa-whatsapp">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a href="#message" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
//   return (
//     <nav id="nav">
//       <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </button>
//       <ul className={`links ${menuOpen ? "open" : ""}`}>
//         <li className="active">
//           <a href="#land">Terrenos</a>
//         </li>
//         <li>
//           <a href="#location">Ubicacion</a>
//         </li>
//         <li>
//           <a href="#gallery">Galeria</a>
//         </li>
//       </ul>
//       <ul className="icons">
//         <li>
//           <Link href="#" className="icon brands fa-facebook-f">
//             <span className="label">Facebook</span>
//           </Link>
//         </li>
//         <li>
//           <Link href="https://www.instagram.com/laquenita_" className="icon brands fa-instagram" target="_blank">
//             <span className="label">Instagram</span>
//           </Link>
//         </li>
//         <li>
//           <Link href="#" className="icon solid fa-envelope" >
//             <span className="label">Email</span>
//           </Link>
//         </li>
//         <li>
//           <Link href="#" className="icon brands fa-github">
//             <span className="label">GitHub</span>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

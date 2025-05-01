import { Link } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Body } from "./components/Body";
import { SendMessage } from "./components/SendMessage";
import Logo from "./images/svg/Logo.svg";

function App() {
  return (
    <>
      <div id="intro">
        {/* <h1>La Quenita</h1> */}
        <img src={Logo} alt="logo" className="logo" />
        <p>
          Loteo abierto en zona tranquila, con naturaleza y acceso directo.{" "}
          <br /> A 15km de la plaza 25 de Mayo. Con las mejores financiaciones y
          cuotas.{" "}
        </p>
        <ul className="actions">
          <li>
            <a
              href="#land"
              className="button icon solid solo fa-arrow-down scrolly"
            >
              Continue
            </a>
          </li>
        </ul>
      </div>
      {/* <header id="header">
        <Link href="index.html" className="logo">
          La Quenita
        </Link>
      </header> */}
      <NavBar />
      <Body />
      <SendMessage />
    </>
  );
}

export default App;

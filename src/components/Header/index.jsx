import { Link } from "react-router-dom";
import HeaderLink from "../HeaderLink";
import "./Header.module.css";
import logo from "./logo.png";

export default function Header() {
  return (
    <header>
      <Link to="./">
        <img src={logo} alt="Cine Tag Logo" />
      </Link>
      <nav>
        <HeaderLink url="/">Home</HeaderLink>
        <HeaderLink url="/Favorites">Favorites</HeaderLink>
      </nav>
    </header>
  );
}

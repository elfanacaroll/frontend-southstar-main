import "./Header.css";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links-nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/cadastro">Cadastro</Link>
        </div>
      </header>
    </>
  );
}

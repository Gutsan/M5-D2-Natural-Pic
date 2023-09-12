import { Link } from "react-router-dom";
import "./Header.css"

import { IconCamera } from "@tabler/icons-react";
export const Header = () => {
  return (
    <>
      <header>
        <h1> <IconCamera /> Natural<span>Pic</span></h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Favoritos">Favoritos</Link>
      </nav>
      </header>
    </>
  );
};
